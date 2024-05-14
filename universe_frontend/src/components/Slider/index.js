import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slide() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <FaChevronCircleLeft className="text-white text-2xl cursor-pointer" />
            </div>
            <img
              className="mx-auto rounded img-fluid slide-image object-cover w-500 h-300"
              src="./images/Slider1.jpg"
              alt="First slide"
            />
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <FaChevronCircleRight className="text-white text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <img
            className="d-block mx-auto rounded img-fluid slide-image object-cover w-500 h-300"
            src="./images/Slider2.jpg"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className="d-block mx-auto rounded img-fluid slide-image object-cover w-500 h-300"
            src="./images/Slider3.jpg"
            alt="Third slide"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;