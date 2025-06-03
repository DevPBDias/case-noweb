import HeroImage from "./HeroImage";
import HeroNavbar from "./HeroNavbar";
import HeroStats from "./HeroStats";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <main className="flex flex-row items-center justify-center w-full h-[100dvh]">
      <section className="flex flex-col items-start justify-start w-full px-[60px] h-full">
        <HeroNavbar />
        <HeroText />
        <HeroStats />
      </section>
      <HeroImage />
    </main>
  );
};

export default HeroSection;
