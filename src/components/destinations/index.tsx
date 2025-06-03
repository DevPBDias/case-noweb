import React from "react";
import LinesStyles from "./LinesStyles";
import TextContent from "./TextContent";
import PhotoGallery from "./PhotoGallery";

const TopDestinations = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-[84px] pb-[87px]">
      <LinesStyles />
      <TextContent />
      <PhotoGallery />
    </section>
  );
};

export default TopDestinations;
