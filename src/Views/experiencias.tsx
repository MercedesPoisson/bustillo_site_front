import React from 'react';
import Weather from "../components/clima";
import { useTranslation } from 'react-i18next';

function Experiencias() {
    const [t, i18m] = useTranslation("global")

    return(
        <div className="w-full max-w-4xl mx-4 sm:mx-auto font-spectral mt-14">
            <h1 className="text-2xl font-semibold text-firstblue">{t("bariloche.titulo")}</h1>
            
            <Weather />
        </div>
    )
}

export default Experiencias;