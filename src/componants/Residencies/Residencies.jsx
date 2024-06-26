import React, { useRef } from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../../utils/common";
import "swiper/css";

export const SliderButton = ({ swiperRef }) => {
  return (
    <div className="absolute right-0 z-10 flex gap-3 mb-5 mr-4">
      <button
        className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

export const Residencies = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex flex-col px-7 pb-5 pt-3">
          <span className="text-yellow-500 font-semibold text-2xl ">Best Choices</span>
          <span className="text-blue-950 font-bold text-4xl ">Popular Residencies</span>
        </div>
        <SliderButton className=" mb-10" swiperRef={swiperRef} />
        <Swiper className="relative mt-10"
          {...sliderSettings}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="">
                <div
                  className="gap-3 w-[18.5rem] flex items-center flex-col m-3 my-5 p-4 bg-white rounded-md transition-all duration-300 ease-in-out
                  transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:via-[rgba(136,160,255,0.46)] hover:to-[rgba(255,255,255,0)]
                  hover:shadow-[0px_72px_49px_-51px_rgba(136,160,255,0.21)]"
                >
                  <img className="max-w-[15rem]" src={card.image} alt="img" />
                  <span className="flex flex-col p-1 mt-3">
                    <span className="text-lg pt-1 font-semibold text-yellow-500">${card.price}</span>
                    <span className="text-blue-950 font-bold py-2 text-2xl">{card.name}</span>
                    <span className="text-gray-400 text-sm">{card.detail}</span>
                  </span>
                </div>
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};
