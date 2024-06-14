import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaUndo, FaRedo } from "react-icons/fa"; // Import FaUndo and FaRedo icons
import hamburger from "../../../../assets/hamburger.svg";
import eye from "../../../../assets/Eye.svg";
import leftarrow from "../../../../assets/leftarrow.svg";
import search from "../../../../assets/search.svg";
import arrowspointingout from "../../../../assets/arrowspointingout.svg";
import tappable from "../../../../assets/tappable.svg";
import AddAction from "../../../../assets/AddActions.svg";
import AddContent from "../../../../assets/AddContent.svg";
import { fabric } from "fabric"; // Import Fabric.js

const LayersPanel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [layerIsClicked, setLayerIsClicked] = useState(false);
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 500, // Set the width as needed
      height: 500, // Set the height as needed
      backgroundColor: "#f3f3f3", // Set the background color
    });

    fabricCanvasRef.current = canvas;

    canvas.on("object:added", () => {
      // Add object event listener to track changes for undo and redo
      console.log("Object added");
    });

    canvas.on("object:removed", () => {
      // Remove object event listener to track changes for undo and redo
      console.log("Object removed");
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        triggerLayerAdd(reader.result); // Pass the image URL
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerLayerAdd = (imageURL) => {
    const canvas = fabricCanvasRef.current;
    fabric.Image.fromURL(imageURL, (img) => {
      img.scaleToWidth(canvas.width * 0.9); // Scale image to 90% of canvas width
      img.scaleToHeight(canvas.height * 0.9); // Scale image to 90% of canvas height
      canvas.add(img);
      canvas.renderAll();
    });
  };

  const onAddSticker = (imageURL) => {
    const canvas = fabricCanvasRef.current;
    fabric.Image.fromURL(
      imageURL,
      function (oImg) {
        oImg.set({
          selectable: true,
          evented: true,
        });
        canvas.add(oImg);
        canvas.renderAll();
      },
      {
        crossOrigin: "anonymous",
        id: `sticker-${getRandomNumber(100000, 999999999)}`,
        imageLink: imageURL,
        isClosed: false,
        eventName: "",
        eventDescription: "",
      }
    );
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleLayerAddClick = () => {
    if (selectedImage) {
      onAddSticker(selectedImage);
    }
  };
  const handleUndo = () => {
    const lastAction = canvasHistory.pop();
    if (lastAction) {
      setCanvasHistory([...canvasHistory]);
      setRedoHistory([...redoHistory, lastAction]);
      fabricCanvasRef.current.loadFromJSON(lastAction);
    }
  };

  const handleRedo = () => {
    const redoAction = redoHistory.pop();
    if (redoAction) {
      setCanvasHistory([...canvasHistory, redoAction]);
      setRedoHistory([...redoHistory]);
      fabricCanvasRef.current.loadFromJSON(redoAction);
    }
  };

  return (
    <div className="fixed bottom-20 w-[100%]">
      <header className="flex items-center justify-between bg-[#00000047]">
        <h2 className="text-lg text-white px-2">Layers</h2>
        <button className="text-white" onClick={handleLayerAddClick}>
          <FaPlus />
        </button>
        <img src={search} alt="search" className="w-5 mr-2 h-5" />
        <img
          src={arrowspointingout}
          alt="arrowspointingout"
          className="w-5 h-5 mr-2"
        />
        <button className="text-white" onClick={handleUndo}>
          <FaUndo />
        </button>
        <button className="text-white" onClick={handleRedo}>
          <FaRedo />
        </button>
      </header>
      <div className="bg-gray-800 text-white opacity-500 p-2">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center h-9 justify-between p-2 bg-gray-700 rounded">
            <h3 className="text-sm">Layer 01</h3>
            <div className="flex h-8 bg-[#4B4B4B]">
              <button onClick={() => setLayerIsClicked(!layerIsClicked)}>
                <img src={eye} className="items-center -mt-1 h-6 w-6" />
              </button>
              <button onClick={handleLayerAddClick}>
                <img src={leftarrow} className="items-center -mt-1 h-6 w-6" />
              </button>
              <button>
                <img src={hamburger} className="items-center -mt-1 h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center bg-gray-700 rounded p-4">
              <label htmlFor="fileInput1">
                <img
                  src={selectedImage || tappable}
                  alt="Tappable"
                  className="cursor-pointer w-[120px] h-[120px] rounded-md"
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="fileInput1"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <button className="flex flex-col items-center justify-center bg-gray-700 rounded">
              <img src={AddAction} alt="Add Actions" />
            </button>
            <button className="flex flex-col items-center justify-center bg-gray-700 rounded">
              <img src={AddContent} alt="Add Content" />
            </button>
          </div>
          <canvas ref={canvasRef} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default LayersPanel;
