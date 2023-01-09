import { useEffect, useRef, useState } from "react";
import "./App.css";
import DrawingSection from "./components/DrawingSection";
import Navbar from "./components/Navbar";

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrwaing, setIsDrwaing] = useState(false);
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [lineWidth, setLineWidth] = useState(1);
  const [canvasWidth, setCanvasWidth] = useState(600);
  const [canvasHeight, setCanvasHeight] = useState(600);

  const newCanvasWidth = (width) => {
    setCanvasWidth(width);
  };
  const newCanvasHeight = (height) => {
    setCanvasHeight(height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `&{canvasWidth}px`;
    canvas.style.height = `&{canvasHeight}px`;

    const context = canvas.getContext("2d");
    // context.scale(2, 2);
    context.lineCap = "round";
    contextRef.current = context;
  }, [canvasHeight, canvasWidth]);

  const clear = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const parseColor = (color) => {
    const rgba = `rgba(${color.r},${color.g},${color.b},${color.a})`;
    return rgba;
  };

  const drawingStart = ({ nativeEvent }) => {
    const x = nativeEvent;
    const y = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = parseColor(color);
    context.lineWidth = lineWidth;
    setIsDrwaing(true);
  };

  const drawingEnd = () => {
    contextRef.current.closePath();
    setIsDrwaing(false);
  };

  const drawing = ({ nativeEvent }) => {
    if (isDrwaing) {
      const x = nativeEvent.layerX;
      const y = nativeEvent.layerY;
      contextRef.current.lineTo(x, y);
      contextRef.current.stroke();
    }
  };

  return (
    <main className="flex relative h-screen">
      <Navbar
        clear={clear}
        color={color}
        setColor={setColor}
        lineWidth={lineWidth}
        setLineWidth={setLineWidth}
        newCanvasWidth={newCanvasWidth}
        newCanvasHeight={newCanvasHeight}
      />
      <DrawingSection
        drawingStart={drawingStart}
        drawing={drawing}
        drawingEnd={drawingEnd}
        canvasRef={canvasRef}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
      />
    </main>
  );
}

export default App;
