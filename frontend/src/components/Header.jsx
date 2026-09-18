import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const saved = localStorage.getItem('vpa-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('vpa-theme', next ? 'dark' : 'light');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Serviços', id: 'services' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Processo', id: 'process' },
    { label: 'Sobre', id: 'about' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className={`vpa-nav-shell mx-auto max-w-[1360px] ${isScrolled || isMobileMenuOpen ? 'vpa-nav-shell--active' : ''}`}>
        <div className="flex h-[62px] items-center px-4 sm:px-5">
          <button onClick={() => scrollToSection('hero')} aria-label="Ir para o início" className="flex min-w-[130px] items-center">
            <img src={isDark ? '/vpa-logo-dark-96.webp' : '/vpa-logo-light-96.webp'} alt="VPA Tech" width="96" height="96" fetchPriority="high" decoding="async" className="h-8 w-auto sm:h-9" />
          </button>

          <nav className="mx-auto hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {menuItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="vpa-nav-link">{item.label}</button>
            ))}
          </nav>

          <div className="ml-auto hidden min-w-[250px] items-center justify-end gap-1 md:flex">
            <button onClick={toggleLanguage} type="button" className="vpa-nav-control" aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}><span className={lang === 'pt' ? 'font-bold' : 'opacity-40'}>PT</span> <span className="opacity-40">/</span> <span className={lang === 'en' ? 'font-bold' : 'opacity-40'}>EN</span></button>
            <button onClick={toggleTheme} type="button" aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'} className="vpa-nav-icon">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => scrollToSection('contact')} className="vpa-nav-cta group">
              Fale com a VPA <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <button onClick={toggleTheme} type="button" aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'} className="vpa-nav-icon">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen((v) => !v)} aria-label="Abrir menu" aria-expanded={isMobileMenuOpen} className="vpa-nav-icon">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#13295f]/10 px-4 pb-4 pt-3 dark:border-white/10 md:hidden">
            <nav className="flex flex-col">
              {menuItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="py-3 text-left text-sm font-medium text-[#13295F] dark:text-white">{item.label}</button>)}
            </nav>
            <div className="mt-2 flex items-center justify-between border-t border-[#13295f]/10 pt-4 dark:border-white/10">
              <button onClick={toggleLanguage} type="button" className="text-xs font-medium text-[#13295F] dark:text-white" aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}><span className={lang === 'pt' ? 'font-bold' : 'opacity-40'}>PT</span> <span className="opacity-40">/</span> <span className={lang === 'en' ? 'font-bold' : 'opacity-40'}>EN</span></button>
              <button onClick={() => scrollToSection('contact')} className="vpa-nav-cta">Fale com a VPA <ArrowUpRight className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
