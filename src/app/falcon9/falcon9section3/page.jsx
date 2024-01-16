"use client";
import overview from "../../../resources/overview.png";
import stage1 from "../../../resources/firststage.png";
import stage2 from "../../../resources/secondstage.png";
import interstage from "../../../resources/interstage.png";
import payload from "../../../resources/payload.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";

export default function Falcon9Section3() {
  return (
    <div className="pt-2 pb-2 w-full flex items-center justify-center ">
      <Swiper
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-navigation-size": "20px",
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
          "margin-bottom": "20px",
        }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        className="flex flex-col items-center content-center justify-center mySwiper  
         w-full bg-gradient-to-r from-black "
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide style={{ width: "100%", height: "auto" }}>
          <Image src={overview} alt="overview" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={stage1} alt="stage1" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={interstage} alt="interstage" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={stage2} alt="stage2" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "auto" }}>
          <Image src={payload} alt="payload" layout="responsive" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
