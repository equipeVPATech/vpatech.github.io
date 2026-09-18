import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

const ptToEn = {
  'Serviços':'Services','Projetos':'Projects','Processo':'Process','Sobre':'About','Fale com a VPA':'Talk to VPA',
  'Sua empresa merece':'Your business deserves','mais do que um site.':'more than a website.',
  'mais do que':'more than','um site.':'a website.',
  'Criamos experiências digitais que ajudam sua empresa a ser encontrada, transmitir confiança e transformar visitas em novas oportunidades.':'We create digital experiences that help your business get found, build trust and turn visits into new opportunities.',
  'Iniciar um projeto':'Start a project','Explorar projetos':'Explore projects','Descubra a VPA':'Discover VPA',
  '01 / Presença digital':'01 / Digital presence','Seu site não deveria existir sozinho.':'Your website should not stand alone.',
  'Seu site não deveria existir':'Your website should not stand','sozinho.':'alone.',
  'Construímos a presença digital como um sistema: cada ponto de contato trabalha junto para sua empresa ser encontrada, transmitir confiança e facilitar o próximo passo do cliente.':'We build digital presence as a system: every touchpoint works together to help your business get found, build trust and make the customer’s next step easier.',
  'Entender nossos serviços':'Explore our services','Uma presença própria, clara e profissional.':'A clear, professional presence you own.',
  'Estrutura para sua empresa ser encontrada.':'Structure that helps your business get found.','Experiência rápida, fluida e feita para converter.':'A fast, seamless experience built to convert.',
  'O resultado':'The result','Uma experiência coerente do primeiro clique ao primeiro contato.':'A consistent experience from the first click to the first contact.',
  '02 / Projetos selecionados':'02 / Selected projects','Trabalho real.':'Real work.','Para negócios reais.':'For real businesses.',
  'Uma seleção de projetos que mostram como estratégia, design e tecnologia se encontram na prática.':'A selection of projects showing how strategy, design and technology come together in practice.',
  'Café móvel & eventos':'Mobile coffee & events','Reformas & acabamentos':'Renovation & finishing','Transporte executivo':'Executive transportation',
  'Uma presença digital que acompanha a marca fora do balcão.':'A digital presence that takes the brand beyond the counter.',
  'Da construção do site às melhorias de presença no Google, o projeto evolui junto com a Alvor para facilitar descoberta, confiança e contato.':'From the website build to improvements in Google presence, the project evolves with Alvor to improve discovery, trust and contact.',
  'O trabalho da RKL apresentado com mais clareza e confiança.':'RKL’s work presented with greater clarity and confidence.',
  'Serviços, informações e canais de contato foram organizados em uma experiência profissional e direta para quem está conhecendo a empresa.':'Services, information and contact channels were organized into a professional, direct experience for people discovering the company.',
  'Uma primeira impressão digital à altura do serviço executivo.':'A digital first impression worthy of an executive service.',
  'Uma experiência elegante e objetiva para transmitir profissionalismo, apresentar o serviço e encurtar o caminho entre interesse e contato.':'An elegant, focused experience that conveys professionalism, presents the service and shortens the path from interest to contact.',
  'Visitar projeto':'Visit project','Responsivo':'Responsive','Conversão':'Conversion',
  '03 / Serviços':'03 / Services','Tecnologia com propósito.':'Technology with purpose.',
  'Tecnologia com':'Technology with','propósito.':'purpose.',
  'Do primeiro site à evolução da presença digital, cada solução entra quando faz sentido para o negócio — sem empilhar serviços que você não precisa.':'From the first website to an evolving digital presence, each solution comes in when it makes sense for the business — without piling on services you do not need.',
  'Conversar sobre meu projeto':'Talk about my project','Sites profissionais':'Professional websites','Google & SEO':'Google & SEO','Performance & experiência':'Performance & experience','Manutenção & evolução':'Maintenance & evolution','Integrações & automações':'Integrations & automation',
  'Projetos sob medida para apresentar sua empresa com clareza, credibilidade e uma experiência pensada para transformar visitas em contatos.':'Tailored projects that present your business with clarity, credibility and an experience designed to turn visits into contacts.',
  'Estrutura técnica e conteúdo organizados para facilitar que sua empresa seja encontrada por quem já está procurando pelo que você oferece.':'Technical structure and organized content that help your business get found by people already looking for what you offer.',
  'Velocidade, responsividade e usabilidade tratadas como parte do projeto — porque uma boa presença digital precisa funcionar tão bem quanto parece.':'Speed, responsiveness and usability treated as part of the project — because a strong digital presence must work as well as it looks.',
  'Seu site continua sendo seu. Quando precisar atualizar, corrigir ou evoluir, a VPA pode acompanhar o projeto sem prender sua empresa a uma mensalidade obrigatória.':'Your website remains yours. When you need updates, fixes or improvements, VPA can support the project without locking your business into a mandatory monthly fee.',
  'Conectamos ferramentas e automatizamos processos quando a tecnologia pode reduzir trabalho manual e tornar a operação mais eficiente.':'We connect tools and automate processes when technology can reduce manual work and make operations more efficient.',
  'Estratégia · Design · Desenvolvimento':'Strategy · Design · Development','Busca · Estrutura · Presença local':'Search · Structure · Local presence','Velocidade · Mobile · Conversão':'Speed · Mobile · Conversion','Ajustes · Melhorias · Evolução':'Adjustments · Improvements · Evolution','Integrações · Fluxos · Tecnologia':'Integrations · Workflows · Technology',
  'O ponto de partida é entender o seu negócio.':'The starting point is understanding your business.','Vamos conversar':'Let’s talk',
  '04 / Processo':'04 / Process','Clareza do início ao lançamento.':'Clarity from start to launch.',
  'Clareza do início':'Clarity from start','ao lançamento.':'to launch.','Um processo simples, com etapas visíveis e espaço para validar decisões antes de avançar. Sem transformar o projeto em uma caixa-preta.':'A simple process with visible stages and room to validate decisions before moving forward. No black box.',
  'Diagnóstico':'Discovery','Planejamento':'Planning','Desenvolvimento':'Development','Homologação':'Review','Publicação':'Launch','Evolução':'Evolution',
  'Entendemos o negócio, o público e o que o projeto precisa resolver antes de pensar em telas.':'We understand the business, audience and what the project needs to solve before thinking about screens.',
  'Organizamos conteúdo, estrutura e prioridades para que cada parte do site tenha uma função clara.':'We organize content, structure and priorities so every part of the website has a clear purpose.',
  'Design e tecnologia avançam juntos, com foco em identidade, responsividade, velocidade e experiência.':'Design and technology move together, focused on identity, responsiveness, speed and experience.',
  'Você navega, valida e aponta ajustes. Refinamos o projeto antes de qualquer publicação.':'You browse, validate and request adjustments. We refine the project before launch.',
  'Com tudo aprovado, colocamos o projeto no ar e conferimos os pontos essenciais de funcionamento.':'Once approved, we launch the project and verify its essential functionality.',
  'Depois da entrega, o site continua sendo seu e pode evoluir conforme novas necessidades aparecem.':'After delivery, the website remains yours and can evolve as new needs arise.',
  'Do briefing ao ar':'From briefing to launch','Você acompanha o que está sendo construído e sabe em qual etapa o projeto está.':'You follow what is being built and always know which stage the project is in.',
  '05 / Diferenciais':'05 / Differentials','Tecnologia com proximidade.':'Technology with a personal approach.',
  'proximidade.':'a personal approach.','Menos camadas entre a sua ideia e o que vai para o ar. O projeto é conduzido com contexto, transparência e decisões que façam sentido para o negócio.':'Fewer layers between your idea and what goes live. The project is guided by context, transparency and decisions that make sense for the business.',
  'Contato direto':'Direct contact','Projeto sob medida':'Tailored project','Seu site continua seu':'Your website stays yours','Além da página':'Beyond the page',
  'Você conversa com quem entende e desenvolve o projeto, reduzindo ruído entre briefing, decisão e execução.':'You talk directly with the people who understand and build the project, reducing friction between briefing, decisions and execution.',
  'Estrutura, conteúdo e experiência são pensados para o seu negócio — não apenas adaptados a um modelo pronto.':'Structure, content and experience are designed for your business — not simply adapted from a ready-made template.',
  'A entrega não depende de uma mensalidade obrigatória. Manutenção e evolução podem ser contratadas quando fizerem sentido.':'Delivery does not depend on a mandatory monthly fee. Maintenance and evolution can be hired when they make sense.',
  'Site, Google, SEO, performance e experiência são tratados como partes da mesma presença digital.':'Website, Google, SEO, performance and experience are treated as parts of the same digital presence.',
  'Atendimento':'Service','Próximo quando precisa. Remoto quando faz mais sentido.':'Close when needed. Remote when it makes more sense.',
  'Próximo quando precisa.':'Close when needed.','Remoto quando faz mais sentido.':'Remote when it makes more sense.','Atendimento online em território brasileiro ou presencial mediante agendamento, com foco em Jundiaí e cidades da região.':'Online service throughout Brazil or in person by appointment, focused on Jundiaí and nearby cities.','Atendimento nacional':'Nationwide service','Projetos online em todo o Brasil':'Online projects throughout Brazil','Gire o globo':'Spin the globe','arraste para explorar':'drag to explore',
  '06 / Contato':'06 / Contact','Vamos tirar sua ideia do papel.':'Let’s bring your idea to life.',
  'Vamos tirar sua ideia':'Let’s bring your idea','do papel.':'to life.','Conte um pouco do que sua empresa precisa. A conversa começa pelo contexto — não por um pacote pronto.':'Tell us a little about what your business needs. The conversation starts with context — not a ready-made package.',
  'Seu nome *':'Your name *','Empresa':'Company','WhatsApp / telefone *':'WhatsApp / phone *','O que você precisa?':'What do you need?','Conte um pouco sobre o projeto *':'Tell us about the project *','Criar um site':'Create a website','Melhorar meu site':'Improve my website','Manutenção':'Maintenance','Outro':'Other','Enviando...':'Sending...','Enviar projeto':'Send project','Sem compromisso. Usamos essas informações apenas para entender sua necessidade e responder ao contato.':'No commitment. We use this information only to understand your needs and respond to your inquiry.',
  'Presença digital construída para transformar buscas e visitas em oportunidades de negócio.':'Digital presence built to turn searches and visits into business opportunities.','Navegação':'Navigation','Início':'Home','Contato':'Contact','© 2026 VPA Tech. Todos os direitos reservados.':'© 2026 VPA Tech. All rights reserved.','Política de Privacidade':'Privacy Policy','Voltar ao topo ↑':'Back to top ↑',
  'Como podemos te chamar?':'What should we call you?','Nome da sua empresa':'Company name','Objetivo, momento da empresa, site atual ou qualquer contexto que ajude a começar.':'Goal, current business stage, existing website or any context that helps us get started.'
};
const enToPt = Object.fromEntries(Object.entries(ptToEn).map(([a,b]) => [b,a]));

function translateText(root, map) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => { const raw=node.nodeValue; const trimmed=raw.trim(); if(map[trimmed]) node.nodeValue=raw.replace(trimmed,map[trimmed]); });
  root.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el => ['placeholder','aria-label','title'].forEach(attr => { const v=el.getAttribute(attr); if(v && map[v]) el.setAttribute(attr,map[v]); }));
}

export function LanguageProvider({children}) {
  const [lang,setLangState] = useState(() => localStorage.getItem('vpa-language') || 'pt');
  const setLang = (next) => { setLangState(next); localStorage.setItem('vpa-language',next); };
  const toggleLanguage = () => setLang(lang === 'pt' ? 'en' : 'pt');
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
    const map = lang === 'en' ? ptToEn : enToPt;
    const apply=()=>translateText(document.getElementById('root'),map);
    apply(); const observer=new MutationObserver(apply); observer.observe(document.getElementById('root'),{childList:true,subtree:true});
    return ()=>observer.disconnect();
  },[lang]);
  return <LanguageContext.Provider value={{lang,setLang,toggleLanguage}}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
