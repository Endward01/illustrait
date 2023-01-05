import React from "react";
import ColorPicker from "./ColorPicker";
import LineWidthSlider from "./LineWidthSlider";

function Navbar({ clear, color, setColor, lineWidth,setLineWidth }) {
  return (
    <nav className=" bg-slate-600 w-[15%] h-full absolute top-0 left-0">
      <ColorPicker color={color} setColor={setColor} />
      <LineWidthSlider lineWidth={lineWidth} setLineWidth={setLineWidth}/>
      <button onClick={clear}>Clear</button>
    </nav>
  );
}

export default Navbar;
