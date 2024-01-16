"use client";
import falcon91 from "../../../resources/falcon9/falcon91.jpeg";
import falcon92 from "../../../resources/falcon9/falcon92.jpg";
import falcon93 from "../../../resources/falcon9/falcon93.jpg";
import falcon94 from "../../../resources/falcon9/falcon94.jpg";
import falcon95 from "../../../resources/falcon9/falcon95.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./css.css";
import { Navigation, A11y } from "swiper/modules";
import Image from "next/image";

export default function Falcon9Section5() {
  return (
    <div className="pt-2 pb-2 w-full flex items-center justify-center swiper ">
      <Swiper
        style={{
          "--swiper-navigation-size": "20px",
        }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, A11y]}
        className="flex flex-col items-center content-center justify-center  
         w-full bg-gradient-to-r from-black "
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        }}
      >
        <SwiperSlide style={{ width: "100%", height: "auto" }}>
          <Image
            className="flex w-screen swiper"
            src={falcon91}
            alt="falcon91"
            layout="responsive"
          />
          <div className="flex mx-auto w-full text-center items-center justify-between pr-10 pl-10">
            <div className="swiper-button-prev-unique"></div> Random text for a
            launch with a Plutonium engine!
            <div className="swiper-button-next-unique"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={falcon92} alt="falcon92" layout="responsive" />
          <div className="lala flex mx-auto w-full text-center items-center justify-between pr-10 pl-10">
            <div className="swiper-button-prev-unique"></div> Random text for a
            launch with a Plutonium engine!
            <div className="swiper-button-next-unique"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={falcon93} alt="falcon93" layout="responsive" />
          <div className="lala flex mx-auto w-full text-center items-center justify-between pr-10 pl-10">
            <div className="swiper-button-prev-unique"></div> Random text for a
            launch with a Plutonium engine!
            <div className="swiper-button-next-unique"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={falcon94} alt="falcon94" layout="responsive" />
          <div className="lala flex mx-auto w-full text-center items-center justify-between pr-10 pl-10">
            <div className="swiper-button-prev-unique"></div> Random text for a
            launch with a Plutonium engine!
            <div className="swiper-button-next-unique"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={falcon95} alt="falcon95" layout="responsive" />
          <div className="lala flex mx-auto w-full text-center items-center justify-between pr-10 pl-10">
            <div className="swiper-button-prev-unique"></div> Random text for a
            launch with a Plutonium engine!
            <div className="swiper-button-next-unique"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
