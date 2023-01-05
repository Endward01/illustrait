import React from "react";
import { RgbaColorPicker } from "react-colorful";

const ColorPicker = ({ color, setColor }) => {
  return (
    <RgbaColorPicker color={color} onChange={setColor} className="mx-auto" />
  );
};

export default ColorPicker;
