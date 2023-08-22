import React from 'react';
import '../App.css';
import { useColors } from '../components/ColorProvider.tsx';

const Narrative = () => {

  const { color1, color2 } = useColors();

  return(
    <div className="page">
      <div className='title-container'>
        <h1 className="page-title" style={{ color: color1 }}>NARRATIVE OF ME</h1>
        <h3>"Combining creativity and diligence</h3>
        <h3>to forge extraordinary results."</h3>
        <p>Explore further.</p>
      </div>
    </div>
  )
}

export default Narrative;
