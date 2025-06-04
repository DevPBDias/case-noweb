import { services } from "@/constants/services";
import React from "react";
import CardPackage from "./CardPackage";

const ContainerCards = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-6">
      {services.map((service) => (
        <CardPackage key={service.id} data={service} />
      ))}
    </div>
  );
};

export default ContainerCards;
