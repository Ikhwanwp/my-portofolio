import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function About() {
  return (
    <div className="container">
      <div className="flex items-start flex-col px-4">
        <h1 className="text-color-primary font-semibold text-2xl mx-auto ">
          About Me
        </h1>
        <div>
          <div>
            <div className="w-full my-5">
              <div className=" w-[141px] h-[141px] rounded-full ring-1 ring-color-primary p-10 border mx-auto"></div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl text-color-secondary font-medium">
                Biography
              </h2>
              <span className="w-32 h-0.5 bg-color-primary "></span>
              <p className="text-color-secondary-dark text-base">
                I'm{" "}
                <span className="text-color-primary">
                  IKhwan Wiratama Putra
                </span>
                from <span className="text-color-primary">Indonesia</span>, and
                i do content about design and development. I really enjoy
                learning languages like
                <span className="text-color-primary">
                  Javascript, Dart, PHP, etc
                </span>
                . I also enjoy wireframing as well as creating all kinds of{" "}
                <span className="text-color-primary">UI/UX</span> designs with
                figma and frammer.
              </p>
            </div>
          </div>
          <div className="py-2 px-3 rounded-xl border border-color-primary w-56 bg-color-secondary-dark/10 mt-4 flex flex-col items-center space-y-2">
            <h1 className="font-medium text-2xl text-color-primary">
              Lets Connect
            </h1>
            <div className="flex space-x-3">
              <a href="#">
                <AiFillInstagram
                  size={25}
                  className="text-color-secondary-dark hover:text-color-primary-light"
                />
              </a>
              <a href="#">
                <AiFillFacebook
                  size={25}
                  className="text-color-secondary-dark hover:text-color-primary-light"
                />
              </a>
              <a href="#">
                <AiFillTwitterCircle
                  size={25}
                  className="text-color-secondary-dark hover:text-color-primary-light "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
