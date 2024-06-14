// import React, { useState } from "react";
// import { BsInfoCircle } from "react-icons/bs";
// import { LuPencilLine } from "react-icons/lu";
// import { HiOutlineBookOpen } from "react-icons/hi2";
// import { GoPlus } from "react-icons/go";
// import AddContent from "../../../assets/AddContent.svg";
// import search from "../../../assets/search.svg";
// import { IoLayersOutline } from "react-icons/io5";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { FaPlus, FaRedo, FaUndo } from "react-icons/fa";
// import arrowspointingout from "../../../assets/arrowspointingout.svg";
// import hamburger from "../../../assets/hamburger.svg";
// import eye from "../../../assets/Eye.svg";
// import leftarrow from "../../../assets/leftarrow.svg";
// import tappable from "../../../assets/tappable.svg";
// import AddAction from "../../../assets/AddActions.svg";

// import Xmark from "../../../assets/x-mark.svg";
// import dottedCircle from "../../../assets/dottedCircle.svg";
// import createButton from "../../../assets/createButton.svg";
// import smily from "../../../assets/smily.svg";
// import questionmarkcircle from "../../../assets/questionmarkcircle.svg";
// import BoardEditorBottomDiv from "./BoardEditorBottomDiv";

// const ActionBar = ({ imageUrl }) => {
//   const navigate = useNavigate();
//   const [layerIsClicked, setLayerIsClicked] = useState(false);
//   const [isBoardVisible, setBoardVisible] = useState(true);
//   const [isNewTappableClicked, setNewTappableClicked] = useState(false);
//   const [isBoardEditorVisible, setBoardEditorVisible] = useState();

//   const handleBoardInfo = () => {
//     alert("navigating to board info");
//     console.log("check 3 from action bar");
//     navigate("/boardBuilder-BoardInfo-createPost", { state: imageUrl });
//     toast.success("Navigating to Add / Save Process");
//   };

//   const handleLayerClick = () => {
//     setLayerIsClicked(!layerIsClicked);
//     setBoardVisible(layerIsClicked);
//   };
//   const handleTappableClick = () => {
//     setNewTappableClicked(!isNewTappableClicked);
//     setBoardVisible(isNewTappableClicked);
//   };

//   return (
//     <>
//       <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
//         {isBoardVisible && (
//           <div className="bg-gray-600  justify-center flex w-full p-1 items-center space-y-4">
//             {/* Top section  */}
//             <div className="flex space-x-4 py-2">
//               <button
//                 onClick={handleBoardInfo}
//                 className="py-2 px-6 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-[25px] border border-white flex items-center justify-center space-x-2"
//               >
//                 <span className="flex-shrink-0"> Board Info</span>
//                 <span className="flex-shrink-0">
//                   {" "}
//                   <BsInfoCircle />
//                 </span>
//               </button>

//               <button
//                 className="py-2 px-6 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-[25px] border border-white flex items-center justify-center space-x-2"
//                 onClick={setBoardEditorVisible(!isBoardEditorVisible)}
//               >
//                 <span className="flex-shrink-0">Board Editor</span>{" "}
//                 <span className="flex-shrink-0">
//                   <LuPencilLine />
//                 </span>
//               </button>

//               <button className="py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-[25px] border border-white flex items-center justify-center space-x-2">
//                 <span className="flex-shrink-0"> Add Page</span>
//                 <span className="flex-shrink-0">
//                   <HiOutlineBookOpen />
//                 </span>
//               </button>
//             </div>
//           </div>
//         )}

//         {layerIsClicked && (
//           <div className="fixed bottom-20 w-[100%]">
//             <header className="flex items-center justify-between bg-[#00000047] ">
//               <h2 className="text-lg text-white px-2 ">Layers</h2>
//               <button className="text-white">
//                 <FaPlus />
//               </button>
//               <img src={search} alt="search" className="w-5 mr-2 h-5" />
//               <img
//                 src={arrowspointingout}
//                 alt="arrowspointingout"
//                 className="w-5 h-5 mr-2"
//               />
//             </header>
//             <div className="bg-gray-800 text-white opacity-500 p-2">
//               <div className="flex flex-col space-y-1">
//                 <div className="flex items-center h-9 justify-between p-2 bg-gray-700 rounded">
//                   <h3 className="text-sm">Layer 01</h3>
//                   <div className="flex h-8 bg-[#4B4B4B]">
//                     <button>
//                       <img src={eye} className=" items-center -mt-1 h-6 w-6" />
//                     </button>
//                     <button>
//                       <img
//                         src={leftarrow}
//                         le
//                         className="items-center -mt-1 h-6 w-6"
//                       />
//                     </button>
//                     <button>
//                       <img
//                         src={hamburger}
//                         className="items-center -mt-1 h-6 w-6"
//                       />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-3 gap-2">
//                   <button className="flex flex-col items-center justify-center  bg-gray-700 rounded">
//                     <img src={tappable} alt="Tappable" />
//                     {/* <div className="w-12 h-12 bg-gray-500 rounded mb-2"></div>
//                       <span className="text-xs">Tappable</span> */}
//                   </button>
//                   <button className="flex flex-col items-center justify-center  bg-gray-700 rounded">
//                     <img src={AddAction} alt="Add Actions" />
//                     {/* <div className="w-12 h-12 bg-gray-500 rounded mb-2"></div>
//                       <span className="text-xs">Tap Action</span> */}
//                   </button>
//                   <button className="flex flex-col items-center justify-center  bg-gray-700 rounded">
//                     <img src={AddContent} alt="Add Content" />

