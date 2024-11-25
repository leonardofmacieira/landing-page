import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <div id='home'>
      <Slider {...settings}>
        <div>
          <img src="/motoqueiro.jpg" alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src="/motoqueiro.jpg" alt="Slide 2" className="w-full" />
        </div>
        <div>
          <img src="/motoqueiro.jpg" alt="Slide 3" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;