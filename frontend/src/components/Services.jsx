import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const serviceItems = [
  {
    number: '01',
    title: 'Sites profissionais',
    description: 'Projetos sob medida para apresentar sua empresa com clareza, credibilidade e uma experiência pensada para transformar visitas em contatos.',
    detail: 'Estratégia · Design · Desenvolvimento'
  },
  {
    number: '02',
    title: 'Google & SEO',
    description: 'Estrutura técnica e conteúdo organizados para facilitar que sua empresa seja encontrada por quem já está procurando pelo que você oferece.',
    detail: 'Busca · Estrutura · Presença local'
  },
  {
    number: '03',
    title: 'Performance & experiência',
    description: 'Velocidade, responsividade e usabilidade tratadas como parte do projeto — porque uma boa presença digital precisa funcionar tão bem quanto parece.',
    detail: 'Velocidade · Mobile · Conversão'
  },
  {
    number: '04',
    title: 'Manutenção & evolução',
    description: 'Seu site continua sendo seu. Quando precisar atualizar, corrigir ou evoluir, a VPA pode acompanhar o projeto sem prender sua empresa a uma mensalidade obrigatória.',
    detail: 'Ajustes · Melhorias · Evolução'
  },
  {
    number: '05',
    title: 'Integrações & automações',
    description: 'Conectamos ferramentas e automatizamos processos quando a tecnologia pode reduzir trabalho manual e tornar a operação mais eficiente.',
    detail: 'Integrações · Fluxos · Tecnologia'
  }
];

export const Services = () => {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="vpa-services-section relative overflow-hidden bg-[#f4f7fb] text-[#13295F] dark:bg-[#07101f] dark:text-white">
      <div className="vpa-services-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="vpa-section-index">03 / Serviços</p>
            <h2 className="mt-7 max-w-[560px] text-[clamp(2.8rem,5.2vw,5.6rem)] font-medium leading-[.94] tracking-[-.065em]">
              Tecnologia com <span className="vpa-services-outline">propósito.</span>
            </h2>
            <p className="vpa-reading mt-7 max-w-[500px] text-[15px] leading-7 sm:text-base sm:leading-8">
              Do primeiro site à evolução da presença digital, cada solução entra quando faz sentido para o negócio — sem empilhar serviços que você não precisa.
            </p>
            <button onClick={scrollToContact} className="vpa-inline-arrow mt-8 group">
              Conversar sobre meu projeto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="border-t border-[#13295f]/15 dark:border-white/15">
            {serviceItems.map((service) => (
              <article key={service.number} className="vpa-service-row group">
                <span className="vpa-service-number">{service.number}</span>
                <div>
                  <h3 className="text-[clamp(1.65rem,2.8vw,3.1rem)] font-medium leading-none tracking-[-.045em]">
                    {service.title}
                  </h3>
                  <p className="vpa-reading mt-4 max-w-[670px] text-sm leading-7 sm:text-[15px]">
                    {service.description}
                  </p>
                  <p className="vpa-service-detail mt-5">{service.detail}</p>
                </div>
                <ArrowUpRight className="vpa-service-arrow h-5 w-5" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <div className="vpa-services-closing mt-16 lg:mt-24">
          <span>O ponto de partida é entender o seu negócio.</span>
          <button onClick={scrollToContact} className="group inline-flex items-center gap-2 font-semibold">
            Vamos conversar <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
