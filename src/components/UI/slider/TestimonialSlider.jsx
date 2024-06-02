import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "I recently tried this pizza and burger delivery service and was thoroughly impressed. The food arrived hot and on time, and the quality was excellent. The pizzas had a perfect balance of toppings and cheese, while the burgers were juicy and flavorful. Ordering was easy and the delivery was prompt. Highly recommend for a delicious and convenient meal!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <h6>Aikumis apai</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "This delivery site is my new go-to for pizzas and burgers. The ordering process was seamless, and the delivery was quick. The pizzas were fresh with generous toppings, and the burgers were cooked to perfection. The variety on the menu is great, catering to both classic and adventurous tastes. Excellent service and delicious food—definitely worth trying!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <h6>Temirlan agai</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          "I've ordered from this pizza and burger delivery site multiple times and have never been disappointed. The food is always delivered on time and arrives hot. The pizzas are consistently delicious with a perfect crust, and the burgers are always juicy and well-seasoned. The website is user-friendly, making ordering a breeze. Highly recommend this service for anyone craving quality food delivered to their door!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <h6>Serik agai</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
