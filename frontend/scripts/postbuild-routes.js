const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const source = path.join(buildDir, 'index.html');
const routeDir = path.join(buildDir, 'politica-privacidade');
const target = path.join(routeDir, 'index.html');

if (!fs.existsSync(source)) {
  throw new Error('build/index.html not found. Run this script after the React build.');
}

let html = fs.readFileSync(source, 'utf8');

// package.json uses homepage="/" so the production bundle and lazy-loaded
// chunks always resolve from the site root. This is required for direct
// navigation to nested GitHub Pages routes such as /politica-privacidade/.

// Route-specific SEO metadata. This page is a real indexable URL, not a SPA 404 fallback.
html = html
  .replace(/<title>[^<]*<\/title>/, '<title>Política de Privacidade | VPA Tech</title>')
  .replace(/<meta name="description" content="[^"]*"\s*\/>/, '<meta name="description" content="Conheça a Política de Privacidade da VPA Tech e como tratamos dados pessoais em conformidade com a LGPD." />')
  .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, '<link rel="canonical" href="https://vpatech.com.br/politica-privacidade" />')
  .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, '<meta property="og:url" content="https://vpatech.com.br/politica-privacidade" />')
  .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, '<meta property="og:title" content="Política de Privacidade | VPA Tech" />')
  .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, '<meta property="og:description" content="Saiba como a VPA Tech coleta, utiliza e protege dados pessoais em conformidade com a LGPD." />')
  .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, '<meta name="twitter:title" content="Política de Privacidade | VPA Tech" />')
  .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, '<meta name="twitter:description" content="Saiba como a VPA Tech coleta, utiliza e protege dados pessoais em conformidade com a LGPD." />');

fs.mkdirSync(routeDir, { recursive: true });
fs.writeFileSync(target, html);
console.log('Generated build/politica-privacidade/index.html for GitHub Pages.');
