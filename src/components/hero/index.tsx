import HeroImage from "./HeroImage";
import HeroNavbar from "./HeroNavbar";
import HeroStats from "./HeroStats";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="flex flex-col xl:flex-row items-center justify-center w-full xl:h-[100dvh]"
    >
      <section className="flex flex-col items-start justify-start w-full px-4 2xl:pl-[60px] xl:h-full">
        <HeroNavbar />
        <HeroText />
        <HeroStats />
      </section>
      <HeroImage />
    </main>
  );
};

export default HeroSection;
