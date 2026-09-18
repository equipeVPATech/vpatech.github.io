import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer = () => {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="vpa-footer">
      <div className="vpa-footer-main">
        <div className="vpa-footer-brand">
          <img src="/vpa-logo-footer-256.webp" alt="VPA Tech" width="256" height="256" loading="lazy" decoding="async" />
          <p>Presença digital construída para transformar buscas e visitas em oportunidades de negócio.</p>
        </div>

        <nav className="vpa-footer-nav" aria-label="Navegação do rodapé">
          <span>Navegação</span>
          <button onClick={() => go('hero')}>Início</button>
          <button onClick={() => go('projects')}>Projetos</button>
          <button onClick={() => go('services')}>Serviços</button>
          <button onClick={() => go('process')}>Processo</button>
          <button onClick={() => go('contact')}>Contato</button>
        </nav>

        <div className="vpa-footer-contact">
          <span>Contato</span>
          <a href="https://wa.me/5511996046338" target="_blank" rel="noreferrer">
            <Phone aria-hidden="true" />
            <span>(11) 99604-6338</span>
            <ArrowUpRight className="vpa-footer-external" aria-hidden="true" />
          </a>
          <a href="mailto:vpatech.br@gmail.com">
            <Mail aria-hidden="true" />
            <span>vpatech.br@gmail.com</span>
            <ArrowUpRight className="vpa-footer-external" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="vpa-footer-bottom">
        <p>© {year} VPA Tech. {lang === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}</p>
        <div className="vpa-footer-bottom-links">
          <Link to="/politica-privacidade">Política de Privacidade</Link>
          <span aria-hidden="true"></span>
          <a href="#hero" onClick={(e) => { e.preventDefault(); go('hero'); }}>Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
};
