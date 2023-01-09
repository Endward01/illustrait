import React from "react";
import ColorPicker from "./ColorPicker";
import LineWidthSlider from "./LineWidthSlider";

function Navbar({
  clear,
  color,
  setColor,
  lineWidth,
  setLineWidth,
  newCanvasWidth,
  newCanvasHeight,
}) {
  return (
    <nav className=" bg-slate-600 w-[15%] h-full absolute top-0 left-0 z-10">
      <ColorPicker color={color} setColor={setColor} />
      <LineWidthSlider lineWidth={lineWidth} setLineWidth={setLineWidth} />
      <div>
        <input
          onChange={(event) => {
            newCanvasWidth(event.target.value);
          }}
          type="number"
        ></input>
        <input
          onChange={(event) => {
            newCanvasHeight(event.target.value);
          }}
          type="number"
        ></input>
      </div>
      <button onClick={clear}>Clear</button>
    </nav>
  );
}

export default Navbar;
