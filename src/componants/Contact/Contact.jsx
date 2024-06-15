import React from "react";
import "./Contact.css";
import { AiFillMessage } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl pb-10 mx-auto flex gap-4 justify-between pt-5 items-center">
        <div className="w-[45rem]">
          <div className="flex flex-col px-7 pb-5 pt-3">
            <span className="text-yellow-500 font-semibold text-3xl pb-2 ">
              Our Contact Us
            </span>
            <span className="text-blue-950 font-bold text-4xl ">
              Easy To Contact Us
            </span>
            <span className="py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              nesciunt aliquid itaque iste quia sed ex sequi quidem, vel fugit
              possimus hic maiores impedit.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="p-6 w-[20rem] mx-auto bg-white rounded-xl shadow-md space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">Call</div>
                  <p className="text-gray-500">021 123 145 14</p>
                </div>
              </div>
              <a
                href="tel:02112314514"
                className="block text-center text-black bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none"
              >
                Call now
              </a>
            </div>
            <div className="p-6 w-[20rem] mx-auto bg-white rounded-xl shadow-md space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <AiFillMessage />
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">Chat</div>
                  <p className="text-gray-500">021 123 145 14</p>
                </div>
              </div>
              <a
                href="tel:02112314514"
                className="block text-center text-black bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none"
              >
                Chat Now
              </a>
            </div>
            <div className="p-6 w-[20rem] mx-auto bg-white rounded-xl shadow-md space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaVideo></FaVideo>
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">Video Call</div>
                  <p className="text-gray-500">021 123 145 14</p>
                </div>
              </div>
              <a
                href="tel:02112314514"
                className="block text-center text-black bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none"
              >
                Video Call Now
              </a>
            </div>
            <div className="p-6 w-[20rem] mx-auto bg-white rounded-xl shadow-md space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <RiMessage2Fill />
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">Message</div>
                  <p className="text-gray-500">021 123 145 14</p>
                </div>
              </div>
              <a
                href="tel:02112314514"
                className="block text-center text-black bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none"
              >
                Message now
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <img className="i-containar" src="./contact.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
