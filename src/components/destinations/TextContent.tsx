import React from "react";
import { ButtonWithIcon } from "../ui/Buttons";

const TextContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <span className="text-[var(--text-color)] font-medium text-base/[130.8%] tracking-[-8%] bg-[var(--cta-bg-color)] px-5 py-[10px] rounded-[20px]">
        Top Destinos
      </span>
      <h1 className="text-[var(--text-color)] font-medium text-[56px]/[130.8%] tracking-[-7%]">
        Destinos mais procurados
      </h1>
      <p className="text-[var(--text-secondary-color)] font-normal text-base/[130.8%] tracking-[-2%] text-center mt-1">
        Confira os destinos mais procurados por nossos clientes nos últimos
        meses, <br /> qual seria o seu novo destino?
      </p>
      <ButtonWithIcon
        text="Conheça mais"
        className="bg-[var(--cta-secondary-color)] hover:bg-[var(--hover-secondary-color)] mt-[40px]"
      />
    </div>
  );
};

export default TextContent;
