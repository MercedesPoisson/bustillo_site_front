import React from "react";
import foto6 from "../util/bus6.jpg";
import foto7 from "../util/bus7.jpg";
import foto8 from "../util/bus8.jpg";
import foto9 from "../util/bus9.jpg";

const GrillaInicio = () => {
  return (
    <div className="w-full max-w-4xl mx-4 sm:mx-auto font-sans grid grid-cols-4 gap-4 mt-14">
      <div className="aspect-w-1 aspect-h-1 bg-gray-300">
        <img
          src={foto6}
          alt="Bustillo 7500 foto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1 bg-gray-300">
        <img
          src={foto7}
          alt="Bustillo 7500 foto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1 bg-gray-300">
        <img
          src={foto8}
          alt="Bustillo 7500 foto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1 bg-gray-300">
        <img
          src={foto9}
          alt="Bustillo 7500 foto"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default GrillaInicio;