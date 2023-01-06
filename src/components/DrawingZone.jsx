import React from "react";

function DrawingZone({ drawingStart, drawing, drawingEnd, canvasRef }) {
  
  return (
    <canvas
      onMouseDown={drawingStart}
      onMouseMove={drawing}
      onMouseUp={drawingEnd}
      ref={canvasRef}
      className="bg-white absolute w-full h-full right-0 top-0 -z-10"
    ></canvas>
  );
}

export default DrawingZone;
