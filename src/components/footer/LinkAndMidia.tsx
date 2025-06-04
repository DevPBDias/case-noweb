import React from "react";
import SocialMedia from "./SocialMedia";
import Links from "./Links";

const LinkAndMidia = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row items-center justify-between gap-12">
      <SocialMedia />
      <Links />
    </section>
  );
};

export default LinkAndMidia;
