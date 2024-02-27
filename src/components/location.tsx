import React from "react";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation("global");
  return (
    <div className="w-full max-w-4xl mx-4 sm:mx-auto font-spectral mt-6">
      <h1 className="text-l font-normal text-notblack ">
        {t("location.titulo")}
      </h1>
    </div>
  );
};

export default Location;
