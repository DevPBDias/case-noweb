import Link from "next/link";
import React from "react";

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
      <Link
        href="#about"
        className="mt-10 flex flex-row items-center justify-center gap-[10px] bg-[var(--cta-secondary-color)] text-white font-semibold text-base/[130.8%] px-5 py-[10px] rounded-[40px] hover:bg-[var(--cta-bg-color)] transition-all duration-300"
      >
        Conheça mais
      </Link>
    </div>
  );
};

export default TextContent;
