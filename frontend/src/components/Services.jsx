import React from 'react';
import { Globe, Code, Smartphone, Zap, Link, Headphones, Lightbulb } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Globe,
  Code,
  Smartphone,
  Zap,
  Link,
  Headphones,
  Lightbulb
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#94c8ff]/20 text-[#13295f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossas Soluções
          </div>
          <h2 className="text-4xl font-bold text-[#13295f] mb-6">
            Soluções práticas para presença digital
          </h2>
          <p className="text-lg text-gray-600">
            Pacotes prontos para sua empresa se posicionar melhor no digital — e, quando necessário, suporte técnico para manter e evoluir sistemas existentes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`group relative p-8 bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  service.featured 
                    ? 'border-[#94c8ff] shadow-lg' 
                    : 'border-gray-200 hover:border-[#94c8ff]'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#13295f] text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Destaque
                  </div>
                )}
                
                <div className="w-16 h-16 bg-[#94c8ff]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#13295f] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#13295f] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-[#13295f] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Não sabe qual solução é ideal para o seu negócio?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-[#13295f] hover:bg-[#13295f]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Fale com Nossa Consultoria
          </button>

        {/* Technical Services Callout */}
        <div className="mt-16 bg-gradient-to-r from-[#13295f] to-[#1b3a86] rounded-2xl p-8 md:p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Também atendemos demandas técnicas específicas
              </h3>
              <p className="text-white/90 leading-relaxed">
                Além dos nossos pacotes de presença digital, a VPA Tech também presta serviços técnicos especializados:
                manutenção de sistemas, correções, melhorias e evolução de aplicações já existentes.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#94c8ff] hover:bg-[#94c8ff]/90 text-[#13295f] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Falar com um programador
              </a>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
