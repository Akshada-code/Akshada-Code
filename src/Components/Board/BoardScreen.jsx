// import React, { useEffect } from "react";
// import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
// const imageLink =
//   "https://artstudiolife.com/wp-content/uploads/2022/03/roman-painting.jpg";

// //   "https://c4.wallpaperflare.com/wallpaper/666/441/256/pubg-pubh-playerunknown-s-battlegrounds-wallpaper-preview.jpg";

// const BoardScreen1 = () => {
//   const { editor, onReady } = useFabricJSEditor();

//   useEffect(() => {
//     const canvas = editor?.canvas;
//     if (!canvas) {
//       console.log("Canvas not found!");
//       return;
//     }

//     fabric.Image.fromURL(
//       imageLink,
//       function (oImg) {
//         oImg.set({
//           selectable: false,
//           evented: false,
//         });

//         canvas.setWidth(oImg.width);
//         canvas.setHeight(window.innerHeight);

//         const canvasContainer = canvas.getElement().parentNode;
//         canvasContainer.style.width = `${oImg.width}px`;
//         canvasContainer.style.height = `${window.innerHeight}px`;

//         editor?.canvas.add(oImg);
//         editor?.canvas.requestRenderAll();

//         console.log("Image loaded and added to canvas");
//       },
//       {
//         crossOrigin: "anonymous",
//         id: `background-${getRandomNumber(100000, 999999999)}`,
//         isClosed: false,
//         eventName: "",
//         eventDescription: "",
//       }
//     );
//   }, [editor?.canvas]);

//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   return (
//     <>
//       <FabricJSCanvas className="fabric-canvas" onReady={onReady} />
//       {/* // <div className="bg-black text-white mx-auto  w-[428px] h-[726px] "> */}
//       <div className="absolute w-[212px] h-[30px] top-[11px] left-[15px] opacity-0"></div>
//     </>
//   );
// };

// export default BoardScreen1;

import React, { useEffect } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from "fabric";

const imageLink =
  "https://artstudiolife.com/wp-content/uploads/2022/03/roman-painting.jpg";

const BoardScreen = () => {
  const { editor, onReady } = useFabricJSEditor();

  useEffect(() => {
    const canvas = editor?.canvas;
    if (!canvas) {
      console.log("Canvas not found!");
      return;
    }

    const handleResize = () => {
      if (!canvas) return;

      const canvasContainer = canvas.getElement().parentNode;
      const aspectRatio = canvas.width / canvas.height;
      const newWidth = window.innerWidth;
      const newHeight = newWidth / aspectRatio;

      canvas.setWidth(newWidth);
      canvas.setHeight(newHeight);
      canvasContainer.style.width = `${newWidth}px`;
      canvasContainer.style.height = `${newHeight}px`;

      const backgroundImage = canvas.backgroundImage;
      if (backgroundImage) {
        backgroundImage.scaleToWidth(newWidth);
        backgroundImage.scaleToHeight(newHeight);
        canvas.requestRenderAll();
      }
    };

    fabric.Image.fromURL(
      imageLink,
      function (oImg) {
        oImg.set({
          selectable: false,
          evented: false,
        });

        canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas), {
          scaleX: canvas.width / oImg.width,
          scaleY: canvas.height / oImg.height,
        });

        handleResize();
        window.addEventListener("resize", handleResize);
      },
      {
        crossOrigin: "anonymous",
        id: `background-${getRandomNumber(100000, 999999999)}`,
      }
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [editor?.canvas]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <FabricJSCanvas className="fabric-canvas" onReady={onReady} />
      <div className="absolute w-[212px] h-[30px] top-[11px] left-[15px] opacity-0"></div>
    </>
  );
};

export default BoardScreen;
