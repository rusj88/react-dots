import { useState } from "react";
import "./App.css";

function App() {
  const [dots, setDots] = useState([]);
  const [removed, setRemoved] = useState([]);

  const addDot = (evt) => {
    setDots([...dots, [evt.clientX, evt.clientY]]);
  };

  const handleUndo = (evt) => {
    evt.stopPropagation();
    const dotsCopy = [...dots];
    setRemoved([...removed, ...dotsCopy.splice(-1, 1)]);
    setDots(dotsCopy);
  };

  const handleRedo = (evt) => {
    evt.stopPropagation();
    const removedCopy = [...removed];
    setDots([...dots, ...removedCopy.splice(-1, 1)]);
    setRemoved(removedCopy);
  };
  return (
    <div className="App" onClick={addDot}>
      <button onClick={handleUndo}>undo</button>
      <button onClick={handleRedo}>redo</button>
      {dots.map(([left, top], ind) => {
        return <div className="dot" style={{ top, left }} key={ind}></div>;
      })}
    </div>
  );
}

export default App;
