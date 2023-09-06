import React from "react";
import "./Hero.css"

export const Hero = () => {
  return (
    <div className="bg-black text-white">
      <section className=" max-w-screen-xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="w-full">left</div>
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
