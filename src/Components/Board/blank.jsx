import React from "react";
import copy from "../assets/copy.svg";
import smallavatar from "../assets/smallAvatar.svg";
import storyframe from "../assets/storyFrame.svg";
import share from "../assets/Share.svg";
import { LuShare2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blank = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjusted for better layout
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto items-center justify-center text-white container bg-[#383737] py-6 px-3">
      <div className="flex justify-between">
        <p className="font-semibold text-[24px]">The History of it all</p>
        <RxCross2 className="text-white text-xl -mt-2" />
      </div>
      <div className="flex text-xs m-1 gap-2">
        By
        <img src={smallavatar} className="h-5 w-5" alt="Avatar" />
        FakeFroot
      </div>

      <div className="mt-5 flex items-center justify-center">
        <div>
          <div className="w-[312px] h-[459px] text-center bg-slate-500">
            Image you're about to bookmark
          </div>
          <div>
            <div className="flex gap-2 my-3 items-center">
              <LuShare2 className="text-white text-2xl" />
              <p className="text-xl">Share Board</p>
            </div>
            <div className="flex items-center justify-center border-2 mt-4">
              <input
                type="text"
                className="w-60 bg-transparent py-2 rounded-sm placeholder:text-xl text-white text-center"
                placeholder="https://prymer.com"
              />
              <div className="flex text-xl px-4 items-center bg-[#2D78E6] gap-2 py-[11px]">
                <img src={copy} alt="copy" />
                <p>copy</p>
              </div>
            </div>
            <div className="mt-2">
              <p>SHARE VIA MESSAGE ON PRYMER</p>

              <div className="flex gap-2 mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={smallavatar}
                      alt="smallavatar"
                      className="h-10 w-10 rounded-full mx-auto"
                    />
                    <p>Lipita</p>
                    <small className="text-gray-400 text-xs">@lipita.com</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blank;
