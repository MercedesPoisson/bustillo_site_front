import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation }  from "react-i18next"

const NavBar = () => {
    const[t, i18n] = useTranslation("global");
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

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

    return(
        <div>
            <div className="flex gap-2 mr-2 ml-auto">
                <nav className="hidden sm:flex space-x-6 mr-6">
                    <ul className="flex space-x-6">
                        <li 
                        className="cursor-pointer font-medium"
                        onClick={handleNavigateToInicio}>
                        {t("NavBar.Home")}
                        </li>
                        <li 
                        className="cursor-pointer font-medium"
                        onClick={handleNavigateToDepartamentos}>
                        {t("NavBar.Apartments")}
                        </li>
                        <li 
                        className="cursor-pointer font-medium"
                        onClick={handleNavigateToReservas}>
                        {t("NavBar.Booking")}
                        </li>
                        <li 
                        className="cursor-pointer font-medium"
                        onClick={handleNavigateToExperiencias}>
                        {t("NavBar.Experiences")}
                        </li>
                        <li 
                        className="cursor-pointer font-medium"
                        onClick={handleNavigateToGaleria}>
                        {t("NavBar.Gallery")}
                        </li>
                        <li 
                        className="cursor-pointer font-medium"
                        onClick={handleNavigateToContacto}>
                        {t("NavBar.Contact")}
                        </li>
                    </ul>
                </nav>

                <div>
                    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                </div>
                <div>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                </div>

            </div>

        </div>
    )
}

export default NavBar;