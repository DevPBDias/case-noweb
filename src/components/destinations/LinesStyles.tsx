import React from "react";
import lines from "@/assets/images/template_destinations.png";
import Image from "next/image";

const LinesStyles = () => {
  return (
    <picture className="absolute top-6 left-0 w-full h-[423px] -z-10">
      <Image
        src={lines}
        alt="Lines Styles"
        className="w-full h-full object-cover"
      />
    </picture>
  );
};

export default LinesStyles;
