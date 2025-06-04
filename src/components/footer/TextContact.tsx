import React from "react";
import { ButtonWithIcon } from "../ui/Buttons";

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
      <ButtonWithIcon
        text="Central de Atendimento"
        className="bg-[var(--cta-secondary-color)] hover:bg-[var(--hover-secondary-color)] mt-[40px]"
      />
    </section>
  );
};

export default TextContact;
