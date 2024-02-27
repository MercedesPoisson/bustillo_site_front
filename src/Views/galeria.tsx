import React from 'react';
import { useTranslation } from "react-i18next";
// import { exteriorImages } from '../components/data';
// import ImgGallery from '../components/imgGallery';
import bus6 from "../util/bus6.jpg";
import bus8 from "../util/bus8.jpg";
import bus9 from "../util/bus9.jpg";
import bus11 from "../util/bus11.jpg";
import bus12 from "../util/bus12.jpg";
import bus13 from "../util/bus13.jpg";
import bus14 from "../util/bus14.jpg";
import bus15 from "../util/bus15.jpg";
import bus16 from "../util/bus16.jpg";
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


function Galeria() {
    const { t } = useTranslation("global");

    return(
        <div  className="w-full max-w-4xl mx-4 sm:mx-auto font-spectral mt-14">
            <h1 className="text-2xl font-semibold text-notblack">{t("galeria.titulo")}</h1>
            <h1 className="text-2xl font-semibold text-firstblue">{t("galeria.exterior")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus6} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus11} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus8} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus9} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>

            <h1 className="text-2xl font-semibold text-firstblue">{t("galeria.compartido")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus12} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus13} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus14} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus15} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={bus16} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>
            
            

            <h1 className="text-2xl font-semibold text-firstblue mt-4">{t("galeria.Departamento1")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d1f1} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d1f2} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d1f3} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d1f4} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d1f6} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d1f5} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>

            <h1 className="text-2xl font-semibold text-firstblue mt-4">{t("galeria.Departamento2")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d2f1} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d2f2} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d2f3} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d2f4} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d2f5} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d2f6} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>

            <h1 className="text-2xl font-semibold text-firstblue mt-4">{t("galeria.Departamento3")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d3f1} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d3f2} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d3f3} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d3f4} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d3f5} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d3f6} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>

            <h1 className="text-2xl font-semibold text-firstblue mt-4">{t("galeria.Departamento4")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d4f1} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d4f2} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d4f3} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d4f4} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d4f5} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d4f6} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>

            <h1 className="text-2xl font-semibold text-firstblue mt-4">{t("galeria.Departamento5")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d5f1} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d5f2} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d5f3} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d5f4} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d5f5} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d5f6} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>
            

            <h1 className="text-2xl font-semibold text-firstblue mt-4">{t("galeria.Departamento7")}</h1>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d7f1} alt="Bus 6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d7f2} alt="Bus 7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d7f3} alt="Bus 8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d7f4} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d7f5} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 aspect-w-4 aspect-h-3">
                    <img src={d7f6} alt="Bus 9" className="w-full h-full object-cover" />
                </div>
            </div>
            
            {/* <ImgGallery images={exteriorImages} title={t("galeria.titulo")}/> */}
        </div>
    )
}

export default Galeria;