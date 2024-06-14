import React, { useEffect, useRef, useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from "fabric";

import Hammer from "hammerjs";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ActionBar from "./ActionBar/ActionBar";

const CanvasBoard = () => {
  const { editor, onReady } = useFabricJSEditor();
  const [isPanZoomEnabled, setIsPanZoomEnabled] = useState(false);
  const canvasRef = useRef(null);
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get("image");

  useEffect(() => {
    const canvas = editor?.canvas;
    if (!canvas) {
      toast.error("Canvas not found!");
      console.log("Canvas not found!");
      return;
    }

    fabric.Image.fromURL(
      imageUrl,
      function (oImg) {
        oImg.set({
          selectable: false,
          evented: false,
        });

        canvas.setWidth(oImg.width);
        canvas.setHeight(window.innerHeight);

        const canvasContainer = canvas.getElement().parentNode;
        canvasContainer.style.width = `${oImg.width}px`;
        canvasContainer.style.height = `${window.innerHeight}px`;

        editor?.canvas.add(oImg);
        editor?.canvas.requestRenderAll();

        console.log("Image loaded and added to canvas");
      },
      {
        crossOrigin: "",
        id: `background-${getRandomNumber(100000, 999999999)}`,
        isClosed: false,
        eventName: "",
        eventDescription: "",
      }
    );
  }, [editor?.canvas]);

  useEffect(() => {
    const canvas = editor?.canvas;
    if (!canvas) return;

    let isDragging = false;
    let lastPosX, lastPosY;

    const handleMouseDown = (opt) => {
      if ((opt.e.altKey || opt.e.touches) && isPanZoomEnabled) {
        isDragging = true;
        canvas.selection = false;
        lastPosX = opt.e.clientX || opt.e.touches[0].clientX;
        lastPosY = opt.e.clientY || opt.e.touches[0].clientY;
      }
    };

    const handleMouseMove = (opt) => {
      if (isDragging && isPanZoomEnabled) {
        const e = opt.e;
        const vpt = canvas.viewportTransform;
        vpt[4] += (e.clientX || e.touches[0].clientX) - lastPosX;
        vpt[5] += (e.clientY || e.touches[0].clientY) - lastPosY;
        canvas.requestRenderAll();
        lastPosX = e.clientX || e.touches[0].clientX;
        lastPosY = e.clientY || e.touches[0].clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      canvas.selection = true;
    };

    const handleWheel = (opt) => {
      if (!isPanZoomEnabled) return;

      const delta = opt.e.deltaY;
      let zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    };

    if (isPanZoomEnabled) {
      canvas.on("mouse:down", handleMouseDown);
      canvas.on("mouse:move", handleMouseMove);
      canvas.on("mouse:up", handleMouseUp);
      canvas.on("mouse:wheel", handleWheel);
    }

    return () => {
      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:move", handleMouseMove);
      canvas.off("mouse:up", handleMouseUp);
      canvas.off("mouse:wheel", handleWheel);
    };
  }, [editor?.canvas, isPanZoomEnabled]);

  //alsway enable aur adding ele then it would be disbale unitll the user uses canvas

  // Initialize Hammer.js and add pinch event listener
  useEffect(() => {
    const canvasContainer = document.querySelector(".canvas-container");
    const hammer = new Hammer(canvasContainer);
    hammer.get("pinch").set({ enable: true });

    let lastScale = 1;

    hammer.on("pinchstart pinchmove", (ev) => {
      if (!isPanZoomEnabled) return;

      const canvas = editor?.canvas;
      if (!canvas) return;

      const scale = ev.scale / lastScale;
      lastScale = ev.scale;

      const zoom = canvas.getZoom() * scale;
      if (zoom > 20) return;
      if (zoom < 0.01) return;

      canvas.zoomToPoint(new fabric.Point(ev.center.x, ev.center.y), zoom);
    });

    hammer.on("pinchend", () => {
      lastScale = 1;
    });

    return () => {
      hammer.off("pinchstart pinchmove");
      hammer.off("pinchend");
    };
  }, [editor?.canvas, isPanZoomEnabled]);

  useEffect(() => {
    const canvas = editor?.canvas;
    if (canvas) {
      canvasRef.current = canvas;
    }
  }, [editor?.canvas]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="App ">
      <div className="canvas-container" ref={canvasRef}>
        <div className="canvas-container" ref={canvasRef}>
          <FabricJSCanvas className="fabric-canvas" onReady={onReady} />
          <ActionBar imageUrl={imageUrl} className=" " />
        </div>
      </div>
    </div>
  );
};

export default CanvasBoard;
