import Image from "next/image";
import hero_img from "@/assets/images/hero_img.png";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-5 pr-5">
      <section className="relative w-full h-full rounded-3xl">
        <picture className="w-full h-full rounded-3xl">
          <Image
            src={hero_img}
            alt="Hero image TirarVisto"
            className="w-full h-full object-cover rounded-3xl"
          />
        </picture>
        <Link
          href="#contact"
          className="absolute top-4 right-4 bg-[var(--cta-bg-color)] text-[var(--cta-text-color)] font-base font-semibold px-5 py-2 rounded-[40px] hover:bg-[var(--cta-bg-color)] transition-all duration-300"
        >
          Tirar meu visto agora!
        </Link>
        <div className="absolute bottom-0 left-0 bg-gradient-to-b from-[#23232300] to-[#232323] w-full h-96 px-10 pb-[37px] flex items-end justify-center rounded-b-3xl">
          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <h1 className="lg:text-[44px]/[130.8%] font-semibold text-white tracking-[-2%]">
              Realize o seu sonho com <br /> a ajuda da Tirar Visto!
            </h1>
            <p className="lg:text-base/[130.8%] text-white tracking-[-2%] w-3/4">
              Com um serviço profissional, você não terá dor de cabeça para todo
              o processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroImage;
