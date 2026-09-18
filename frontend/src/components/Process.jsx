import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const steps = [
  ['01', 'Diagnóstico', 'Entendemos o negócio, o público e o que o projeto precisa resolver antes de pensar em telas.'],
  ['02', 'Planejamento', 'Organizamos conteúdo, estrutura e prioridades para que cada parte do site tenha uma função clara.'],
  ['03', 'Desenvolvimento', 'Design e tecnologia avançam juntos, com foco em identidade, responsividade, velocidade e experiência.'],
  ['04', 'Homologação', 'Você navega, valida e aponta ajustes. Refinamos o projeto antes de qualquer publicação.'],
  ['05', 'Publicação', 'Com tudo aprovado, colocamos o projeto no ar e conferimos os pontos essenciais de funcionamento.'],
  ['06', 'Evolução', 'Depois da entrega, o site continua sendo seu e pode evoluir conforme novas necessidades aparecem.'],
];

export const Process = () => (
  <section id="process" className="vpa-process-section relative overflow-hidden bg-white text-[#13295F] dark:bg-[#091426] dark:text-white">
    <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="vpa-section-index">04 / Processo</p>
          <h2 className="mt-7 max-w-[590px] text-[clamp(2.9rem,5.4vw,5.8rem)] font-medium leading-[.93] tracking-[-.065em]">
            Clareza do início <span className="vpa-process-outline">ao lançamento.</span>
          </h2>
          <p className="vpa-reading mt-7 max-w-[500px] text-[15px] leading-7 sm:text-base sm:leading-8">
            Um processo simples, com etapas visíveis e espaço para validar decisões antes de avançar. Sem transformar o projeto em uma caixa-preta.
          </p>
        </div>

        <div className="vpa-process-list border-t border-[#13295f]/15 dark:border-white/15">
          {steps.map(([number, title, description]) => (
            <article key={number} className="vpa-process-row group">
              <span className="vpa-process-number">{number}</span>
              <div className="min-w-0">
                <h3 className="text-[clamp(1.55rem,2.45vw,2.7rem)] font-medium leading-none tracking-[-.04em]">{title}</h3>
                <p className="vpa-reading mt-3 max-w-[650px] text-sm leading-7 sm:text-[15px]">{description}</p>
              </div>
              <ArrowDownRight className="vpa-process-arrow h-5 w-5" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <div className="vpa-process-note mt-16 lg:mt-20">
        <span className="vpa-process-note-label">Do briefing ao ar</span>
        <p>Você acompanha o que está sendo construído e sabe em qual etapa o projeto está.</p>
      </div>
    </div>
  </section>
);
