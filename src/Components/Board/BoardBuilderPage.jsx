import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./board.css";
import { useNavigate } from "react-router";
import SaveBoard from "./SaveBoard";
import NewBoard from "./NewBoard";
import BoardScreen from "./EditBoard";

const BoardBuilder = () => {
  const [isSaveActive, setIsSaveActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleNewBoardClick = () => {
    setIsSaveActive(false);
  };
  const handleSaveBoardClick = () => {
    setIsSaveActive(true);
  };

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    navigate("/board");
    window.open(`/board?image=${encodeURIComponent(imageUrl)}`, "_blank");
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="bg-black h-screen">
      <div className="flex items-center bg-black">
        <button
          className="text-3xl justify-center flex flex-col"
          onClick={handleBack}
        >
          <RxCross2 className="ml-1" />
          <span className="text-base">Close</span>
        </button>

        <button className="border rounded-3xl text-sm w-60">
          Advanced settings
        </button>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          className={`${
            isSaveActive
              ? "text-white"
              : "text-blue-500 border-b-2 border-blue-500"
          } px-4 py-2`}
          onClick={handleNewBoardClick}
        >
          New Board
        </button>
        <button
          className={`${
            isSaveActive ? "text-blue-500  border-b-blue-500" : "text-white"
          } px-4 py-2`}
          onClick={handleSaveBoardClick}
        >
          Saved Board
        </button>
      </div>

      {isSaveActive ? (
        <SaveBoard />
      ) : (
        <NewBoard onImageSelect={handleImageSelect} />
      )}

      {selectedImage && <BoardScreen imageUrl={selectedImage} />}
    </div>
  );
};

export default BoardBuilder;

// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import "./board.css";
// import { useNavigate } from "react-router";
// import SaveBoard from "./SaveBoard";
// import NewBoard from "./NewBoard";
// import BoardScreen from "./EditBoard";

// const BoardBuilder = () => {
//   const [isSaveActive, setIsSaveActive] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const navigate = useNavigate();

//   const handleNewBoardClick = () => {
//     setIsSaveActive(false);
//   };
//   const handleSaveBoardClick = () => {
//     setIsSaveActive(true);
//   };

//   const handleImageSelect = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     navigate("/board");
//     window.open("/board?image=${encodeURIComponent(imageUrl)}", "_blank");
//   };
//   const handleBack = () => {
//     navigate("/home");
//   };

//   return (
//     <div className="bg-black h-screen">
//       <div className="flex items-center  bg-black ">
//         <button
//           className="text-3xl justify-center  flex flex-col"
//           onClick={handleBack}
//         >
//           <RxCross2 className="ml-1" />
//           <span className="text-base">Close</span>
//         </button>

//         <button className="border rounded-3xl text-sm w-60">
//           Advanced settings
//         </button>
//       </div>

//       <div className="flex justify-center items-center space-x-4 ">
//         <button
//           className={`${
//             isSaveActive
//               ? "border-b-2 border-blue-500 text-blue"
//               : "border-b-2 "
//           }`}
//           onClick={handleNewBoardClick}
//         >
//           New Board
//         </button>
//         <button
//           className={`${
//             isSaveActive
//               ? "border-b-2 border-blue-500 text-blue"
//               : "border-b-2 "
//           }`}
//           className="border-2"
//           onClick={handleSaveBoardClick}
//         >
//           Saved Board
//         </button>
//       </div>

//       {isSaveActive ? (
//         <SaveBoard />
//       ) : (
//         <NewBoard onImageSelect={handleImageSelect} />
//       )}

//       {selectedImage && <BoardScreen imageUrl={selectedImage} />}
//     </div>
//   );
// };

// export default BoardBuilder;
