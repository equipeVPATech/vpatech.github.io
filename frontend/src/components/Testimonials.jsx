import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#13295f] to-[#13295f]/90 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#94c8ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#94c8ff] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#94c8ff]/20 text-[#94c8ff] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white font-semibold ml-2">5.0 no Google</span>
          </div>
          <p className="text-white/80">
            Veja o que empresas de Jundiaí e região falam sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#94c8ff] mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-[#94c8ff] text-sm">{testimonial.role}</p>
                <p className="text-white/60 text-xs mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/XNzqRscvqcdeB6v77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#13295f] hover:bg-white/90 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Ver Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};
