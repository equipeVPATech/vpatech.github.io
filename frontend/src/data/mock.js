// Mock data para VPA Tech Website

export const companyInfo = {
  name: "VPA Tech",
  tagline: "Tecnologia aplicada aos negócios",
  description: "Tecnologia aplicada aos negócios com pacotes práticos de presença digital e suporte técnico para empresas. Atendimento em Jundiaí e projetos para todo o Brasil.",
  phone: "(11) 95268-4250",
  email: "contato@vpatech.com.br",
  website: "vpatech.com.br",
  address: {
    street: "Av. 9 de Julho, 3575 - Sala 1407, 14º andar",
    neighborhood: "Anhangabaú",
    city: "Jundiaí",
    state: "SP",
    zip: "13207-480",
    mapsUrl: "https://maps.app.goo.gl/XNzqRscvqcdeB6v77"
  },
  businessHours: "Segunda a Sexta: 9h às 17h",
  rating: 5.0,
  reviewCount: 10,
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8!2d-46.8847!3d-23.1867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26d8c9f0b3b9%3A0x1!2sAv.%209%20de%20Julho%2C%203575%20-%20Anhangaba%C3%BA%2C%20Jundia%C3%AD%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
};

export const services = [
  {
    id: 1,
    title: "Site Essencial",
    description: "Site profissional, rápido e responsivo para sua empresa se posicionar no digital com clareza e confiança.",
    icon: "Globe",
    featured: true
  },
  {
    id: 2,
    title: "Imagem Digital",
    description: "Organização da presença online para fortalecer a imagem da sua empresa e facilitar novos contatos.",
    icon: "Lightbulb"
  },
  {
    id: 3,
    title: "Presença Digital Completa",
    description: "Site + imagem digital: a base ideal para começar do jeito certo e crescer no digital.",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Manutenção de Sistemas",
    description: "Correções, melhorias e evolução de sistemas e aplicações já existentes, com suporte técnico sob demanda.",
    icon: "Code"
  },
  {
    id: 5,
    title: "Integrações e Automações",
    description: "Conecte ferramentas e automatize rotinas para ganhar eficiência e reduzir trabalho manual.",
    icon: "Link"
  },
  {
    id: 6,
    title: "Suporte Técnico",
    description: "Apoio contínuo para manter suas soluções sempre funcionando e atualizadas.",
    icon: "Headphones"
  }
];

export const websitePlans = [
  {
    id: 1,
    name: "Site Essencial",
    price: "649,99",
    minPrice: "599,99",
    frequency: "pagamento único",
    featured: true,
    description: "Ideal para empresas que precisam de um site profissional, rápido e bem apresentado.",
    features: [
      "Site profissional de 1 página",
      "Apresentação do negócio e serviços",
      "Localização com Google Maps",
      "Botão direto para WhatsApp",
      "Design moderno e responsivo",
      "Formulário de contato",
      "SEO básico para o Google",
      "Até 2 pequenos ajustes (7 dias)"
    ],
    payment: "50% na contratação + 50% na entrega",
    deliveryTime: "3 dias úteis",
    cta: "Solicitar Orçamento"
  },
  {
    id: 2,
    name: "Imagem Digital",
    price: "899,99",
    minPrice: "799,99",
    frequency: "pagamento único",
    featured: false,
    description: "Para empresas que querem organizar e fortalecer sua presença online.",
    features: [
      "Atualização e organização do perfil digital",
      "Configuração de contatos e links",
      "Orientação para presença no Google",
      "Alinhamento visual e institucional",
      "Entrega rápida",
      "Até 2 ajustes pós-entrega (7 dias)"
    ],
    payment: "50% na contratação + 50% na entrega",
    deliveryTime: "3 dias úteis",
    cta: "Solicitar Orçamento"
  },
  {
    id: 3,
    name: "Presença Digital Completa",
    price: "1.499,99",
    minPrice: "1.149,99",
    frequency: "pagamento único",
    featured: false,
    description: "Site + imagem digital: a base ideal para começar do jeito certo e crescer no digital.",
    features: [
      "Tudo do Site Essencial",
      "Tudo da Imagem Digital",
      "Integração com WhatsApp e canais de contato",
      "Base pronta para futuras evoluções",
      "Prioridade de atendimento",
      "Até 3 ajustes pós-entrega (10 dias)"
    ],
    payment: "50% na contratação + 50% na entrega",
    deliveryTime: "5 dias úteis",
    cta: "Solicitar Orçamento"
  },
  {
    id: 4,
    name: "Manutenção do Site",
    price: "59,99",
    frequency: "mensal",
    featured: false,
    description: "Mantenha seu site sempre atualizado, profissional e com suporte contínuo.",
    features: [
      "Hospedagem inclusa",
      "Suporte básico",
      "Pequenos ajustes mensais",
      "Atualização de contatos e informações",
      "Até 2 pequenos ajustes/mês"
    ],
    payment: "PIX ou TED mensal",
    deliveryTime: "Imediato para clientes ativos",
    note: "⚠️ Disponível somente para clientes com site ativo",
    cta: "Assinar Plano"
  }
];


export const exclusions = [
  "Loja virtual",
  "Sistema complexo",
  "SEO avançado",
  "Gestão de redes sociais",
  "Fotos profissionais",
  "Área administrativa"
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Proprietária - Boutique Elegance",
    rating: 5,
    text: "A VPA Tech criou nosso site e superou expectativas. Agora recebemos muito mais contatos pelo WhatsApp!",
    location: "Jundiaí, SP"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Gerente - Auto Peças JD",
    rating: 5,
    text: "Profissionais competentes e atenciosos. O sistema que desenvolveram facilitou muito nosso controle de estoque.",
    location: "Várzea Paulista, SP"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Diretora - Clínica Vida",
    rating: 5,
    text: "Excelente atendimento e entrega no prazo. Recomendo a VPA Tech para qualquer empresa que precise de soluções digitais.",
    location: "Jundiaí, SP"
  }
];

export const stats = [
  {
    id: 1,
    value: "50+",
    label: "Projetos Entregues"
  },
  {
    id: 2,
    value: "5.0",
    label: "Avaliação Google"
  },
  {
    id: 3,
    value: "100%",
    label: "Clientes Satisfeitos"
  },
  {
    id: 4,
    value: "3 dias",
    label: "Entrega Média"
  }
];

export const images = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MDQyOTIyMXww&ixlib=rb-4.1.0&q=85",
  heroAlt: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MDQyOTIyMXww&ixlib=rb-4.1.0&q=85",
  about: "/vpatech-office.png",
  services: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzA0MjkyMjl8MA&ixlib=rb-4.1.0&q=85",
  servicesAlt: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  contact: "https://images.pexels.com/photos/6814524/pexels-photo-6814524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};
