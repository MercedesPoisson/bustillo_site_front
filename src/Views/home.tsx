import React from "react";
// import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import WhatsappWidget from "../components/WhatsappWidget";

const Home = () => {
  // const [isLargeScreen, setIsLargeScreen] = useState(true);
  // useEffect(() => {
  //     const handleResize = () => {
  //         setIsLargeScreen(window.innerWidth >= 600);
  //     };

  //     handleResize();
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //         window.removeEventListener("resize", handleResize);
  //     };
  // }, []);

  return (
    <div className="flex flex-col flex-grow-1 flex-shrink-0">
      <NavBar />
      <div className="flex-grow flex">
        <div className="w-full  mx-4 sm:mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
      <WhatsappWidget />
    </div>
  );
};

export default Home;
