import React from "react";
import {
  IoLocationOutline,
  IoMailOpenOutline,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-softgreen h-auto font-sans font-light p-2 flex flex-col items-start mt-14">
      <div className="flex items-center mb-2">
        <IoLocationOutline className="mr-2 text-xl text-notblack" />
        <div>
          <h1 className="text-xs text-notblack">
            Avenida Ezequiel Bustillo 7500, San Carlos de Bariloche, Patagonia -
            Argentina
          </h1>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <IoMailOpenOutline className="mr-2 text-xl text-notblack" />
        <div>
          <h1 className="text-xs text-notblack">bustillo7500@gmail.com</h1>
        </div>
      </div>
      <div className="flex items-center">
        <IoLogoInstagram className="mr-2 text-xl text-notblack" />
        <div>
          <h1 className="text-xs text-notblack">@bustillo7500</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
