import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <div className="bg-black">
      <section className=" max-w-screen-xl mx-auto">
        <div className="flex ps-10 items-center text-gray-300 justify-between paddings p-6 w-full text-xl bg-black h-container">
          <div className="bg-gradient-to-r py-2 from-blue-600 to-blue-900 rounded-md">
          <span className="text-white p-4 font-semibold text-2xl">GREENFIELD</span>
          </div>
          <div className="flex items-center gap-6 px-4 ">
            <a href="">Residencie</a>
            <a href=""> Our Value</a>
            <a href="">Contact Us</a>
            <a  href="">Get Started</a>
            <a href=""><button className="rounded-md py-2  px-4 text-center text-white bg-gradient-to-r from-blue-600 to-blue-900">Login</button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
