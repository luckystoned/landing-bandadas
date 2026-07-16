export type TrackingEvent =
  | "schedule_meeting"
  | "contact_email"
  | "view_ges_case"
  | "view_market_reference";

export interface LinkConfig {
  href: string;
  event: TrackingEvent;
  label: string;
}

const scheduleUrl = import.meta.env.PUBLIC_SCHEDULE_URL ?? "https://calendar.app.google/np6881cVGfkMxxoe7";

export const site = {
  name: "Bandadas",
  descriptor: "Arte para desarrollos inmobiliarios",
  url: "https://bandadas.com",
  location: "Buenos Aires, Argentina",
  communitySize: "+30K",
  emails: [
    "florenciafabeni@bandadas.com.ar",
    "ignaciounrrein@bandadas.com.ar",
    "lucasolini@bandadas.com.ar"
  ]
};

export const links = {
  schedule: { href: scheduleUrl, event: "schedule_meeting", label: "Agendar una reunión" } satisfies LinkConfig,
  gesCase: {
    href: "https://premio-ges.bandadas.com/",
    event: "view_ges_case",
    label: "Conocer el Premio GES"
  } satisfies LinkConfig,
  instagram: "https://www.instagram.com/_bandadas",
  linkedin: "https://www.linkedin.com/company/bandadas/posts/?feedView=all",
  terms: "https://www.bandadas.com/terms-and-conditions",
  privacy: "https://www.bandadas.com/privacy-policies"
};

export const hero = {
  eyebrow: "Desarrollos inmobiliarios × Bandadas",
  title: "Premios de arte que valorizan tu activo y posicionan tu marca.",
  text: "Diseñamos y gestionamos convocatorias de arte a medida para integrar una obra al desarrollo, activar una comunidad cultural y construir una identidad difícil de replicar."
};

export const problems = [
  {
    number: "01",
    title: "Comunicaciones similares",
    text: "Las estrategias del sector tienden a parecerse. La identidad de cada marca se diluye en un mercado con mensajes homogéneos."
  },
  {
    number: "02",
    title: "Valor agregado difícil de sostener",
    text: "Diferenciar el producto exige crear valor real, visible y relevante para quienes eligen invertir, habitar o trabajar allí."
  },
  {
    number: "03",
    title: "Acceso complejo al arte",
    text: "Artistas, curadores, jurados y procesos de legitimación forman un sistema potente, pero difícil de abordar sin experiencia especializada."
  }
];

export const value = {
  title: "Convertimos la vinculación con el arte en un activo de valor.",
  pillars: [
    {
      title: "Valor para el producto",
      text: "Una intervención artística específica se integra a la arquitectura y suma valor tangible, simbólico y perdurable al metro cuadrado."
    },
    {
      title: "Valor para la marca",
      text: "Todo el proceso —convocatoria, difusión, selección y producción— se transforma en contenido estratégico y posicionamiento."
    }
  ]
};

export const outcomes = [
  "Una intervención específica integrada a la arquitectura.",
  "Una campaña de posicionamiento con contenido propio.",
  "Diferenciación competitiva y mayor reconocimiento.",
  "Alianzas entre el desarrollo, la ciudad y el sistema cultural.",
  "Una obra que consolida al proyecto como referente urbano.",
  "La base para construir una colección de arte corporativa."
];

export const capabilities = [
  {
    label: "Comunidad",
    metric: "+30K",
    title: "artistas conectados",
    text: "Bandadas nuclea convocatorias de artes visuales y conecta oportunidades con una comunidad activa a nivel internacional."
  },
  {
    label: "Capital cultural",
    metric: "Arte + ciudad",
    title: "criterio especializado",
    text: "Gestores culturales con experiencia articulan artistas, jurados, curadores y actores institucionales con objetivos de negocio."
  },
  {
    label: "Tecnología",
    metric: "End to end",
    title: "gestión en una plataforma",
    text: "Inscripción, difusión, evaluación, selección y dashboards de rendimiento se administran desde un mismo sistema."
  }
];

export const roadmap = [
  { step: "01", title: "Diseño", text: "Objetivos, alcance, bases, presupuesto y cronograma de la convocatoria." },
  { step: "02", title: "Lanzamiento", text: "Identidad, campaña de comunicación y difusión en la comunidad." },
  { step: "03", title: "Postulaciones", text: "Formulario, soporte y gestión centralizada de participantes." },
  { step: "04", title: "Evaluación", text: "Jurado, criterios, evaluación técnica y selección de ganadores." },
  { step: "05", title: "Producción", text: "Acompañamiento de la obra y seguimiento de su implementación." },
  { step: "06", title: "Activación", text: "Evento de lanzamiento, contenido y proyección del impacto." }
];

export const gesCase = {
  status: "Caso Bandadas · En curso",
  title: "Premio GES a las Artes 2026",
  text: "Una convocatoria nacional para seleccionar una obra inédita y permanente concebida para el hall central de Palacio Molina. Bandadas gestiona la inscripción, los materiales de soporte, la difusión y el proceso de postulación.",
  facts: ["Convocatoria nacional", "Sitio específico", "Gestión tecnológica", "Producción y comunicación"]
};

export const references = [
  { name: "Premio CHOMER", artist: "Obra de Elba Bairon", note: "Referencia de la escena local" },
  { name: "Premio Fundación Santander", artist: "Obra de Valeria Conte Mac Donell", note: "Referencia de la escena local" },
  { name: "Premio Azcuy", artist: "Obra de Diego Bianchi", note: "Referencia de la escena local" }
];

export const endorsements = [
  "Growth Rockstar · Programa para líderes de growth · 2025",
  "Emprelatam · Programa de aceleración · 2024",
  "Founders Live · Mejor startup Argentina y Latam · 2023",
  "Mecenazgo Cultural · Ministerio de Cultura · 2021 y 2022",
  "Fondo Metropolitano de las Artes · Ministerio de Cultura GCBA · 2022"
];

export const faqs = [
  {
    question: "¿Qué incluye la gestión de un premio de arte?",
    answer: "Diseñamos la convocatoria, preparamos sus bases y estrategia de comunicación, gestionamos postulaciones y soporte, articulamos jurado y evaluación, y acompañamos la producción y el lanzamiento de la obra."
  },
  {
    question: "¿El premio se adapta a cada desarrollo?",
    answer: "Sí. El alcance se define según la arquitectura, la etapa del proyecto, los objetivos de marca, el presupuesto y el tipo de intervención buscada."
  },
  {
    question: "¿Cómo participa la comunidad de Bandadas?",
    answer: "La convocatoria se difunde entre una comunidad de más de 30.000 artistas. La plataforma centraliza la inscripción, los materiales y la comunicación con participantes."
  },
  {
    question: "¿Cómo se mide el impacto?",
    answer: "El proceso genera métricas de alcance, postulaciones y participación. Los dashboards permiten seguir el rendimiento de la convocatoria y proyectar su impacto."
  }
];
