import "./SlideShow.css";
import pic1 from "./Slide/1.jpg";
import pic2 from "./Slide/2.jpg";
import pic3 from "./Slide/3.jpg";
import pic4 from "./Slide/4.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [pic1, pic2, pic3, pic4];
  const navigate = useNavigate();
  const handleMenuNowClick = () => {
    // Perform any additional logic or actions here if needed
    navigate("/Menu"); // Replace '/Menu' with the path to your desired page
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
          <div className="slide-content">
            <h2>Sale 50% off..  </h2>
            <button
              className="slide-button"
              onClick={handleMenuNowClick}
            >
             Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

