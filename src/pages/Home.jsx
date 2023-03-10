import React from "react";
import { BsFillMouseFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="container">
      <div className="w-full px-4">
        <div className="bg-[#545454]/25 w-[340px] h-60 rounded-lg mx-auto text-center">
          <div className="bg-[#07193C] w-full h-4 rounded-t-lg flex space-x-1 pl-2 items-center">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          </div>
          <div className="my-5">
            <h3 className="text-color-secondary-dark font-semibold text-lg">
              Hello, I'm
            </h3>
            <h1 className="text-color-primary font-bold text-2xl">
              Ikhwan Wiratama Putra
            </h1>
            <h3 className="text-color-secondary-dark font-semibold text-lg">
              Web Developer
            </h3>
            <div className="flex space-x-3 justify-center mt-3">
              <button
                type=""
                className="text-color-primary border border-color-primary hover:bg-color-primary hover:text-white"
              >
                Download CV
              </button>
              <button
                type=""
                className="text-white bg-color-primary hover:bg-color-primary-dark"
              >
                Hire Me!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-10 px-4">
        <div className="flex flex-col items-center space-y-1">
          <a href="#">
            <AiFillLinkedin
              size={25}
              className="text-color-primary hover:text-color-primary-dark"
            />
          </a>
          <a href="#">
            <AiFillGithub
              size={25}
              className="text-color-primary hover:text-color-primary-dark"
            />
          </a>
          <a href="#">
            <AiFillDribbbleCircle
              size={25}
              className="text-color-primary hover:text-color-primary-dark"
            />
          </a>
          <div className="w-1 h-11 bg-color-primary"></div>
        </div>
        <div className="h-20 w-20 bg-color-primary"></div>
        <a href="#" className="flex flex-col items-end space-y-12">
          <BsFillMouseFill size={25} className="text-color-primary" />
          <p className="text-color-primary rotate-90 p-0 -mx-9">Mouse Scroll</p>
        </a>
      </div>
    </div>
  );
}
