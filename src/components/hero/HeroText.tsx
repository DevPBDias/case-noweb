import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import video from "@/assets/images/video_hero.png";

const HeroText = () => {
  return (
    <section className="relative flex flex-col items-start justify-center w-full gap-[60px] mt-10">
      <h1 className="pb-8 border-b-[1.5px] border-[#E5E5E5] font-medium text-[54px]/[130.8%] tracking-[-7%] w-[90%]">
        Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
      </h1>
      <div className="flex flex-col items-start justify-center gap-10 w-full">
        <p className="text-[var(--text-secondary-color)] font-normal text-[16px]/[130.8%] tracking-[-2%] w-[54%]">
          Com uma equipe altamente treinada, nós temos todos os procedimentos
          para que seu processo seja o mais tranquilo e rápido. Uma consultoria
          completa para você e sua família não ter nenhuma preocupação na sua
          viagem.
        </p>
        <Link
          href="#about"
          className="flex flex-row items-center justify-center gap-[10px] bg-[var(--cta-secondary-color)] text-white text-base font-semibold px-5 py-[10px] rounded-[40px] hover:bg-[var(--cta-bg-color)] transition-all duration-300"
        >
          Saiba mais <ArrowRight size={24} color="white" />
        </Link>
      </div>
      <div className="absolute -bottom-[35px] right-[90px] flex flex-col items-center justify-center gap-4 w-[191px]">
        <picture className="w-full h-[110px] rounded-2xl">
          <Image
            src={video}
            alt="Hero image TirarVisto"
            className="w-full h-full object-cover rounded-2xl"
          />
        </picture>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-base/[130.8%] font-semibold text-[var(--text-color)]">
              Conheça a Bruna
            </h4>
            <p className="text-xs/[130.8%] font-normal text-[var(--text-secondary-color)]">
              Ver vídeo
            </p>
          </div>
          <button className="cursor-pointer w-9 h-9 bg-[var(--cta-secondary-color)] rounded-full flex items-center justify-center hover:bg-[var(--cta-secondary-color)] transition-all duration-300">
            <ArrowRight size={24} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
