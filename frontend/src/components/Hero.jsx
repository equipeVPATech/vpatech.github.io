import React from 'react';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo, images } from '../data/mock';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de um orçamento para Site Essencial / Presença Digital.');
    window.open(`https://wa.me/5511952684250?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images.hero}
          alt="VPA Tech - Sites profissionais e presença digital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13295f]/95 via-[#13295f]/85 to-[#13295f]/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="flex items-center space-x-4 mb-6 animate-fade-in">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold ml-2">{companyInfo.rating}</span>
              <span className="text-white/90 ml-1 text-sm">({companyInfo.reviewCount} avaliações)</span>
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Jundiaí, SP</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme Seu Negócio com
            <span className="block text-[#94c8ff] mt-2">Tecnologia Profissional</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Tecnologia aplicada aos negócios com pacotes práticos para empresas que querem se posicionar no digital, com atendimento em Jundiaí e projetos para todo o Brasil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-[#94c8ff] hover:bg-[#94c8ff]/90 text-[#13295f] font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={handleWhatsApp}
            >
              Solicitar orçamento no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#13295f] font-semibold text-lg px-8 py-6 transition-all duration-300"
              onClick={scrollToContact}
            >
              Ver Pacotes
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-[#94c8ff]">50+</div>
              <div className="text-white/80 text-sm mt-1">Projetos</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-[#94c8ff]">5.0</div>
              <div className="text-white/80 text-sm mt-1">Avaliação</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-[#94c8ff]">100%</div>
              <div className="text-white/80 text-sm mt-1">Satisfação</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-[#94c8ff]">3 dias</div>
              <div className="text-white/80 text-sm mt-1">Entrega</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};