//                     {/* <div className="w-12 h-12 bg-gray-500 rounded mb-2"></div>
//                       <span className="text-xs">Add Content</span> */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {isNewTappableClicked && (
//           <div className="px-1 text-white justify-center">
//             <div className="flex ">
//               <img src={Xmark} alt="X" />
//               <h1> Create a Button (Tappable)</h1>
//             </div>
//             <div className="flex px-8  m-5  gap-1  items-center py-5 rounded-[20px] border-[1px] p-[10px_15px_10px_15px]">
//               <img src={dottedCircle} alt="" className="mr-2 " />
//               <div className="flex flex-col justify-center  ">
//                 <h3>Select Tappable Area</h3>
//                 <span>Creates a tappable space</span>
//               </div>
//               <img src={questionmarkcircle} alt="" className="ml-auto" />
//             </div>

//             <div className="flex px-8  m-5  gap-1  items-center py-5 rounded-[20px] border-[1px] p-[0px_5px_5px_1px]">
//               <img src={createButton} className="mr-2" />
//               <div className="flex text-wrap flex-col justify-center">
//                 <h3>Create Button</h3>
//                 <span className="text-[#FFFFFFB2]">
//                   from photo, cut from board background
//                 </span>
//               </div>
//               <img src={questionmarkcircle} alt="" className="ml-auto" />
//             </div>

//             <div className="flex px-8  m-5  gap-1  items-center py-5 rounded-[20px] border-[1px] p-[10px_15px_10px_15px]">
//               <img src={smily} className="mr-2" />
//               <div className="flex  flex-col justify-center">
//                 <h3>Choose pre-made buttons </h3>
//                 <span className="text-[#FFFFFFB2]">
//                   from stickers, gifs, for sale buttons, etc.
//                 </span>
//               </div>

//               <img src={questionmarkcircle} alt="" className="ml-auto" />
//             </div>
//           </div>
//         )}

//         {isBoardEditorVisible && <BoardEditorBottomDiv />}
//         <div className="bg-gray-900 justify-center flex w-full p-1 items-center ">
//           <div className="flex space-x-5 py-3">
//             <div className="flex flex-col items-center space-x-2   mr-1">
//               <button
//                 className={` py-1 px-4 rounded-full flex flex-col items-center ${
//                   isNewTappableClicked
//                     ? "bg-yellow-500"
//                     : "bg-gray-700 hover:bg-gray-600"
//                 }`}
//                 onClick={handleTappableClick}
//               >
//                 <GoPlus className="text-xl mb-1" />
//               </button>
//               <span className="text-white"> New Tappable </span>
//             </div>

//             <div className="flex flex-col items-center ">
//               <button className=" hover:bg-gray-600 py-1 px-4 rounded-full flex flex-col items-center">
//                 <FaUndo className="text-xl mb-1" />
//               </button>
//               <span className="text-white  float-left"> Undo </span>
//             </div>

//             <div className="flex flex-col items-center ">
//               <button className=" hover:bg-gray-600 py-1 px-4 rounded-full flex flex-col items-center">
//                 <FaRedo className="text-xl mb-1" />
//               </button>
//               <span className="text-white float-left"> Redo</span>
//             </div>
//             <div className="flex flex-col items-center space-x-1 mr-1">
//               <button
//                 className={`py-1 px-8 rounded-full flex flex-col items-center ${
//                   layerIsClicked
//                     ? "bg-yellow-500"
//                     : "bg-gray-700 hover:bg-gray-600"
//                 }`}
//                 onClick={handleLayerClick}
//               >
//                 <span className="flex gap-2">
//                   0<IoLayersOutline className="text-xl mb-1" />
//                 </span>
//               </button>
//               <span className="text-white -ml-1">Layers</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ActionBar;

