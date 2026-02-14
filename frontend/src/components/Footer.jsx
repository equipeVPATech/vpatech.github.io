import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Link2 } from 'lucide-react';
import { companyInfo } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#13295f] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/VPATech-Logo-New.png" 
              alt="VPA Tech" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
            Tecnologia aplicada aos negócios com pacotes práticos de presença digital e suporte técnico.
            Atendimento em Jundiaí – SP e projetos para todo o Brasil.
          </p>
            <div className="flex items-center space-x-2 text-[#94c8ff] mb-2">
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-white/60 text-xs">+10 avaliações no Google</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white/80 hover:text-[#94c8ff] transition-colors duration-200 text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-[#94c8ff] transition-colors duration-200 text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-[#94c8ff] transition-colors duration-200 text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('plans')}
                  className="text-white/80 hover:text-[#94c8ff] transition-colors duration-200 text-sm"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-[#94c8ff] transition-colors duration-200 text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Sites Profissionais</li>
              <li>Sistemas Personalizados</li>
              <li>Aplicativos Mobile</li>
              <li>Automações</li>
              <li>Integrações</li>
              <li>Suporte Técnico</li>
              <li>Consultoria Tecnológica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#94c8ff] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/80">
                  <p>{companyInfo.address.street}</p>
                  <p>{companyInfo.address.neighborhood}</p>
                  <p>{companyInfo.address.city} - {companyInfo.address.state}</p>
                </div>
              </div>
              <a 
                href="tel:+5511952684250"
                className="flex items-center space-x-3 text-white/80 hover:text-[#94c8ff] transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-[#94c8ff] flex-shrink-0" />
                <span className="text-sm">{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex items-center space-x-3 text-white/80 hover:text-[#94c8ff] transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-[#94c8ff] flex-shrink-0" />
                <span className="text-sm">{companyInfo.email}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/vpatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#94c8ff] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/vpatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#94c8ff] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linktr.ee/vpatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#94c8ff] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Linktr.ee"
                >
                  <Link2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} VPA Tech. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/politica-privacidade"
                className="text-white/60 hover:text-[#94c8ff] transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <span className="text-white/30">•</span>
              <a
                href={companyInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#94c8ff] transition-colors duration-200"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
