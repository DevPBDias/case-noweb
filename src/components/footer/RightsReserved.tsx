import React from "react";

const RightsReserved = () => {
  return (
    <div className="text-center text-sm/[130.8%] font-medium tracking-[-2%] text-[var(--text-color)] py-8 w-full border-t border-[var(--footer-border-color)]">
      © {new Date().getFullYear()} Tirar Visto - Todos os Direitos Reservados
    </div>
  );
};

export default RightsReserved;
