import Image from "next/image";
import call from "@/assets/icons/call-calling.png";
import clock from "@/assets/icons/clock.svg";

const MarketingContent = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[344px] px-[60px] pt-[70px] pb-[72px] bg-[var(--bg-soft-color)]">
      <div className="relative w-full h-full">
        <h1 className="absolute top-0 left-0 uppercase font-medium text-[56px]/[130.8%] tracking-[-6%] text-[var(--text-color)]">
          Consultoria completa para <br /> tirar seu visto
        </h1>
        <h1 className="absolute bottom-0 right-0 uppercase italic font-medium text-[56px]/[130.8%] tracking-[-6%] text-[var(--text-color)]">
          você esta em boas mãos!
        </h1>
        <picture className="w-12 h-12 absolute -top-2 right-1/4 rotate-[-12.39deg] bg-white rounded-[10px] flex items-center justify-center drop-shadow-[0_4px_40px_rgba(0,0,0,0.1)]">
          <Image
            src={call}
            alt="Calling icon"
            className="w-6 h-6 object-cover"
          />
        </picture>
        <picture className="w-12 h-12 absolute -bottom-8 left-1/4 rotate-[9.85deg] bg-white rounded-[10px] flex items-center justify-center drop-shadow-[0_4px_40px_rgba(0,0,0,0.1)]">
          <Image
            src={clock}
            alt="Clock icon"
            className="w-6 h-6 object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default MarketingContent;
