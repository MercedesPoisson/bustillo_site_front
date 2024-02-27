import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// importacion de todas las imagenes
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

const CardDptos = () => {
  const {t} = useTranslation("global");
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex7, setCurrentIndex7] = useState(0);

  const imgDptos = [
    [d1f1, d1f2, d1f3, d1f4, d1f5, d1f6],
    [d2f5, d2f2, d2f3, d2f4, d2f1, d2f6],
    [d3f1, d3f2, d3f3, d3f4, d3f5, d3f6],
    [d4f6, d4f2, d4f3, d4f4, d4f5, d4f1],
    [d5f1, d5f2, d5f3, d5f4, d5f5, d5f6],
    [d7f1, d7f2, d7f3, d7f4, d7f5, d7f6],
  ];

  const departamentos = [
    "departamento1",
    "departamento2",
    "departamento3",
    "departamento4",
    "departamento5",
    "departamento7",
  ];

  return (
    <div className="w-full max-w-6xl mx-4 sm:mx-auto font-spectral mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {departamentos.map((departamento, index) => (
        <div key={index} style={{ width: "100%" }}>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={false}
            selectedItem={
              index === 0
                ? currentIndex1
                : index === 1
                ? currentIndex2
                : index === 2
                ? currentIndex3
                : index === 3
                ? currentIndex4
                : index === 4
                ? currentIndex5
                : currentIndex7
            }
            onChange={(newIndex) => {
              if (index === 0) {
                setCurrentIndex1(newIndex);
              } else if (index === 1) {
                setCurrentIndex2(newIndex);
              } else if (index === 2) {
                setCurrentIndex3(newIndex);
              } else if (index === 3) {
                setCurrentIndex4(newIndex);
              } else if (index === 4) {
                setCurrentIndex5(newIndex);
              } else if (index === 5) {
                setCurrentIndex7(newIndex);
              }
            }}
          >
            {imgDptos[index].map((imagen, imgIndex) => (
              <div
                key={imgIndex}
                style={{
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className="object-cover h-full w-full"
                  src={imagen}
                  alt={`Departamento ${index + 1} - Imagen ${imgIndex + 1}`}
                />
              </div>
            ))}
          </Carousel>
          <div>
            <span className="text-l font-semibold text-notblack">
              {t(`departamentos.${departamento}.departamento`)}{" "}
            </span>
            <span className="text-xl font-semibold text-firstblue">
              {t(`departamentos.${departamento}.titulo`)}
            </span>
            <div>
              <span className="text-sm font-normal mt-4 text-notblack">
                {t(`departamentos.${departamento}.tithabitaciones`)}
              </span>
              <span className="text-base font-semibold mt-4 text-firstblue">
                {t(`departamentos.${departamento}.habitaciones`)}
              </span>
            </div>

            <div>
              <span className="text-sm font-normal text-notblack">
                {t(`departamentos.${departamento}.titcapacidad`)}
              </span>

              <span className="text-base font-semibold mt-4 text-firstblue">
                {t(`departamentos.${departamento}.capacidad`)}
              </span>
            </div>

            <div>
              <p className="text-sm font-normal text-notblack mt-2">
                {t(`departamentos.${departamento}.titdetalle`)}
              </p>
              <p className="text-sm font-semibold text-firstblue mb-2">
                {t(`departamentos.${departamento}.detalle`)}
              </p>
            </div>

            <p className="text-sm font-normal mt-2 text-notblack">
              {t(`departamentos.${departamento}.estadia`)}
            </p>
            <p className="text-sm font-normal mt-2 text-notblack">
              {t(`departamentos.${departamento}.acceso`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDptos;
