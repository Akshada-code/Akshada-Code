import React from "react"; // import Xmark from "../../../../assets/x-mark.svg";
import dottedCircle from "../../../assets/dottedCircle.svg";
import createButton from "../../../assets/createButton.svg";
import smily from "../../../assets/smily.svg";
import questionmarkcircle from "../../../assets/questionmarkcircle.svg";
import Xmark from "../../../assets/x-mark.svg";

const NewTappable = () => {
  return (
    <div
      className="px-1 -py-5 text-white bg-gray-800 bg-opacity-75
      justify-center"
    >
      <div className="flex scroll-pt-20">
        <img src={Xmark} alt="X" />
        <h1> Create a Button (Tappable)</h1>
      </div>
      <div className="flex px-8  m-4  gap-1  items-center py-2 rounded-[20px] border-[1px] p-[10px_15px_10px_15px]">
        <img src={dottedCircle} alt="" className="mr-2 " />
        <div className="flex flex-col justify-center  ">
          <h3>Select Tappable Area</h3>
          <span>Creates a tappable space</span>
        </div>
        <img src={questionmarkcircle} alt="" className="ml-auto" />
      </div>

      <div className="flex px-8  m-4  gap-1  items-center py-2 rounded-[20px] border-[1px] p-[0px_5px_5px_1px]">
        <img src={createButton} className="mr-2" />
        <div className="flex text-wrap flex-col justify-center">
          <h3>Create Button</h3>
          <span className="text-[#FFFFFFB2]">
            from photo, cut from board background
          </span>
        </div>
        <img src={questionmarkcircle} alt="" className="ml-auto" />
      </div>

      <div className="flex px-8  m-4  gap-1  items-center py-2 rounded-[20px] border-[1px] p-[10px_15px_10px_15px]">
        <img src={smily} className="mr-2" />
        <div className="flex  flex-col justify-center">
          <h3>Choose pre-made buttons </h3>
          <span className="text-[#FFFFFFB2]">
            from stickers, gifs, for sale buttons, etc.
          </span>
        </div>

        <img src={questionmarkcircle} alt="" className="ml-auto" />
      </div>
    </div>
  );
};

export default NewTappable;
