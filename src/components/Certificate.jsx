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
// import basico from "./img/basico de javascript.png";
// import css from "./img/css gripd.png";
// import curso from "./img/curso de prewor.png";
// import definitivo from "./img/definitivo.png";
// import esructurado from "./img/estructurado.png";
// import fundamento from "./img/fundamentos de ing.png";
// import html from "./img/hatml.png";
// import maqueta from "./img/maquetacion.png";
// import masGrid from "./img/mas grid.png";
// import seguridad from "./img/mas seguridad.png";
// import poo from "./img/orientada a objeto.png";
// import masSeguridad from "./img/seguridad.png";
// import henry from './img/titulo.png'

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
          {<img src={argentinaprograma} alt="certificado" />}
        </SwiperSlide>
        <SwiperSlide>
          {<img src={henry} alt="certificado" />}
        </SwiperSlide>
        .............
      </Swiper>
    </div>
  );
}

export default Carousell;
