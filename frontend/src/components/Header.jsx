import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Soluções', id: 'services' },
    { label: 'Pacotes', id: 'plans' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/VPATech-Logo-New.png" 
              alt="VPA Tech" 
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#13295f] hover:text-[#94c8ff]' 
                    : 'text-white hover:text-[#94c8ff]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+5511952684250">
              <Button 
                variant="outline" 
                className={`transition-all duration-200 ${
                  isScrolled
                    ? 'border-[#13295f] text-[#13295f] hover:bg-[#13295f] hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-[#13295f]'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                (11) 95268-4250
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-200 ${
              isScrolled ? 'text-[#13295f]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#13295f] hover:text-[#94c8ff] font-medium transition-colors duration-200 text-left px-4"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+5511952684250" className="px-4">
                <Button className="w-full bg-[#13295f] hover:bg-[#13295f]/90 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
