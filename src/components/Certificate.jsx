import React from "react";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper";
// import s from "./css/Carousell.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import argentinaprograma from "../assets/certificates/argentinaprogram.png";
import henry from "../assets/certificates/henry.png";
import freecodecamp from "../assets/certificates/freecodecamp.png";


function Carousell() {
  return (
    <div
      name="certificates"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <h1 className="text-4xl font-bold border-b-4 border-gray-500 w-52 pt-2 mt-20">
          Certificates
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-1/2 h-3/4 text-white"
      >
        <SwiperSlide>
          {<img src={henry} alt="certificado" />}
        </SwiperSlide>

        <SwiperSlide>
          {<img src={freecodecamp} alt="certificado" />}
        </SwiperSlide>

        <SwiperSlide>
          {<img src={argentinaprograma} alt="certificado" />}
        </SwiperSlide>
        
        .............
      </Swiper>
    </div>
  );
}

export default Carousell;
