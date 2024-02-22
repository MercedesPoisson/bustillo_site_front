import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguage] = useState("es");

  const handleNavigateToInicio = () => {
    setShowMenu(false);
    navigate("/");
  };

  const handleNavigateToDepartamentos = () => {
    setShowMenu(false);
    navigate("/departamentos");
  };

  const handleNavigateToReservas = () => {
    setShowMenu(false);
    navigate("/reservas");
  };

  const handleNavigateToContacto = () => {
    setShowMenu(false);
    navigate("/contacto");
  };

  const handleNavigateToGaleria = () => {
    setShowMenu(false);
    navigate("/galeria");
  };

  const handleNavigateToExperiencias = () => {
    setShowMenu(false);
    navigate("/experiencias");
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Cambia el idioma
    setLanguage(lang); // Actualiza el estado del idioma
  };

  return (
    <div className="sticky top-0 bg-white bg-opacity-75 z-50">
      <div className="h-16 px-4 flex items-center font-sans">
        <div className="border-4 border-notblack p-3">
          <h1 className="font-semibold text-notblack">Bustillo 7500</h1>
        </div>
        <div className="flex gap-2 mr-2 ml-auto">
          <nav className="hidden sm:flex space-x-6 mr-6">
            <ul className="flex space-x-6 list-none text-notblack">
              <li
                className="cursor-pointer font-medium hover:text-secondblue"
                onClick={handleNavigateToInicio}
              >
                {t("NavBar.Home")}
              </li>
              <li
                className="cursor-pointer font-medium hover:text-secondblue"
                onClick={handleNavigateToDepartamentos}
              >
                {t("NavBar.Apartments")}
              </li>
              <li
                className="cursor-pointer font-medium hover:text-secondblue"
                onClick={handleNavigateToReservas}
              >
                {t("NavBar.Booking")}
              </li>
              <li
                className="cursor-pointer font-medium hover:text-secondblue"
                onClick={handleNavigateToExperiencias}
              >
                {t("NavBar.Experiences")}
              </li>
              <li
                className="cursor-pointer font-medium hover:text-secondblue"
                onClick={handleNavigateToGaleria}
              >
                {t("NavBar.Gallery")}
              </li>
              <li
                className="cursor-pointer font-medium hover:text-secondblue"
                onClick={handleNavigateToContacto}
              >
                {t("NavBar.Contact")}
              </li>
            </ul>
          </nav>

          <div className="flex gap-2">
            <button
              className={`font-bold hover:text-softgreen mr-2 ${
                language === "es" ? "text-softgreen" : ""
              }`}
              onClick={() => handleLanguageChange("es")}
            >
              ES
            </button>
            <button
              className={`font-bold hover:text-softgreen mr-2 ${
                language === "en" ? "text-softgreen" : ""
              }`}
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </button>
          </div>

          <div className="md:hidden">
            {/* Botón para abrir el menú hamburguesa */}
            <button onClick={() => setShowMenu(!showMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Menú hamburguesa */}
            {showMenu && (
              <ul>
                <li onClick={handleNavigateToInicio}>{t("NavBar.Home")}</li>
                <li onClick={handleNavigateToDepartamentos}>
                  {t("NavBar.Apartments")}
                </li>
                <li onClick={handleNavigateToReservas}>
                  {t("NavBar.Booking")}
                </li>
                <li onClick={handleNavigateToExperiencias}>
                  {t("NavBar.Experiences")}
                </li>
                <li onClick={handleNavigateToGaleria}>{t("NavBar.Gallery")}</li>
                <li onClick={handleNavigateToContacto}>
                  {t("NavBar.Contact")}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
