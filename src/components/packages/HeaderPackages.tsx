import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const HeaderPackages = () => {
  return (
    <header className="flex flex-row items-end justify-between gap-2 w-full">
      <div className="flex flex-col items-start justify-center gap-2">
        <span className="text-[var(--text-color)] font-medium text-base/[130.8%] tracking-[-8%] bg-[var(--cta-bg-color)] px-5 py-[10px] rounded-[20px]">
          Pacotes
        </span>
        <h1 className="text-[var(--text-color)] font-medium text-[56px]/[130.8%] tracking-[-7%]">
          Confira nossos pacotes
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <button className="bg-white border-[1.5px] w-[54px] h-[54px] flex items-center justify-center border-[var(--cta-secondary-color)] hover:bg-[var(--cta-secondary-color)] p-[10px] rounded-full transition-all duration-300 cursor-pointer">
          <ArrowLeft size={24} color="#1b2543" />
        </button>
        <button className="bg-[var(--cta-secondary-color)] w-[54px] h-[54px] flex items-center justify-center hover:bg-[var(--cta-secondary-color)] p-[10px] rounded-full transition-all duration-300 cursor-pointer">
          <ArrowRight size={24} color="white" />
        </button>
      </div>
    </header>
  );
};

export default HeaderPackages;
