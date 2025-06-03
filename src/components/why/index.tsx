import HowItWorksContent from "./HowItWorksContent";
import MarketingContent from "./MarketingContent";

const WhyChooseSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <MarketingContent />
      <HowItWorksContent />
    </section>
  );
};

export default WhyChooseSection;
