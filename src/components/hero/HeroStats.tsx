import { stats, Stat } from "@/constants/hero-stats";

export default function HeroStats() {
  return (
    <div className="flex flex-row items-center justify-between gap-6 xl:gap-16 w-full [&>*:nth-child(3)]:border-none my-8 2xl:mb-18 xl:mt-auto">
      {stats.map((item: Stat) => (
        <div
          key={item.label}
          className="flex flex-col items-start justify-center gap-2 w-full xl:w-1/3 border-r-1 border-[var(--border-color)]"
        >
          <p className="text-[28px]/[130.8%] xl:text-[44px]/[130.8%] font-medium text-[var(--text-color)] tracking-[-5%]">
            {item.value}
          </p>
          <p className="text-xs/[130.8%] xl:text-base/[130.8%] font-normal tracking-[-5%] text-[var(--text-secondary-color)]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
