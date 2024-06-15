import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

export const Hero = () => {
  return (
    <div className="bg-black text-white">
      <section className=" max-w-screen-xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center pe-10">
          <div className="w-full flex flex-col ps-10 ">
            <div className="relative">
              <div className=" absolute left-52 -top-5 w-16 h-16 bg-orange-300 rounded-full"></div>
              <h1 className="text-6xl relative z-10 pb-10 font-bold">
                Discover <br /> More Suitable <br />
                proverty
              </h1>
            </div>
            <div className="pb-6 text-xl text-gray-300">
              <span>
                Find a variety of properties that suit you very easily <br />
              </span>
              <span>
                forget all dificulties in finding a Residencie for you
              </span>
            </div>
            <div className="bg-white mb-8 flex items-center justify-between w-1/2 py-2 pr-4 ps-3 rounded-md ">
              <HiLocationMarker className="text-blue-500 "></HiLocationMarker>
              <input className="border-none text-black" type="text" />
              <button className="rounded-md py-2 px-3 text-center text-white bg-gradient-to-r from-blue-600 to-blue-900">
                Search
              </button>
            </div>
            <div className=" flex gap-6">
              <div className="flex flex-col  gap-2">
                <span className="text-4xl font-semibold">
                  <CountUp end={9000} duration={3} start={8000}></CountUp>
                  <span className="text-orange-400">+</span>
                </span>
                <span className="text-gray-300 text-xl">Premium Products</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-semibold">
                  <CountUp end={1000} duration={3} start={2000}></CountUp>
                  <span className="text-orange-400">+</span>
                </span>
                <span className="text-gray-300 text-xl">Happy Customers</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-semibold">
                  <CountUp end={21}></CountUp>
                  <span className="text-orange-400">+</span>
                </span>
                <span className="text-gray-300 text-xl">Award Winings</span>
              </div>
            </div>
          </div>
          <div>
            <div className="i-containar">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
