import React from "react";

function DrawingSection({ drawingStart, drawing, drawingEnd, canvasRef }) {
 
  return (
    <div className="">
      <div  className="">
        <canvas
          onMouseDown={drawingStart}
          onMouseMove={drawing}
          onMouseUp={drawingEnd}
          ref={canvasRef}
          className="bg-white"
        ></canvas>
      </div>
    </div>
  );
}

export default DrawingSection;
