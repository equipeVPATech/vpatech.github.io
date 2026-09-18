import React, { useEffect, useRef, useState } from 'react';

const RAD = Math.PI / 180;
const wrapLon = (v) => ((v + 540) % 360) - 180;

function project(lon, lat, centerLon, centerLat, cx, cy, r) {
  const lam = (lon - centerLon) * RAD;
  const phi = lat * RAD;
  const phi0 = centerLat * RAD;
  const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi);
  const cos0 = Math.cos(phi0), sin0 = Math.sin(phi0);
  const z = sin0 * sinPhi + cos0 * cosPhi * Math.cos(lam);
  return { x: cx + r * cosPhi * Math.sin(lam), y: cy - r * (cos0 * sinPhi - sin0 * cosPhi * Math.cos(lam)), z };
}

function rings(geometry) {
  if (!geometry) return [];
  if (geometry.type === 'Polygon') return geometry.coordinates;
  if (geometry.type === 'MultiPolygon') return geometry.coordinates.flat();
  return [];
}

export const InteractiveGlobe = () => {
  const canvasRef = useRef(null);
  const drag = useRef(null);
  const world = useRef(null);
  const [centerLon, setCenterLon] = useState(-52);
  const [centerLat, setCenterLat] = useState(-10);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL || ''}/world.geojson`).then(r => r.json()).then(data => { world.current = data; draw(); }).catch(()=>{});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const draw = React.useCallback(() => {
    const canvas = canvasRef.current, data = world.current;
    if (!canvas || !data) return;
    const box = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(box.width*dpr)); canvas.height = Math.max(1, Math.round(box.height*dpr));
    const ctx = canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0);
    const w=box.width,h=box.height,cx=w/2,cy=h/2,r=Math.min(w,h)*.455;
    ctx.clearRect(0,0,w,h);
    const ocean=ctx.createRadialGradient(cx-r*.35,cy-r*.35,r*.08,cx,cy,r);
    ocean.addColorStop(0,'#b9dcff'); ocean.addColorStop(.42,'#7eb3ec'); ocean.addColorStop(1,'#315f9f');
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=ocean; ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();
    // latitude / longitude grid
    ctx.strokeStyle='rgba(255,255,255,.22)'; ctx.lineWidth=.8;
    const line=(pts)=>{ctx.beginPath();let pen=false;for(const [lo,la] of pts){const p=project(lo,la,centerLon,centerLat,cx,cy,r);if(p.z>0){if(!pen){ctx.moveTo(p.x,p.y);pen=true}else ctx.lineTo(p.x,p.y)}else pen=false;}ctx.stroke();};
    for(let lat=-60;lat<=60;lat+=30){let pts=[];for(let lon=-180;lon<=180;lon+=2)pts.push([lon,lat]);line(pts)}
    for(let lon=-180;lon<180;lon+=30){let pts=[];for(let lat=-88;lat<=88;lat+=2)pts.push([lon,lat]);line(pts)}
    const drawFeature=(feature, fill, stroke, lw)=>{
      ctx.fillStyle=fill;ctx.strokeStyle=stroke;ctx.lineWidth=lw;
      for(const ring of rings(feature.geometry)){
        ctx.beginPath();let pen=false,visible=0;
        for(const coord of ring){const p=project(coord[0],coord[1],centerLon,centerLat,cx,cy,r);if(p.z>0.005){if(!pen){ctx.moveTo(p.x,p.y);pen=true}else ctx.lineTo(p.x,p.y);visible++;}else pen=false;}
        if(visible>2){ctx.closePath();ctx.fill();ctx.stroke();}
      }
    };
    data.features.forEach(f=>drawFeature(f,'rgba(239,247,255,.93)','rgba(56,94,143,.35)',.65));
    const brazil=data.features.find(f=>f.id==='BRA'||/brazil/i.test(f.properties?.name||''));
    if(brazil) drawFeature(brazil,'#2f6f3e','rgba(235,250,239,.95)',1.25);
    const shade=ctx.createRadialGradient(cx-r*.35,cy-r*.35,r*.45,cx+r*.2,cy+r*.1,r*1.05);
    shade.addColorStop(.35,'rgba(255,255,255,0)');shade.addColorStop(1,'rgba(4,20,50,.34)');ctx.fillStyle=shade;ctx.fillRect(cx-r,cy-r,r*2,r*2);
    ctx.restore();
    ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(225,241,255,.7)';ctx.lineWidth=1.4;ctx.stroke();
  },[centerLon,centerLat]);

  useEffect(()=>{draw(); const on=()=>draw(); window.addEventListener('resize',on); return()=>window.removeEventListener('resize',on)},[draw]);

  const start=(e)=>{e.currentTarget.setPointerCapture(e.pointerId);drag.current={x:e.clientX,y:e.clientY,lon:centerLon,lat:centerLat}};
  const move=(e)=>{if(!drag.current)return;setCenterLon(wrapLon(drag.current.lon-(e.clientX-drag.current.x)*.35));setCenterLat(Math.max(-65,Math.min(65,drag.current.lat+(e.clientY-drag.current.y)*.25)))};
  const stop=()=>{drag.current=null};

  return <div className="vpa-globe-wrap">
    <div className="vpa-globe-stage" onPointerDown={start} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} aria-label="Globo terrestre interativo. Arraste para girar; o Brasil está destacado em verde.">
      <canvas ref={canvasRef}/>
    </div>
    <div className="vpa-globe-hint"><span>↔</span><strong>Gire o globo</strong><small>arraste para explorar</small></div>
  </div>;
};
