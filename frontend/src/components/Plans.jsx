import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { websitePlans, exclusions } from '../data/mock';

export const Plans = () => {
  const handleWhatsApp = (planName) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no plano "${planName}". Gostaria de mais informações.`);
    window.open(`https://wa.me/5511952684250?text=${message}`, '_blank');
  };

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#94c8ff]/20 text-[#13295f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Pacotes
          </div>
          <h2 className="text-4xl font-bold text-[#13295f] mb-6">
            Escolha o Pacote Ideal para Seu Negócio
          </h2>
          <p className="text-lg text-gray-600">
            Pacotes práticos para sua empresa se posicionar no digital com profissionalismo e agilidade.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {websitePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.featured
                  ? 'bg-[#13295f] text-white shadow-xl scale-105'
                  : 'bg-white border-2 border-gray-200 hover:border-[#94c8ff]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#94c8ff] text-[#13295f] px-6 py-1 rounded-full text-sm font-bold">
                  🔥 Mais Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-[#13295f]'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-3">
                  <span className={`text-4xl font-bold ${plan.featured ? 'text-[#94c8ff]' : 'text-[#13295f]'}`}>
                    R$ {plan.price}
                  </span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-[#94c8ff]' : 'text-[#13295f]'}`} />
                    <span className={`text-sm ${plan.featured ? 'text-white/90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Delivery Info */}
              <div className={`space-y-2 mb-6 pt-6 border-t ${plan.featured ? 'border-white/20' : 'border-gray-200'}`}>
                <p className={`text-xs ${plan.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  <strong>Entrega:</strong> {plan.deliveryTime}
                </p>
              </div>

              {plan.note && (
                <div className={`mb-6 p-3 rounded-lg text-xs ${plan.featured ? 'bg-white/10' : 'bg-amber-50 text-amber-800'}`}>
                  {plan.note}
                </div>
              )}

              {/* CTA Button */}
              <Button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#94c8ff] hover:bg-[#94c8ff]/90 text-[#13295f]'
                    : 'bg-[#13295f] hover:bg-[#13295f]/90 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Exclusions */}
        <div className="max-w-4xl mx-auto bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-[#13295f] mb-4 text-center">
            ⚠️ O que NÃO está incluso nos planos acima
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exclusions.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700">
                <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6 text-center">
            Precisa de algo mais complexo? <span className="text-[#13295f] font-semibold cursor-pointer hover:underline" onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>Entre em contato</span> para um orçamento personalizado!
          </p>
        </div>
      </div>
    </section>
  );
};
