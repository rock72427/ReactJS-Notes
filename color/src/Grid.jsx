import React, { useState, useEffect } from "react";
import "./App.css";

const Grid = () => {
  const [colors, setColors] = useState(Array(50).fill("")); // Initialize 50 boxes
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const startColorChange = () => {
    if (intervalId) return; // Prevent multiple intervals

    const id = setInterval(() => {
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[currentIndex] = getRandomColor(); // Color the current box
        return newColors;
      });

      setCurrentIndex((prevIndex) => {
        if (prevIndex < colors.length - 1) {
          return prevIndex + 1; // Move to the next box
        } else {
          clearInterval(id); // Stop when the last box is reached
          setIntervalId(null); // Reset interval ID
          return prevIndex; // Keep it at the last box
        }
      });
    }, 1000);

    setIntervalId(id);
  };

  const stopColorChange = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetColors = () => {
    stopColorChange();
    setColors(Array(50).fill(""));
    setCurrentIndex(0); // Reset index to start over
  };

  useEffect(() => {
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [intervalId]);

  return (
    <div>
      <div className="grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={startColorChange} disabled={!!intervalId}>
          Start
        </button>
        <button onClick={stopColorChange} disabled={!intervalId}>
          Stop
        </button>
        <button onClick={resetColors}>Reset</button>
      </div>
    </div>
  );
};

export default Grid;
