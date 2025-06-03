import React from "react";
import HeaderPackages from "./HeaderPackages";
import ContainerCards from "./ContainerCards";

const Packages = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-[74px] pb-[75px] px-[60px] gap-[60px]">
      <HeaderPackages />
      <ContainerCards />
    </section>
  );
};

export default Packages;
