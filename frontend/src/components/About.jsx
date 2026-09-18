import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const pillars = [
  { number: '01', label: 'Site', text: 'Uma presença própria, clara e profissional.' },
  { number: '02', label: 'Google', text: 'Estrutura para sua empresa ser encontrada.' },
  { number: '03', label: 'Performance', text: 'Experiência rápida, fluida e feita para converter.' },
];

export const About = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="vpa-presence-section relative overflow-hidden bg-[#eef3f9] text-[#13295F] dark:bg-[#080e1c] dark:text-white">
      <div className="vpa-presence-orbit" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="vpa-section-index">01 / Presença digital</p>
            <h2 className="mt-7 max-w-[590px] text-[clamp(2.7rem,5.1vw,5.5rem)] font-medium leading-[.96] tracking-[-.055em]">
              Seu site não deveria existir <span className="vpa-outline-word">sozinho.</span>
            </h2>
            <p className="mt-7 max-w-[520px] vpa-reading text-base leading-7 sm:text-lg sm:leading-8">
              Construímos a presença digital como um sistema: cada ponto de contato trabalha junto para sua empresa ser encontrada, transmitir confiança e facilitar o próximo passo do cliente.
            </p>
            <button onClick={() => scrollTo('services')} className="vpa-inline-arrow group mt-8">
              Entender nossos serviços <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="vpa-pillar-stack border-t border-[#13295F]/15 dark:border-white/15">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="vpa-pillar-row group">
                <span className="vpa-pillar-number">{pillar.number}</span>
                <div>
                  <h3 className="text-[clamp(2.2rem,4vw,4.5rem)] font-medium leading-none tracking-[-.05em]">{pillar.label}</h3>
                  <p className="mt-3 max-w-[470px] vpa-reading-muted text-sm leading-6 sm:text-base">{pillar.text}</p>
                </div>
                <span className="vpa-pillar-mark" aria-hidden="true">↗</span>
              </article>
            ))}
            <div className="vpa-presence-result">
              <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#13295F]/55 dark:text-white/55">O resultado</span>
              <p className="mt-4 max-w-[650px] text-[clamp(1.65rem,3vw,3.2rem)] font-medium leading-[1.08] tracking-[-.04em]">
                Uma experiência coerente do primeiro clique ao primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
