import React, { useEffect, useRef, useState } from "react";
import threedot from "../../assets/threedots.svg";
import smallavatar from "../../assets/smallAvatar.svg";

import bookmark from "../../assets/bookmark.svg";
import comment from "../../assets/comment.svg";
import book from "../../assets/book.svg";
import Slider from "react-slick";
import share from "../../assets/Share.svg";

import artImage from "../../assets/Art.svg";
import { GoGift } from "react-icons/go";
import yellowbookmark from "../../assets/yellowbookmark.svg";
import arrowspointingout from "../../assets/arrowspointingout.svg";
import X from "../../assets/x-mark.svg";
import folder from "../../assets/folderimg.svg";
import blockicon from "../../assets/block.svg";
import CheckCircle from "../../assets/CheckCircle.svg";
import WarningCircle from "../../assets/WarningCircle.svg";

import CircleWavyCheck from "../../assets/CircleWavyCheck.svg";
import "./home.css";
import line from "../../assets/Line23.svg";

const Card = React.forwardRef(({ board, onLoadMore }, ref) => {
  const [isFollowing, setIsFollowing] = useState();

  const [isOpenOption, setIsOpenOption] = useState(false);

  const [isBookmarkOption, setIsBookmarkOption] = useState(false);

  const [isImageOption, setIsImageOption] = useState(false);

  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const componentRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ResizeObserverSize: 10,
  };

  const bookmarkOptions = [
    {
      image: folder,
      name: "Quick Bookmark",
    },
    {
      image: folder,
      name: "Add Folder",
    },
    {
      image: folder,
      name: "Create New Folder",
    },
  ];

  if (!board) return null;

  const token = localStorage.getItem("token");

  const handleFollow = async () => {
    try {
      console.log("save");
      const response = await fetch(
        `https://prymr-dev-backend.vercel.app/api/user/followUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            followedUserId: board.user._id,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsFollowing(!isFollowing);
      }
    } catch (error) {
      console.log("Error following user", error);
    }
  };

  const handleScroll = () => {
    if (componentRef.current) {
      const topPosition = componentRef.current.getBoundingClientRect().top;
      if (topPosition <= window.innerHeight) {
        onLoadMore();
      }
      if (topPosition <= 40) {
        setIsOpenOption(false);
        setIsBookmarkOption(false);
        setIsImageOption(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mb-0 pt-[2vh]" ref={ref}>
      <div className="relative text-white  ">
        <div className="bg-[#262626] flex justify-between px-3">
          <div className="flex items-center gap-2">
            <img src={smallavatar} alt="tree" />
            <h3
              className="text-[#B2B2B2]
"
            >
              {board.user.userName}
            </h3>

            <button
              className={isFollowing ? "text-blue-500" : "text-[#525050]"}
              onClick={() => handleFollow()}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
          <div onClick={() => setIsOpenOption(!isOpenOption)}>
            <img src={threedot} alt="threedot" className=" items-center px-2" />
          </div>
        </div>

        {isOpenOption && (
          <div
            className="bg-[#393939]  font-bold w-auto rounded-[20px]  m-1 absolute right-0 top-10 z-10   "
            ref={componentRef}
          >
            <span
              className="flex py-3  w-122
h-22 p-1 px-4 text-white gap-3"
            >
              <img src={CheckCircle} />
              Follow Creator
            </span>
            <span
              className="flex p-1 px-4 w-122
h-22 text-white gap-3"
            >
              <img src={CheckCircle} />
              Follow Board
            </span>
            <img src={line} className="px-6 p-2" />
            <span
              className="flex p-1 px-4 w-122
h-22 text-white gap-3"
            >
              <img src={CircleWavyCheck} alt="Report" />
              Subscribe
            </span>
            <img src={line} className="px-6 p-2" />
            <span className="flex p-1 px-4 w-122 h-22 text-[#F00] gap-3 mb-2">
              <img src={WarningCircle} alt="Report" />
              Report Post
            </span>
            <span className="flex p-1 px-5  text-[#FF0000] gap-3 mb-2">
              <img src={blockicon} alt="Block" />
              Block
            </span>
          </div>
        )}

        <Slider {...settings}>
          {board &&
            board.BoardImages &&
            board.BoardImages.map((image, index) => (
              <div key={image.id} className="text-[#747171] bg-[#191919] flex flex-col gap-2 relative">
                <img
                  className="h-[70vh] object-cover w-full"
                  src={image.imageUrl}
                  alt="homepageimage"
                />

                {isBookmarkOption && (
                  <div
                    className="bg-[#363636] w-auto absolute bottom-[230px] left-2"
                    ref={componentRef}
                  >
                    <header className="flex pl-2 items-center justify-between bg-[#00000047] ">
                      <img
                        src={yellowbookmark}
                        className=" text-yellow-400 icon"
                      />
                      <h2 className=" text-yellow-300 px-2 p-3 font-medium text-base leading-15.54 tracking-5% text-right ">
                        Bookmark
                      </h2>
                      <button className="text-white"></button>
                      <img
                        src={arrowspointingout}
                        alt="arrowspointingout"
                        className="w-5 h-5 mr-2"
                      />
                      <img onClick={() => setIsBookmarkOption(false)} src={X} />
                    </header>
                    <div className="flex gap-5 my-2 px-2">
                      {bookmarkOptions.map((option) => (
                        <div className="flex flex-col">
                          <img
                            className="w-20 "
                            src={option.image}
                            alt="folder"
                          />
                          <p className="text-[10px]  text-wrap text-center relative -top-5 text-gray-600 font-semibold">
                            {option.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isImageOption && (
                  <div
                    className="bg-[#191919] flex absolute bottom-[230px] right-2 w-auto"
                    ref={componentRef}
                  >
                    <div className="flex gap-1 items-center">
                      {" "}
                      <img src={artImage} className="rounded-[10px] h-full" />
                      <div>
                        <div className="flex  ">
                          <img
                            src={smallavatar}
                            className="px-4 border-white"
                          />
                          <p> FakeFroot 2h</p>{" "}
                        </div>{" "}
                        <div className="pt-3 pl-3">
                          <p>Page 1</p>
                          <p>The HIstory og it All</p>
                          <p>Interactive post with 12 Tappable</p>{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mr-10 ">
                  <div className="flex px-5 gap-7 items-center">
                    <div
                      className="border-white"
                      onClick={() => setIsBookmarkOption(!isBookmarkOption)}
                    >
                      <img src={bookmark} alt="book" />
                    </div>

                    <img src={share} alt="share" />

                    <div className="flex gap-1  text-m item-center">
                      <img src={comment} alt="comment" className="w-8 h-8 " />8
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className=" items-center py-4 gap-1 text-m">
                      <img
                        onClick={() => {
                          setIsImageOption(!isImageOption);
                        }}
                        src={book}
                        className="w-7 h-7"
                        alt="book"
                      />
                      <span>
                        {index + 1}/{board.BoardImages.length}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl ml-3 text-white ">{image.title}</h3>
                <p className=" ml-3 text-white">Interaction Poster</p>
                <p className=" ml-3 text-white mb-3">{image.description}</p>
                <div className="flex text-white float-right px-4 items-center m-3 mb-3 gap-2">
                  support
                  <GoGift className="w-84 h-84" />
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
});

export default Card;
