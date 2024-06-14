import React from "react";

import search from "../../assets/search.svg";
import { GrHomeRounded } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import plus from "../../assets/plusCircle.svg";
import smallavatar from "../../assets/smallAvatar.svg";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const handlePlus = () => {
    navigate("/boardBuilder");
  };
  return (
    <div className="bg-black fixed bottom-0 w-full text-white flex justify-around items-center py-2 h-18 ">
      <div className="flex flex-col items-center">
        <GrHomeRounded className="text-[#FFF500]" size={28} />
      </div>
      <div className="flex flex-col items-center">
        <img src={search} className="text-gray-400" size={24} />
      </div>
      <div className="flex flex-col items-center">
        <img
          src={plus}
          className="text-gray-400 w-10 h-10"
          onClick={handlePlus}
        />
      </div>
      <div className="flex flex-col items-center relative">
        <LuMessagesSquare className="text-gray-400 w-10 h-10" />
        <span className="bg-yellow-500 h-2 w-2 rounded-full absolute top-0 right-0 mt-1 mr-1"></span>
      </div>
      <div className="flex flex-col items-center relative">
        <img
          className="rounded-full w-10 h-10"
          src={smallavatar}
          alt="Profile"
        />
        <span className="bg-yellow-500 h-2 w-2 rounded-full absolute top-0 right-0 mt-1 mr-1"></span>
      </div>
    </div>
  );
};

export default Navbar;
