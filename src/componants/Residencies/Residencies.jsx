
// import "./Residencies.css";

import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Residencies = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <span className="text-orange-500">Best Choices</span>
          <span className="text-black">Popular Residencies</span>
        </div>
        <Swiper className="">
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="gap-3 w-80 m-3 my-5 p-4 border-r-2 transition-all duration-300 ease-in-out
              transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:via-[rgba(136,160,255,0.46)] hover:to-[rgba(255,255,255,0)]
               hover:shadow-[0px_72px_49px_-51px_rgba(136,160,255,0.21)]">
                <img className="max-w-[15rem] " src={card.image} alt="img" />
                <span className="flex flex-col mt-3">
                  <span>${card.price}</span>
                  <span>{card.name}</span>
                  <span>{card.detail}</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

