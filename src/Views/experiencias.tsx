import React from 'react';
import Weather from "../components/clima";
import Location from '../components/location';
import { useTranslation } from 'react-i18next';

function Experiencias() {
    const {t} = useTranslation("global")

    return(
        <div className="w-full max-w-4xl mx-4 sm:mx-auto font-spectral mt-14">
            <h1 className="text-2xl font-semibold text-firstblue">{t("bariloche.titulo")}</h1>
            <Weather />
            <Location />

        </div>
    )
}

export default Experiencias;