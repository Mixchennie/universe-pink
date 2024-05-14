import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Outstanding() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section className="home d-block" id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <h3 style={{ fontSize: '60px', color: '#ff6699' }}>Outstanding products</h3>
              <p>Welcome to our premier fashion store! Explore uniqueness and luxury
                in standout products from Gucci, Adidas, and Nike. Be the first to experience new styles and
                sophistication.
              </p>
              <a href="#">
                <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg border-radius-20">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <Slider {...settings}>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <img
                    className="mx-auto rounded img-fluid slide-image object-cover w-500 h-300"
                    src="./images/Slider1.jpg"
                    alt="First slide"
                  />
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
        </div>
      </div>
    </section>
  );
}

export default Outstanding;