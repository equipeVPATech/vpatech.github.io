import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InteractiveGlobe } from './InteractiveGlobe';

const differentials = [
  ['01', 'Contato direto', 'Você conversa com quem entende e desenvolve o projeto, reduzindo ruído entre briefing, decisão e execução.'],
  ['02', 'Projeto sob medida', 'Estrutura, conteúdo e experiência são pensados para o seu negócio — não apenas adaptados a um modelo pronto.'],
  ['03', 'Seu site continua seu', 'A entrega não depende de uma mensalidade obrigatória. Manutenção e evolução podem ser contratadas quando fizerem sentido.'],
  ['04', 'Além da página', 'Site, Google, SEO, performance e experiência são tratados como partes da mesma presença digital.'],
];

export const Differentials = () => (
  <section id="differentials" className="vpa-diff-section relative overflow-hidden bg-[#f4f7fb] text-[#13295F] dark:bg-[#071126] dark:text-white">
    <div className="vpa-diff-orbit" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="vpa-section-index">05 / Diferenciais</p>
          <h2 className="mt-7 max-w-[620px] text-[clamp(2.9rem,5.4vw,5.8rem)] font-medium leading-[.93] tracking-[-.065em]">
            Tecnologia com <span className="vpa-diff-outline">proximidade.</span>
          </h2>
          <p className="vpa-reading mt-7 max-w-[510px] text-[15px] leading-7 sm:text-base sm:leading-8">
            Menos camadas entre a sua ideia e o que vai para o ar. O projeto é conduzido com contexto, transparência e decisões que façam sentido para o negócio.
          </p>
        </div>

        <div className="border-t border-[#13295f]/15 dark:border-white/15">
          {differentials.map(([number, title, description]) => (
            <article key={number} className="vpa-diff-row group">
              <span className="vpa-diff-number">{number}</span>
              <div>
                <h3 className="text-[clamp(1.45rem,2.25vw,2.45rem)] font-medium leading-none tracking-[-.04em]">{title}</h3>
                <p className="vpa-reading mt-3 max-w-[650px] text-sm leading-7 sm:text-[15px]">{description}</p>
              </div>
              <ArrowUpRight className="vpa-diff-arrow h-5 w-5" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <div className="vpa-area-panel mt-16 lg:mt-24">
        <div className="vpa-area-copy">
          <p className="vpa-area-label">Atendimento</p>
          <h3>Próximo quando precisa. <span>Remoto quando faz mais sentido.</span></h3>
          <p className="vpa-reading">Atendimento online em território brasileiro ou presencial mediante agendamento, com foco em Jundiaí e cidades da região.</p>
        </div>
        <div className="vpa-brazil-coverage" aria-label="Atendimento online em todo o território brasileiro">
          <InteractiveGlobe />
          <div className="vpa-brazil-caption">
            <div><strong>Atendimento nacional</strong><small>Projetos online em todo o Brasil</small></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
