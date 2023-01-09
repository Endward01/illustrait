import React from "react";

function DrawingZone({
  drawingStart,
  drawing,
  drawingEnd,
  canvasRef,
  canvasWidth,
  canvasHeight,
}) {
  return (
    <canvas
      onMouseDown={drawingStart}
      onMouseMove={drawing}
      onMouseUp={drawingEnd}
      ref={canvasRef}
      className="bg-white absolute -z-10"
      style={{
        width: `&{canvasWidth}px`,
        height: `&{canvasHeight}px`,
      }}
    ></canvas>
  );
}

export default DrawingZone;
