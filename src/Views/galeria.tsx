import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bus6 from "../util/bus6.jpg";
import bus8 from "../util/bus8.jpg";
import bus9 from "../util/bus9.jpg";
import bus11 from "../util/bus11.jpg";
import bus12 from "../util/bus12.jpg";
import bus13 from "../util/bus13.jpg";
import bus14 from "../util/bus14.jpg";
import bus15 from "../util/bus15.jpg";
import d1f1 from "../util/departamentos/dpto1-1.jpg";
import d1f2 from "../util/departamentos/dpto1-2.jpg";
import d1f3 from "../util/departamentos/dpto1-3.jpg";
import d1f4 from "../util/departamentos/dpto1-4.jpg";
import d1f5 from "../util/departamentos/dpto1-5.jpg";
import d1f6 from "../util/departamentos/dpto1-6.jpg";
import d2f1 from "../util/departamentos/dpto2-1.jpg";
import d2f2 from "../util/departamentos/dpto2-2.jpg";
import d2f3 from "../util/departamentos/dpto2-3.jpg";
import d2f4 from "../util/departamentos/dpto2-4.jpg";
import d2f5 from "../util/departamentos/dpto2-5.jpg";
import d2f6 from "../util/departamentos/dpto2-6.jpg";
import d3f1 from "../util/departamentos/dpto3-1.jpg";
import d3f2 from "../util/departamentos/dpto3-2.jpg";
import d3f3 from "../util/departamentos/dpto3-3.jpg";
import d3f4 from "../util/departamentos/dpto3-4.jpg";
import d3f5 from "../util/departamentos/dpto3-5.jpg";
import d3f6 from "../util/departamentos/dpto3-6.jpg";
import d4f1 from "../util/departamentos/dpto4-1.jpg";
import d4f2 from "../util/departamentos/dpto4-2.jpg";
import d4f3 from "../util/departamentos/dpto4-3.jpg";
import d4f4 from "../util/departamentos/dpto4-4.jpg";
import d4f5 from "../util/departamentos/dpto4-5.jpg";
import d4f6 from "../util/departamentos/dpto4-6.jpg";
import d5f1 from "../util/departamentos/Dpto5-1.jpg";
import d5f2 from "../util/departamentos/Dpto5-2.jpg";
import d5f3 from "../util/departamentos/Dpto5-3.jpg";
import d5f4 from "../util/departamentos/Dpto5-4.jpg";
import d5f5 from "../util/departamentos/Dpto5-5.jpg";
import d5f6 from "../util/departamentos/Dpto5-6.jpg";
import d7f1 from "../util/departamentos/dpto7-1.jpg";
import d7f2 from "../util/departamentos/dpto7-2.jpg";
import d7f3 from "../util/departamentos/dpto7-3.jpg";
import d7f4 from "../util/departamentos/dpto7-4.jpg";
import d7f5 from "../util/departamentos/dpto7-5.jpg";
import d7f6 from "../util/departamentos/dpto7-6.jpg";

const Galeria =() => {
  const { t } = useTranslation("global");

  const exteriorImages = [bus6, bus8, bus9, bus11, bus12];

  const departamentoImages = {
    compartido: [bus13, bus11, bus12, bus15, bus14],
    Departamento1: [d1f1, d1f2, d1f3, d1f4, d1f5, d1f6],
    Departamento2: [d2f1, d2f2, d2f3, d2f4, d2f5, d2f6],
    Departamento3: [d3f1, d3f2, d3f3, d3f4, d3f5, d3f6],
    Departamento4: [d4f1, d4f2, d4f3, d4f4, d4f5, d4f6],
    Departamento5: [d5f1, d5f2, d5f3, d5f4, d5f5, d5f6],
    Departamento7: [d7f1, d7f2, d7f3, d7f4, d7f5, d7f6],
  };

  return (
    <div className="w-full max-w-2xl mx-4 sm:mx-auto font-spectral mt-14">
      <h1 className="text-2xl font-semibold text-notblack">
        {t("galeria.titulo")}
      </h1>

      {/* Renderizo las imágenes exteriores */}
      <h1 className="text-2xl font-semibold text-firstblue">
        {t("galeria.exterior")}
      </h1>
      <Carousel className="" showThumbs={true}>
        {exteriorImages.map((image, index) => (
          <div key={index}>
            <img
            className="carousel-image object-cover"
            src={image} alt={`Exterior ${index}`} />
          </div>
        ))}
      </Carousel>

      {/* Renderizo las imágenes de los departamentos */}
      {Object.entries(departamentoImages).map(([departamento, imagenes]) => (
        <div key={departamento}>
          <h1 className="text-2xl font-semibold text-firstblue mt-4">
            {t(`galeria.${departamento}`)}
          </h1>
          <Carousel showThumbs={true}>
            {imagenes.map((imagen: any, index: number) => (
              <div key={index}>
                <img
                className="carousel-image object-cover " 
                src={imagen} alt={`${departamento} ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default Galeria;
