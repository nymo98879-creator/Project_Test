import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slidebar() {
  return (
    <>
      <div className="mt-14">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper w-full h-[200px] lg:h-[500px] md:h-[300px] text-center bg-red-300"
        >
          <SwiperSlide>
            <img
              src="slidebar/image.png"
              alt=""
              className="w-full h-full object-fill lg:object-fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slidebar/image.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