import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import AddContent from "../../../assets/AddContent.svg";
import search from "../../../assets/search.svg";
import { IoLayersOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaPlus, FaRedo, FaUndo } from "react-icons/fa";
import arrowspointingout from "../../../assets/arrowspointingout.svg";
import hamburger from "../../../assets/hamburger.svg";
import eye from "../../../assets/Eye.svg";
import leftarrow from "../../../assets/leftarrow.svg";
import tappable from "../../../assets/tappable.svg";
import AddAction from "../../../assets/AddActions.svg";
import Xmark from "../../../assets/x-mark.svg";
import dottedCircle from "../../../assets/dottedCircle.svg";
import createButton from "../../../assets/createButton.svg";
import smily from "../../../assets/smily.svg";
import questionmarkcircle from "../../../assets/questionmarkcircle.svg";
import BoardEditorBottomDiv from "./BoardEditor/BoardEditorBottomDiv";
import LayersPanel from "./Layers/Layers";
import NewTappable from "../NewTappeable/Newtapable";

const ActionBar = ({ imageUrl }) => {
  const navigate = useNavigate();
  const [layerIsClicked, setLayerIsClicked] = useState(false);
  const [isBoardVisible, setBoardVisible] = useState(true);
  const [isNewTappableClicked, setNewTappableClicked] = useState(false);
  const [isBoardEditorVisible, setBoardEditorVisible] = useState(false);

  const handleBoardInfo = () => {
    alert("navigating to board info");
    console.log("check 3 from action bar");
    navigate("/boardBuilder-BoardInfo-createPost", { state: imageUrl });
    toast.success("Navigating to Add / Save Process");
  };

  const handleLayerClick = () => {
    setLayerIsClicked(!layerIsClicked);
    setBoardVisible(!layerIsClicked);
  };

  const handleTappableClick = () => {
    setNewTappableClicked(!isNewTappableClicked);
    setBoardVisible(isNewTappableClicked);
  };

  const handleBoardEditorClick = () => {
    setBoardEditorVisible(!isBoardEditorVisible);
  };

  return (
    <>
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
        {isBoardVisible && (
          <div className="bg-gray-600 justify-center flex w-full p-1 items-center space-y-4">
            {/* Top section */}
            <div className="flex space-x-4 py-2">
              <button
                onClick={handleBoardInfo}
                className="py-2 px-6 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-[25px] border border-white flex items-center justify-center space-x-2"
              >
                <span className="flex-shrink-0"> Board Info</span>
                <span className="flex-shrink-0">
                  {" "}
                  <BsInfoCircle />
                </span>
              </button>

              <button
                className="py-2 px-6 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-[25px] border border-white flex items-center justify-center space-x-2"
                onClick={handleBoardEditorClick}
              >
                <span className="flex-shrink-0">Board Editor</span>{" "}
                <span className="flex-shrink-0">
                  <LuPencilLine />
                </span>
              </button>

              <button className="py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-[25px] border border-white flex items-center justify-center space-x-2">
                <span className="flex-shrink-0"> Add Page</span>
                <span className="flex-shrink-0">
                  <HiOutlineBookOpen />
                </span>
              </button>
            </div>
          </div>
        )}

        {layerIsClicked && <LayersPanel />}

        {isNewTappableClicked && <NewTappable />}

        {isBoardEditorVisible && <BoardEditorBottomDiv />}

        <div className="bg-gray-900 justify-center flex w-full p-1 items-center ">
          <div className="flex space-x-5 py-3">
            <div className="flex flex-col items-center space-x-2   mr-1">
              <button
                className={` py-1 px-4 rounded-full flex flex-col items-center ${
                  isNewTappableClicked
                    ? "bg-[#0085ff]"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={handleTappableClick}
              >
                <GoPlus className="text-xl mb-1" />
              </button>
              <span className="text-white"> New Tappable </span>
            </div>

            <div className="flex flex-col items-center ">
              <button className=" hover:bg-gray-600 py-1 px-4 rounded-full flex flex-col items-center">
                <FaUndo className="text-xl mb-1" />
              </button>
              <span className="text-white  float-left"> Undo </span>
            </div>

            <div className="flex flex-col items-center ">
              <button className=" hover:bg-gray-600 py-1 px-4 rounded-full flex flex-col items-center">
                <FaRedo className="text-xl mb-1" />
              </button>
              <span className="text-white float-left"> Redo</span>
            </div>
            <div className="flex flex-col items-center space-x-1 mr-1">
              <button
                className={`py-1 px-8 rounded-full flex flex-col items-center ${
                  layerIsClicked
                    ? "bg-yellow-500"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={handleLayerClick}
              >
                <span className="flex gap-2">
                  0<IoLayersOutline className="text-xl mb-1" />
                </span>
              </button>
              <span className="text-white -ml-1">Layers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionBar;
