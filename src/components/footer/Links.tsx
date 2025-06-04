import { footerLinks } from "@/constants/footerLinks";
import Link from "next/link";

const Links = () => {
  return (
    <div className="max-w-2xl w-full flex flex-row flex-wrap items-start justify-center xl:justify-between gap-12 xl:gap-8">
      {footerLinks.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-start justify-start gap-5"
        >
          <h5 className="text-[var(--text-color)] font-medium text-base/[130.8%] tracking-[-2%] font-jakarta">
            {item.title}
          </h5>
          <ul className="flex flex-col items-start justify-start gap-3 max-w-[140px]">
            {item.links.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  href={link.href}
                  className="text-[var(--text-secondary-color)] font-normal text-base/[130.8%] tracking-[-2%] hover:underline w-full font-jakarta"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;
