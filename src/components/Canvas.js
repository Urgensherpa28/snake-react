import React, { useRef, useEffect } from "react";
import Food from "./Food";
import "../style.css";

function Canvas(props) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = 600;
    canvas.width = 600;
    const ctx = canvas.getContext("2d");
    const scale = 20;
    const rows = canvas.height / scale;
    const columns = canvas.width / scale;
  }, []);

  //   console.log(canvasRef);
  return (
    <div>
      <div className="welcome">
        <h1>Welcome to Sssnake</h1>
      </div>

      <canvas id="canvas" ref={canvasRef} {...props} />
      <Food canvas={canvasRef} />
    </div>
  );
}

export default Canvas;
