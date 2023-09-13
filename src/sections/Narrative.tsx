import React from 'react';
import { useState, useEffect } from 'react';
import { useColors } from '../components/ColorProvider.tsx';
import { Link } from 'react-router-dom';

const Narrative = () => {

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
      <div className='title-container container'>
        <h1 className="page-title flex justify-start" style={{ color: color1 }}>NARRATIVE OF ME</h1>
        <div className='text-container'>
          <p className={`quote flex justify-end line line1 ${activeIndex === 0 ? 'active' : ''}`}>"Combining creativity and diligence</p>
          <p className={`quote flex justify-end line line2 ${activeIndex === 1 ? 'active' : ''}`}>to forge extraordinary results."</p>
          <Link to='/my-passion' className={`p_link flex justify-end line line3 ${activeIndex === 2 ? 'active' : ''}`}>Explore further.</Link>
        </div>
      </div>
    </div>
  )
}

export default Narrative;
