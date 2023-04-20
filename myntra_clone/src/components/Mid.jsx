import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Mid = () => {
  return (
    <div>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="swiper/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="swiper/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="swiper/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="swiper/4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="swiper/5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="swiper/6.jpg" alt="" /></SwiperSlide>
      
      </Swiper>



    </div>
  )
}

export default Mid