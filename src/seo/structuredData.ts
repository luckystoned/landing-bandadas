import { faqs, links, site } from "../content/bandadas";
import { absoluteUrl, metadata } from "./metadata";

const pageUrl = absoluteUrl("/");
const organizationId = `${pageUrl}#organization`;
const websiteId = `${pageUrl}#website`;
const webpageId = `${pageUrl}#webpage`;
const serviceId = `${pageUrl}#service`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: site.name,
  url: pageUrl,
  email: site.emails[0],
  logo: absoluteUrl("/assets/images/logo-bandadas.png"),
  sameAs: [links.instagram, links.linkedin]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: metadata.siteName,
  url: pageUrl,
  inLanguage: "es-AR",
  publisher: { "@id": organizationId }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceId,
  name: "Diseño y gestión de premios de arte para desarrollos inmobiliarios",
  description: metadata.description,
  serviceType: "Diseño y gestión integral de convocatorias y premios de arte",
  provider: { "@id": organizationId },
  areaServed: { "@type": "Country", name: "Argentina" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Desarrolladoras inmobiliarias"
  },
  potentialAction: {
    "@type": "CommunicateAction",
    name: links.schedule.label,
    target: links.schedule.href
  }
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": webpageId,
  name: metadata.title,
  description: metadata.description,
  url: pageUrl,
  inLanguage: "es-AR",
  isPartOf: { "@id": websiteId },
  publisher: { "@id": organizationId },
  mainEntity: { "@id": serviceId },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: absoluteUrl(metadata.ogImage),
    caption: metadata.ogImageAlt
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
};

export const pageSchemas = [organizationSchema, webSiteSchema, webPageSchema, serviceSchema, faqSchema];
