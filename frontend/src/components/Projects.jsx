import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01', name: 'Alvor Café', sector: 'Café móvel & eventos',
    tags: ['Site', 'Google', 'SEO', 'Performance'], url: 'https://www.alvorcafe.com.br/',
    headline: 'Uma presença digital que acompanha a marca fora do balcão.',
    text: 'Da construção do site às melhorias de presença no Google, o projeto evolui junto com a Alvor para facilitar descoberta, confiança e contato.',
    image: '/project-alvor-960.webp', srcSet: '/project-alvor-480.webp 480w, /project-alvor-960.webp 960w, /project-alvor-1440.webp 1440w', alt: 'Página inicial do site da Alvor Café'
  },
  {
    id: '02', name: 'RKL Acabamentos', sector: 'Reformas & acabamentos',
    tags: ['Site', 'Responsivo', 'Conversão'], url: 'https://www.rklacabamentos.com.br/',
    headline: 'O trabalho da RKL apresentado com mais clareza e confiança.',
    text: 'Serviços, informações e canais de contato foram organizados em uma experiência profissional e direta para quem está conhecendo a empresa.',
    image: '/project-rkl-960.webp', srcSet: '/project-rkl-480.webp 480w, /project-rkl-960.webp 960w, /project-rkl-1440.webp 1440w', alt: 'Página inicial do site da RKL Acabamentos'
  },
  {
    id: '03', name: 'Maggiori Alpha', sector: 'Transporte executivo',
    tags: ['Site', 'UX', 'Responsivo'], url: 'https://www.maggiorialpha.com.br/',
    headline: 'Uma primeira impressão digital à altura do serviço executivo.',
    text: 'Uma experiência elegante e objetiva para transmitir profissionalismo, apresentar o serviço e encurtar o caminho entre interesse e contato.',
    image: '/project-maggiori-960.webp', srcSet: '/project-maggiori-480.webp 480w, /project-maggiori-960.webp 960w, /project-maggiori-1440.webp 1440w', alt: 'Página inicial do site da Maggiori Alpha'
  }
];

export const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="vpa-projects-section">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mb-12 flex items-end justify-between gap-8 lg:mb-16">
          <div>
            <p className="vpa-section-index">02 / Projetos selecionados</p>
            <h2 className="mt-5 max-w-[780px] text-[clamp(2.6rem,5vw,5.3rem)] font-medium leading-[.96] tracking-[-.055em]">Trabalho real.<br/><span className="vpa-projects-soft">Para negócios reais.</span></h2>
          </div>
          <p className="vpa-reading-muted hidden max-w-[360px] text-sm leading-6 lg:block">Uma seleção de projetos que mostram como estratégia, design e tecnologia se encontram na prática.</p>
        </div>

        <div className="vpa-project-stage">
          <div className="vpa-project-nav" role="tablist" aria-label="Projetos da VPA Tech">
            {projects.map((item, index) => (
              <button key={item.name} role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`vpa-project-tab ${active === index ? 'is-active' : ''}`}>
                <span className="vpa-project-tab-number">{item.id}</span>
                <span><strong>{item.name}</strong><small>{item.sector}</small></span>
                <span className="vpa-project-tab-arrow">↗</span>
              </button>
            ))}
          </div>

          <article className="vpa-project-feature" key={project.name}>
            <div className="vpa-project-visual">
              <div className="vpa-browser-bar" aria-hidden="true"><i/><i/><i/><span>{project.url.replace('https://www.','')}</span></div>
              <div className="vpa-project-screenshot-wrap">
                <img className="vpa-project-screenshot" src={project.image} srcSet={project.srcSet} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 64px), 62vw" alt={project.alt} width="960" height="478" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="vpa-project-copy">
              <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span className="vpa-project-tag" key={tag}>{tag}</span>)}</div>
              <h3>{project.headline}</h3>
              <p className="vpa-reading-muted">{project.text}</p>
              <a href={project.url} target="_blank" rel="noreferrer" className="vpa-inline-arrow">Visitar projeto <ArrowUpRight className="h-4 w-4"/></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
