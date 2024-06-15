import React from "react";

export const Company = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 py-10 grid grid-cols-4 justify-center gap-5 items-center">
        <img className="h-32 transform transition-transform duration-300 hover:scale-110" src="./prologis.png" alt="Prologis" />
        <img className="h-32 transform transition-transform duration-300 hover:scale-110" src="./tower.png" alt="Tower" />
        <img className="h-32 mt-7 transform transition-transform duration-300 hover:scale-110" src="./equinix.png" alt="Equinix" />
        <img className="h-32 transform transition-transform duration-300 hover:scale-110" src="./realty.png" alt="Realty" />
      </div>
    </div>
  );
};
