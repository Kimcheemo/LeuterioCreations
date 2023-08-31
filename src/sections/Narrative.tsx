import React from 'react';
import '../App.css';
import { useColors } from '../components/ColorProvider.tsx';

const Narrative = () => {

  const { color1, color2 } = useColors();

  return(
    <div className="page">
      <div className='title-container container'>
        <h1 className="page-title flex justify-start" style={{ color: color1 }}>NARRATIVE OF ME</h1>
        <h3 className='flex justify-end leading-6'>"Combining creativity and diligence</h3>
        <h3 className='flex justify-end mb-5'>to forge extraordinary results."</h3>
        <p className='flex justify-end mt-10'>Explore further.</p>
      </div>
    </div>
  )
}

export default Narrative;
