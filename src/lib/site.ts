/**
 * Conteúdo do site "Paintings" (portfólio de arte).
 *
 * Todos os textos foram extraídos do layout do Figma. Para alterar qualquer
 * texto/imagem, basta editar este arquivo — os componentes leem daqui.
 */

export const siteConfig = {
  name: "Paintings",
  tagline: "Ipsum consequat",
  intro:
    "Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.",
  footer: "© Untitled. All rights reserved.",
  credit: "Design: ALUNOS DE WEB",
} as const;

export const navLinks = [
  { href: "/#portfolio", label: "My Portfolio" },
  { href: "/#blog", label: "The Blog" },
] as const;

export const heroButtons = [
  { label: "Get Started", href: "#portfolio", primary: true },
  { label: "Learn More", href: "#portfolio", primary: false },
] as const;

const shortText =
  "Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.";

const cardText =
  "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.";

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  { icon: "/img/icon-star.svg", title: "Ipsum consequat", description: shortText },
  { icon: "/img/icon-gear.svg", title: "Magna etiam dolor", description: shortText },
  { icon: "/img/icon-bolt.svg", title: "Tempus adipiscing", description: shortText },
];

export type PortfolioCard = {
  title: string;
  description: string;
  image: string;
};

export type PortfolioSection = {
  title: string;
  description: string;
  cards: PortfolioCard[];
};

export const portfolioSections: PortfolioSection[] = [
  {
    title: "Ipsum feugiat et dolor",
    description: cardText,
    cards: [
      {
        title: "Sed etiam lorem nulla",
        description: cardText,
        image: "/img/pic02.svg",
      },
      {
        title: "Consequat et tempus",
        description: cardText,
        image: "/img/pic03.svg",
      },
    ],
  },
  {
    title: "Blandit sed adipiscing",
    description: cardText,
    cards: [
      {
        title: "Etiam nisl consequat",
        description: cardText,
        image: "/img/pic04.svg",
      },
      {
        title: "Dolore nisl feugiat",
        description: cardText,
        image: "/img/pic05.svg",
      },
    ],
  },
];

const blogText =
  "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.";

export type BlogPost = {
  title: string;
  meta: string;
  excerpt: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Magna tempus consequat",
    meta: "Posted 45 minutes ago",
    excerpt: blogText,
    image: "/img/pic08.svg",
  },
  {
    title: "Aptent veroeros aliquam",
    meta: "Posted 45 minutes ago",
    excerpt: blogText,
    image: "/img/pic09.svg",
  },
];
