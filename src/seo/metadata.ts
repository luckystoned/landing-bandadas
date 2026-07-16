const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? "https://bandadas.com";

export const metadata = {
  title: "Premios de arte para desarrollos inmobiliarios | Bandadas",
  description:
    "Bandadas diseña y gestiona premios de arte a medida para valorizar desarrollos inmobiliarios, diferenciar marcas y conectar proyectos con la cultura.",
  canonical: "/",
  ogImage: "/assets/og/bandadas-real-estate-og.svg",
  ogImageAlt:
    "Bandadas: premios de arte para desarrollos inmobiliarios.",
  siteName: "Bandadas",
  locale: "es_AR",
  author: "Bandadas",
  themeColor: "#F2F2F0",
  keywords: [
    "Bandadas",
    "premios de arte para desarrollos inmobiliarios",
    "gestión de premios de arte",
    "arte para desarrollos inmobiliarios",
    "intervenciones artísticas en arquitectura",
    "valorización inmobiliaria",
    "posicionamiento cultural",
    "convocatorias de arte"
  ]
};

export const navItems = [
  { label: "Solución", href: "#solucion" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Caso GES", href: "#caso-ges" },
  { label: "Nosotros", href: "#nosotros" }
];

export const absoluteUrl = (path = "/") => {
  const base = siteUrl.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
};
