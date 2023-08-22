import React from 'react';
import '../App.css';
import { useColors } from '../components/ColorProvider.tsx';

const Title = () => {

  // create multiple color instances so that each h2 will have different colors
  const { color1, color2 } = useColors();

  return(

    <div className="page">
      <div className="title-container">
        <h2 className='sub-title' style={{ color: color1 }}>Web Developer</h2>
        <h1 className="page-title" style={{ color: color2 }}>LEUTERIO CREATIONS</h1>
      </div>
    </div>

  )
}

export default Title;
