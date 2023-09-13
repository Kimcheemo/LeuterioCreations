import React from 'react';
import { useState, useEffect } from 'react';
import { useColors } from '../components/ColorProvider.tsx';
import { Link } from 'react-router-dom';

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
      <div>
        <p className={`quote2 flex justify-start mb-0 line line1 ${activeIndex === 0 ? 'active' : ''}`}>"Unwavering dedication,</p>
        <p className={`quote2 flex justify-end mt-0 line line2 ${activeIndex === 1 ? 'active' : ''}`}>boundless creativity."</p>
        <h1 className="page-title mb-5" style={{ color: color2 }}>SHOWCASE</h1>
        <Link to='/my-passion' className={`p_link2 flex justify-end line line3 ${activeIndex === 2 ? 'active' : ''}`}>Discover more.</Link>
      </div>
    </div>
  )
}

export default Showcase;
