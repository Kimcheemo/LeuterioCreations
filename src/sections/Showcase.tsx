import React from 'react';
import { useState, useEffect } from 'react';
import { useColors } from '../components/ColorProvider.tsx';

const Showcase = () => {

  const { color1, color2 } = useColors();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the "yellow" class on the current active line
      document.querySelector(`.line${activeIndex + 1}`).classList.toggle('active');

      // Move to the next line and reset if it exceeds the total number of lines
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1000); // Change line color every second

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return(
    <div className="page">
      <div className='container-sm'>
        <h4 className={`flex justify-start mb-0 line line1 ${activeIndex === 0 ? 'active' : ''}`}>"Unwavering dedication,</h4>
        <h4 className={`flex justify-end mt-0 line line2 ${activeIndex === 1 ? 'active' : ''}`}>boundless creativity."</h4>
        <h1 className="page-title mb-12" style={{ color: color2 }}>SHOWCASE</h1>
        <p className={`flex justify-end line line3 ${activeIndex === 2 ? 'active' : ''}`} style={{marginTop: "65px", paddingLeft: "490px"}}>Discover more.</p>
      </div>
    </div>
  )
}

export default Showcase;
