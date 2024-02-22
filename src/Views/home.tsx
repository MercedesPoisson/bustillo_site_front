import React from "react";
// import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

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
        <div className="w-full max-w-3xl mx-4 sm:mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
