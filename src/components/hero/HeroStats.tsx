import { stats, Stat } from "@/constants/hero-stats";

export default function HeroStats() {
  return (
    <div className="flex flex-row items-center justify-between gap-16 w-full px-[60px] [&>*:nth-child(3)]:border-none mt-auto mb-[60px]">
      {stats.map((item: Stat) => (
        <div
          key={item.label}
          className="flex flex-col items-start justify-center gap-2 w-1/3 border-r-1 border-[var(--border-color)]"
        >
          <p className="text-[44px]/[130.8%] font-medium text-[var(--text-color)] tracking-[-5%]">
            {item.value}
          </p>
          <p className="text-base/[130.8%] font-normal tracking-[-5%] text-[var(--text-secondary-color)]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
