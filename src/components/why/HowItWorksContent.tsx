import Image from "next/image";
import familyTripImage from "@/assets/images/about_img.png";
import { Plus } from "lucide-react";

function HowItWorksContent() {
  return (
    <section className="flex flex-col items-start justify-center w-full px-4 2xl:px-[60px] py-[95px] gap-[60px]">
      <div className="flex flex-col items-start justify-center gap-3 w-full">
        <span className="text-[var(--text-color)] font-medium text-base/[130.8%] tracking-[-8%] bg-[var(--cta-bg-color)] px-5 py-[10px] rounded-[20px]">
          Veja como funciona
        </span>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-[74px] w-full ">
          <h1 className="text-[var(--text-color)] font-medium text-[36px]/[130.8%] 2xl:text-[56px]/[130.8%] tracking-[-7%] max-w-[500px] w-full">
            Sua tranquilidade não tem preço!
          </h1>
          <p className="text-[var(--text-secondary-color)] font-normal text-base/[130.8%] tracking-[-2%] w-full max-w-[1100px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between gap-9 w-full">
        <picture className="w-full xl:w-3/5 rounded-[26px]">
          <Image
            src={familyTripImage}
            alt="Family trip"
            className="w-full object-cover rounded-[26px]"
          />
        </picture>
        <div className="flex flex-col items-center justify-center w-full xl:w-2/5">
          <div className="flex flex-col items-start justify-between gap-3 px-3 py-5 w-full border-b border-[var(--border-color)]">
            <h3 className="text-[var(--text-color)] font-medium text-[24px]/[130.8%] 2xl:text-[44px]/[130.8%] tracking-[-8%]">
              Etapa Inicial
            </h3>
            <p className="text-[var(--text-secondary-color)] font-normal text-base/[130.8%] tracking-[-2%] w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-3 px-3 py-5 w-full border-b-[1px] border-[var(--border-color)]">
            <h3 className="text-[var(--text-color)] font-medium text-[24px]/[130.8%] 2xl:text-[44px]/[130.8%] tracking-[-8%]">
              Processo de Entrevista
            </h3>
            <button className="flex items-center gap-2 cursor-pointer hover:scale-105">
              <Plus size={24} color="#232323" />
              <p className="text-[var(--text-color)] text-base/[130.8%] tracking-[-2%] font-medium">
                Leia mais
              </p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between gap-3 px-3 py-5 w-full border-b-[1px] border-[var(--border-color)]">
            <h3 className="text-[var(--text-color)] font-medium text-[24px]/[130.8%] 2xl:text-[44px]/[130.8%] tracking-[-8%] w-full">
              Entrega de Documentos
            </h3>
            <button className="flex items-center gap-2 cursor-pointer hover:scale-105">
              <Plus size={24} color="#232323" />
              <p className="text-[var(--text-color)] text-base/[130.8%] tracking-[-2%] font-medium">
                Leia mais
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksContent;
