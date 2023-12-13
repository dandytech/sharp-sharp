// src/SwiperComponent.jsx

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const SwiperComponent = () => {
  const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <img src="https://placekitten.com/600/300" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://placekitten.com/601/300" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://placekitten.com/602/300" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
