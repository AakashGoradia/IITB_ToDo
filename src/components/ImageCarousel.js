import { useState, useEffect } from "react";
import Image1 from "../assets/land.jpg";
import Image2 from "../assets/land1.jpg";
import Image3 from "../assets/land2.jpg";
import Image4 from "../assets/land3.jpg";
import Image5 from "../assets/land4.jpg";
import Image6 from "../assets/land5.jpg";
import Image7 from "../assets/land6.jpg";
import Image8 from "../assets/land7.jpg";
import Image9 from "../assets/land8.jpg";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-80 rounded-lg border-4 border-black">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
