import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./board.css";
import fromGalary from "../../assets/fromGalary.svg";
import fromBlank from "../../assets/fromBlank.svg";
import fromPhone from "../../assets/fromPhone.svg";
import Line from "../../assets/Line.svg";
import { BsThreeDotsVertical } from "react-icons/bs";

// import "./newBoard.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const NewBoard = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const storedToken = localStorage.getItem("token");

    try {
      const response = await fetch(
        "https://prymr-dev-backend.vercel.app/api/file-upload/uploadFile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        const imageUrl = result.data.url;

        setSelectedImage(imageUrl);
        navigate(
          `/board-builder-edit-board?image=${encodeURIComponent(imageUrl)}`
        );
      } else {
        console.error(
          "Failed to upload file",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-1">
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="">
          <label htmlFor="fileInput1">
            <img src={fromGalary} alt="From Image" className="cursor-pointer" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="fileInput1"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        <div className="">
          <label htmlFor="fileInput2">
            <img src={fromPhone} alt="From Image" className="cursor-pointer" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="fileInput2"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <div className="">
          <label htmlFor="fileInput3">
            <img src={fromBlank} alt="From Image" className="cursor-pointer" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="fileInput3"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      {selectedImage && (
        <div className="selected-image-container mt-4">
          <img src={selectedImage} alt="Selected" className="selected-image" />
        </div>
      )}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-2"></div>
      <img className="m-3" src={Line} alt="Line" />

      <div className="float-left flex justify-start w-full gap-1 text-white">
        <div className="p-1"> Phone / </div>
        <div className="p-1"> Saved / </div>
        <div className="p-1"> Gif </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide>
            <img
              className="h-48 object-cover"
              src="https://w0.peakpx.com/wallpaper/193/363/HD-wallpaper-white-flower-daisy-flores-flowers-sunflowers-vintage-thumbnail.jpg"
              alt="flower"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="float-left flex justify-start w-full py-1 text-white">
        Continue Editing
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide>
            <div className="mt-2 bg-slate-800 p-2 rounded-md">
              <img
                src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg"
                alt="flower"
              />
              <div className="flex justify-between">
                <div className="text-slate-200">
                  <p className="bg-slate-100 mt-1 rounded-lg px-1 py-[2px] text-sm text-black w-20 text-center">
                    draft
                  </p>
                  <h3 className="text-xl font-semibold">Hindi Shadow</h3>
                  <span className="text-slate-400 text-sm">
                    Last updated : 20/03/2002
                  </span>
                </div>
                <BsThreeDotsVertical className="text-slate-200" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // </div>
  );
};

export default NewBoard;
