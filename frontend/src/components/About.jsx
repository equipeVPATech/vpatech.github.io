import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { companyInfo, images } from '../data/mock';

export const About = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Avaliação 5.0 no Google com clientes satisfeitos'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Projetos entregues em até 3 dias úteis'
    },
    {
      icon: Users,
      title: 'Atendimento Local',
      description: 'Atendimento em Jundiaí e projetos para todo o Brasil'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images.about}
                alt="VPA Tech - Equipe"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13295f]/60 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#13295f] text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-[#94c8ff]">{companyInfo.rating}</div>
              <div className="text-sm mt-1">★★★★★</div>
              <div className="text-xs mt-1 opacity-90">{companyInfo.reviewCount} avaliações</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-[#94c8ff]/20 text-[#13295f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sobre a VPA Tech
            </div>
            
            <h2 className="text-4xl font-bold text-[#13295f] mb-6">
              Tecnologia aplicada aos negócios, sem complicação
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>VPA Tech</strong> é uma empresa de software especializada em criar soluções 
              digitais que impulsionam o crescimento de pequenas e médias empresas em Jundiaí, 
              Várzea Paulista, Campinas e região.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com foco em <strong>qualidade</strong>, <strong>agilidade</strong> e <strong>atendimento 
              personalizado</strong>, desenvolvemos sites, sistemas, aplicativos e automações que 
              transformam a forma como nossos clientes fazem negócios.
            </p>

            {/* Benefits Grid */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#94c8ff]/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#13295f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#13295f] mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#94c8ff] flex-shrink-0" />
                <span className="text-gray-700">Mais de 50 projetos entregues com sucesso</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#94c8ff] flex-shrink-0" />
                <span className="text-gray-700">Atendimento especializado e humanizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#94c8ff] flex-shrink-0" />
                <span className="text-gray-700">Suporte contínuo e consultoria tecnológica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
