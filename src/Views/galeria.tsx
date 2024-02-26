import React from 'react';
import { useTranslation } from "react-i18next";
// import { exteriorImages } from '../components/data';
// import ImgGallery from '../components/imgGallery';

function Galeria() {
    const { t } = useTranslation("global");

    return(
        <div  className="w-full max-w-4xl mx-4 sm:mx-auto font-spectral mt-14">
            <h1 className="text-2xl font-semibold text-notblack">{t("galeria.titulo")}</h1>
            <h1 className="text-2xl font-semibold text-firstblue">{t("galeria.exterior")}</h1>
            {/* <ImgGallery images={exteriorImages} title={t("galeria.titulo")}/> */}
        </div>
    )
}

export default Galeria;