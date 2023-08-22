import React, { createContext, useContext, useState, useEffect } from 'react';
import '../App.css';

const ColorContext = createContext(); // holds the current color value

export const ColorProvider = ({ children }) => {  // wraps its children with the context
  const colorsArray = ['#FF0C00', '#004EFF', '#5800FF', '#FF00D2', '#00B2FF'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomIndex];
  }

  //const [currentColor, setCurrentColor] = useState(colorsArray[0]);
  const [color1, setColor1] = useState(colorsArray[0]);
  const [color2, setColor2] = useState(colorsArray[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor1 = getRandomColor();
      const newColor2 = getRandomColor();
      setColor1(newColor1);
      setColor2(newColor2);
    }, 800); // Change color every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ColorContext.Provider value={{ color1, color2 }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => {
  return useContext(ColorContext);
};
