import React from "react";
import { KarrarLogo } from "../../assets";

const KarrarLogoHeading = () => {
  return (
    <div>
      <img
        src={KarrarLogo}
        alt="Karrar Logo"
        className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
      />
    </div>
  );
};

export default KarrarLogoHeading;
