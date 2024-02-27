import React, { useState, useEffect } from "react";
import foto1 from "../util/bus1.jpg";
import foto2 from "../util/bus2.jpg";
import foto3 from "../util/bus3.jpg";
import foto4 from "../util/bus4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [foto1, foto2, foto3, foto4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={{ width: "100%" }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        //currentIndex={currentIndex} // Pass the currentIndex prop
        onChange={(newIndex) => setCurrentIndex(newIndex)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="object-cover h-full w-full"
              src={image}
              alt={`Bariloche ${index + 1}`}
              //style={{ borderRadius: '8px' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPic;
