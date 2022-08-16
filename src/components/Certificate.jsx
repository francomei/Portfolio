import React from "react";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper";
// import s from "./css/Carousell.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import argentinaprogram from "../assets/certificates/argentinaprogram.png";
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
      name="certificate"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
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
        className="w-1/2 h-3/4"
      >
        <SwiperSlide>
          {<img src={argentinaprogram} alt="certificado" />}
        </SwiperSlide>
        <SwiperSlide>
          {<img src={argentinaprogram} alt="certificado" />}
        </SwiperSlide>
        <SwiperSlide>
          {<img src={argentinaprogram} alt="certificado" />}
        </SwiperSlide>
        <SwiperSlide>
          {<img src={argentinaprogram} alt="certificado" />}
        </SwiperSlide>
        <SwiperSlide>
          {<img src={argentinaprogram} alt="certificado" />}
        </SwiperSlide>
        {/* <SwiperSlide>
        {<img src={aprender} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={basico} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={css} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={curso} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={definitivo} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={esructurado} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={fundamento} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={html} alt="certificado" className={s.img} />}{" "}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={maqueta} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={masGrid} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={seguridad} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={poo} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={masSeguridad} alt="certificado" className={s.img} />}
      </SwiperSlide> */}
        .............
      </Swiper>
    </div>
  );
}

export default Carousell;