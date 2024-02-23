import React from "react";
import { useTranslation } from "react-i18next";

const Description = () => {
    const [t, i18n] = useTranslation("global")
    return(
        <div className="w-full max-w-4xl mx-4 sm:mx-auto font-sans mt-14">
       <div>
                <span className="text-xl font-semibold text-notblack">{t("description.welcomeTo")}</span>
                <span className="text-2xl font-semibold text-firstblue"> {t("description.name")}</span>
                <span className="text-xl font-semibold text-notblack"> {t("description.location")}</span>
                <p className="text-sm font-normal mt-4 text-notblack">{t("description.immerse")}</p>
                <p className="text-sm font-normal text-notblack mt-2">{t("description.apartments")}</p>
                <p className="text-sm font-normal text-notblack mt-2">{t("description.enjoy")}</p>
                <p className="text-sm font-normal text-notblack mt-2">{t("description.strategicallyLocated")}</p>
                <p className="text-sm font-medium mt-2 text-notblack">{t("description.parking")}</p>
            </div>
    </div>
    )
}

export default Description;