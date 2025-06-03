export type FooterItem = {
  title: string;
  links: { name: string; href: string }[];
};

export const footerLinks: FooterItem[] = [
  {
    title: "Empresa",
    links: [
      { name: "Home", href: "#home" },
      { name: "Quem somos", href: "#about" },
      { name: "Serviços", href: "#services" },
      { name: "Contato", href: "#contact" },
    ],
  },
  {
    title: "Novidades",
    links: [
      { name: "Passaporte", href: "/passaporte" },
      { name: "Visto", href: "/visto" },
      { name: "Entrevista", href: "/entrevista" },
      { name: "Polícia Federal", href: "/policia-federal" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Contato", href: "/contato" },
      { name: "Dúvidas Frequentes", href: "/duvidas-frequentes" },
    ],
  },
];
