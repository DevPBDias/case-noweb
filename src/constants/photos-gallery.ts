import indonesia from "@/assets/images/indonesia.png";
import usa from "@/assets/images/new-york.png";
import grecia from "@/assets/images/grecia.png";
import france from "@/assets/images/france.png";
import africa from "@/assets/images/south-africa.png";
import india from "@/assets/images/india.png";
import { StaticImageData } from "next/image";

export type Photos = {
  id: string;
  destination: string;
  image: StaticImageData;
};

export const photos: Photos[] = [
  { id: "1", destination: "Bali, Indonesia", image: indonesia },
  { id: "2", destination: "Nova York, Estados Unidos", image: usa },
  { id: "3", destination: "Santorini, Grecia", image: grecia },
  { id: "4", destination: "Paris, França", image: france },
  { id: "5", destination: "Cidade do Cabo, Africa do Sul", image: africa },
  { id: "6", destination: "Mumbai, India", image: india },
];
