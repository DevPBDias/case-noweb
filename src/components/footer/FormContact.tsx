import { ArrowUpRight } from "lucide-react";

const FormContact = () => {
  return (
    <form className="flex flex-row items-start justify-between w-full max-w-[500px] pb-3 border-b border-[var(--text-color)]">
      <h3 className="mt-[2.5px] text-[var(--text-color)] font-normal text-[40px]/[130.8%] tracking-[-6%]">
        Receba novidades
      </h3>
      <ArrowUpRight size={40} color="#232323" />
    </form>
  );
};

export default FormContact;
