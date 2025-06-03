import Link from "next/link";
import React from "react";

const TextContact = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full max-w-[500px]">
      <h1 className="text-[var(--text-color)] font-medium text-[56px]/[130.8%] tracking-[-8%] mb-3">
        Está com alguma dúvida?
      </h1>
      <p className="text-[var(--text-secondary-color)] font-normal text-[16px]/[130.8%] tracking-[-2%] w-[90%]">
        Entre em contato através do nosso canal direto ao cliente através do
        botão abaixo
      </p>
      <Link
        href=""
        className="bg-[var(--cta-secondary-color)] font-semibold text-base/[130.8%] text-white px-5 py-[10px] rounded-[40px] cursor-pointer mt-[40px]"
      >
        Central de Atendimento
      </Link>
    </section>
  );
};

export default TextContact;
