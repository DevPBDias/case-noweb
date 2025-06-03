import HeroSection from "@/components/hero";
import WhyChooseSection from "@/components/why";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhyChooseSection />
    </main>
  );
}
