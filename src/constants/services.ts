import { StaticImageData } from "next/image";
import serviceOne from "@/assets/images/visto-1.png";
import serviceTwo from "@/assets/images/visto-2.png";
import serviceThree from "@/assets/images/visto-3.png";

export type Service = {
  id: number;
  image: StaticImageData | string;
  title: string;
  atendimento: string;
  tempo: string;
  preco: string;
};

export const services: Service[] = [
  {
    id: 1,
    image: serviceOne,
    title: "Passaporte",
    atendimento: "On-line",
    tempo: "45 dias",
    preco: "R$ 890,00",
  },
  {
    id: 2,
    image: serviceTwo,
    title: "Passaporte + Visto",
    atendimento: "On-line + Presencial",
    tempo: "25 dias",
    preco: "R$ 1.290,00",
  },
  {
    id: 3,
    image: serviceThree,
    title: "Consultoria Completa",
    atendimento: "Presencial Completo",
    tempo: "10 dias",
    preco: "R$ 1.890,00",
  },
];
