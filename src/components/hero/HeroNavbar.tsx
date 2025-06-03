import { navLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const HeroNavbar = () => {
  return (
    <header className="flex px-[60px] items-center justify-start h-[100px] w-full mb-10">
      <nav className="flex gap-[6px] items-center justify-between">
        <picture className="w-[152px] h-[42px]">
          <Image
            src={logo}
            alt="logo TirarVisto"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="flex flex-row items-center justify-center gap-2.5">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.name}
              href={navLink.link}
              className="text-[var(--text-color)] text-base/[130.8%] font-normal hover:font-bold transition-all duration-300 px-3 py-2.5 "
            >
              {navLink.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default HeroNavbar;
