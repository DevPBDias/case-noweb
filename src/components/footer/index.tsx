import Contact from "./Contact";
import LinkAndMidia from "./LinkAndMidia";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-[60px] py-[70px] gap-[40px]">
      <Contact />
      <LinkAndMidia />
    </footer>
  );
};

export default Footer;
