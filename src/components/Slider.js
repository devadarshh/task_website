import "./App.css";
import React, { useState } from "react";

import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";

const Slider = () => {
  const images = [Image1, Image2, Image3];
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <img src={images[currentImage]} alt={`Slide ${currentImage}`} />
      <button className="arrow next" onClick={goToNextSlide}>
        &#10095;
      </button>
      <div class="centered-text">
        <h1>Let's Build Something Great</h1>
      </div>
    </div>
  );
};

export default Slider;
