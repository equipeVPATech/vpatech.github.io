import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="vpa-hero-v2 relative overflow-hidden bg-[#f7f9fc] text-[#13295F] dark:bg-[#050a16] dark:text-white">
      <div className="vpa-aurora" aria-hidden="true" />
      <div className="vpa-noise" aria-hidden="true" />
      <div className="vpa-hero-lines" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] flex-col px-5 pb-10 pt-32 sm:px-8 sm:pt-36 lg:min-h-[820px] lg:px-12 lg:pt-40">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <h1 className="vpa-reveal-v2 mt-7 max-w-[1050px] text-[clamp(3.25rem,7.4vw,7.3rem)] font-medium leading-[.91] tracking-[-.07em]">
            Sua empresa merece
            <span className="block">mais do que <span className="vpa-accent-word">um site.</span></span>
          </h1>

          <p className="vpa-reveal-v2 vpa-delay-v2-2 mt-8 max-w-[690px] text-[15px] leading-7 text-[#13295f]/68 dark:text-white/76 sm:text-lg sm:leading-8">
            Criamos experiências digitais que ajudam sua empresa a ser encontrada, transmitir confiança e transformar visitas em novas oportunidades.
          </p>

          <div className="vpa-reveal-v2 vpa-delay-v2-3 mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <button onClick={() => scrollTo('contact')} className="vpa-primary-link group">
              Iniciar um projeto <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button onClick={() => scrollTo('projects')} className="vpa-text-link group">
              Explorar projetos <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        <div className="vpa-reveal-v2 vpa-delay-v2-4 flex w-full items-end justify-end border-t border-[#13295f]/10 pt-5 text-[11px] font-medium uppercase tracking-[.16em] text-[#13295f]/52 dark:border-white/14 dark:text-white/60 sm:text-xs">
          <button onClick={() => scrollTo('about')} className="hidden items-center gap-2 transition-colors hover:text-[#13295F] dark:hover:text-white sm:flex">
            Descubra a VPA <ArrowDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
