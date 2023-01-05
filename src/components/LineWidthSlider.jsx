import React from "react";

const LineWidthSlider = ({ lineWidth, setLineWidth }) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-1 py-4">
      <label htmlFor="line" className="text-center text-white">
        Line Width
      </label>
      <div className="flex justify-between items-center gap-2">
        <input
          name="line"
          type="range"
          value={lineWidth}
          min={0.5}
          max={10}
          step={0.5}
          onChange={(event) => {
            setLineWidth(event.target.value);
          }}
        ></input>
        <p className="w-[30px]">{lineWidth}</p>
      </div>
    </div>
  );
};

export default LineWidthSlider;
