import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const About = () => {
  return (
    <div>
      <div
        className="hero min-h-screen md:mb-16"
        style={{
          backgroundImage: "url(https://i.ibb.co/G3VYVst/about.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      {/* grid grid-cols-1 md:grid-cols-3 */}
      <div className="md:mb-16 md:mx-16 flex md:justify-around items-center md:gap-10">
        <div className="w-96 shadow-xl image-full">
          <img
            className="w-96"
            src="https://i.ibb.co/286sHV7/about-1.png"
            alt="Shoes"
          />
        </div>
        <div className="md:flex-1">
          <h2 className="text-5xl font-medium md:mb-5">
            A travel agency;s main fuction is to act as an agent and services on
            behavlf of a supplier.
          </h2>
          <p className="text-2xl md:mb-5">
            There are many type of people available but the mejore are sufferd
            alteration in some from, by injected hummor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 text-left">
            <div className="flex items-center md:gap-3">
              <img src="https://i.ibb.co/QXySCCZ/first.png" alt="" />
              <p>Safe Travel System</p>
            </div>
            <div className="flex items-center md:gap-3">
              <img src="https://i.ibb.co/SQdcNjn/sec.png" alt="" />
              <p>Budget Friendly Tour</p>
            </div>
            <div className="flex items-center md:gap-3">
              <img src="https://i.ibb.co/1ZSrdbj/thir.png" alt="" />
              <p>First Communication</p>
            </div>
            <div className="flex items-center md:gap-3">
              <img src="https://i.ibb.co/FK1DNbG/four.png" alt="" />
              <p>24/7 Customer Support</p>
            </div>
          </div>
          <div className="md:mt-5">
            <button className="btn bg-[#86b817] hover:bg-amber-500 text-white">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center space-y-3 md:mb-10">
          <h3 className="text-3xl font-semibold text-[#86b817]">Instagram Post</h3>
        </div>
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/XFDgZwr/image-6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/wKGdQdW/image-7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/swB7tFx/image-8-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/dPMk5yP/image-8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/xsncRFQ/image-9.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/ygmcTy7/img.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
