import React from "react";
import SocialMedia from "./SocialMedia";
import Links from "./Links";

const LinkAndMidia = () => {
  return (
    <section className="w-full flex flex-row items-center justify-between">
      <SocialMedia />
      <Links />
    </section>
  );
};

export default LinkAndMidia;
