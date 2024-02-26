import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsappWidget = () => {
  const openWhatsApp = (phoneNumber: string, message: string) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    let url;
    if (isMobile) {
      url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    } else {
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }

    window.open(url, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "1158335017"; 
    const message = "Hola, 👋\nGracias por comunicarte con nosotros.\nDéjanos tu consulta y a la brevedad te estaremos contestando 😊.";    openWhatsApp(phoneNumber, message);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-whatsapp text-white rounded-full w-12 h-12 flex justify-center items-center">
      <button onClick={handleWhatsAppClick} className="block">
        <IoLogoWhatsapp className="text-3xl" />
      </button>
    </div>
  );
};

export default WhatsappWidget;