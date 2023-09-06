import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="bg-black text-white">
      <section className=" max-w-screen-xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="w-full flex flex-col ">
            <div className="relative">
              <div className=" absolute left-52 -top-5 w-16 h-16 bg-orange-300 rounded-full"></div>
              <h1 className="text-6xl relative z-10 pb-10 font-bold">
                Discover <br /> More Suitable <br />
                proverty
              </h1>
            </div>
            <div>
              <span>
                Find a variety of properties that suit you very easily
              </span>
              <span>
                forget all dificulties in finding a Residencie for you
              </span>
            </div>
            <div>Search Bar</div>
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
