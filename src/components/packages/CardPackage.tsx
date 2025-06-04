import { Service } from "@/constants/services";
import Image from "next/image";
import { ButtonWithIcon } from "../ui/Buttons";

interface CardPackageProps {
  data: Service;
}

const CardPackage = ({ data }: CardPackageProps) => {
  return (
    <div className="w-full rounded-3xl border border-[var(--border-color)] p-4 flex flex-col gap-8">
      <picture className="w-full h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={data.image}
          alt="Pessoas no aeroporto"
          className="w-full h-[300px] object-cover rounded-2xl"
        />
      </picture>
      <div className="flex flex-col gap-5 items-start justify-between">
        <div className="flex gap-2">
          <span className="border border-[var(--text-color)] font-semibold text-[var(--text-color)] text-base/[130.8%] px-5 py-[10px] rounded-[40px]">
            Basic
          </span>
          <span className="border border-[var(--text-secondary-color)] font-semibold text-[var(--text-secondary-color)] text-base/[130.8%] px-5 py-[10px] rounded-[40px]">
            Premium
          </span>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-4 border-b-1 border-b-[var(--border-color)] w-full">
            <h3 className="text-[28px]/[130.8%] font-semibold w-full">
              {data.title}
            </h3>
            <div className="flex justify-between pb-5">
              <div className="flex flex-col gap-2 w-2/5">
                <p className="font-medium text-[var(--text-color)] text-base/[130.8%]">
                  Atendimento
                </p>
                <p className="font-normal text-[var(--text-secondary-color)] text-base/[130.8%]">
                  {data.atendimento}
                </p>
              </div>
              <div className="flex flex-col gap-2 w-2/5">
                <p className="font-medium text-[var(--text-color)] text-base/[130.8%]">
                  Tempo
                </p>
                <p className="font-normal text-[var(--text-secondary-color)] text-base/[130.8%]">
                  {data.tempo}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-normal text-[var(--text-secondary-color)] text-base/[130.8%]">
                A partir de
              </p>
              <p className="font-semibold text-[var(--text-color)] text-[32px]/[130.8%]">
                {data.preco}
              </p>
            </div>
            <ButtonWithIcon
              text="Contratar"
              className="bg-[var(--cta-secondary-color)] hover:bg-[var(--hover-secondary-color)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPackage;
