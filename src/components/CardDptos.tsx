import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
import d3f2 from "../util/departamentos/dpto3-2.jpg"
import d3f3 from "../util/departamentos/dpto3-3.jpg";
import d3f4 from "../util/departamentos/dpto3-4.jpg";
import d3f5 from "../util/departamentos/dpto3-5.jpg";
import d3f6 from "../util/departamentos/dpto3-6.jpg";


const CardDptos = () => {
    const [t, i18n] = useTranslation("global")
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgDptos = [
        [d1f1, d1f2, d1f3, d1f4, d1f5, d1f6], 
        [d2f1, d2f2, d2f3, d2f4, d2f5, d2f6],
        [d3f1, d3f2, d3f3, d3f4, d3f5, d3f6],
    ]

    const departamentos = [
        "departamento1",
        "departamento2",
        "departamento3",
    ];

    return(
        <div className="w-full sm:mx-auto font-sans mt-14">
            {departamentos.map((departamento, index) => (
                <div key={index} style={{ width: '30%' }}>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        selectedItem={currentIndex}
                        onChange={(newIndex) => setCurrentIndex(newIndex)}
                    >
                        {imgDptos[index].map((imagen, imgIndex) => (
                            <div key={imgIndex} style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img className="object-cover h-full w-full" src={imagen} alt={`Departamento ${index + 1} - Imagen ${imgIndex + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div>
                        <p>{t(`departamentos.${departamento}.titulo`)}</p>
                        <p>{t(`departamentos.${departamento}.habitaciones`)}</p>
                        <p>{t(`departamentos.${departamento}.capacidad`)}</p>
                        <p>{t(`departamentos.${departamento}.detalle`)}</p>
                        <p>{t(`departamentos.${departamento}.estadia`)}</p>
                        <p>{t(`departamentos.${departamento}.acceso`)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardDptos;