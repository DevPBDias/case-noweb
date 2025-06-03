import TopDestinations from "@/components/destinations";
import HeroSection from "@/components/hero";
import Packages from "@/components/packages";
import WhyChooseSection from "@/components/why";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhyChooseSection />
      <TopDestinations />
      <Packages />
    </main>
  );
}
