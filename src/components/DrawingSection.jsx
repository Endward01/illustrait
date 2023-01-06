import { useState } from "react";
import DrawingZone from "./DrawingZone";

function DrawingSection({ drawingStart, drawing, drawingEnd, canvasRef }) {

  const [isZoom, setIsZoom] = useState(0.9);

  const scrollHandler = (event) => {
    let scale = isZoom;
    if (event.deltaY > 0) {
      scale += -0.02;
    } else {
      scale += 0.02;
    }

    if (scale < 0.01) {
      scale = 0.01;
    }
    setIsZoom(scale);
  };

  return (
    <div
      onWheel={scrollHandler}
      className="w-full bg-slate-500 flex justify-end overflow-hidden"
    >
      <div
        className="w-full h-full  relative"
        style={{ transform: `scale(${isZoom})` }}
      >
        <DrawingZone
          drawingStart={drawingStart}
          drawing={drawing}
          drawingEnd={drawingEnd}
          canvasRef={canvasRef}
        />
      </div>
    </div>
  );
}

export default DrawingSection;
