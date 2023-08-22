import React from 'react';
import '../App.css';
import { useColors } from '../components/ColorProvider.tsx';

const Showcase = () => {

  const { color1, color2 } = useColors();

  return(
    <div className="page">
      <p>"Unwavering dedication,</p>
      <p>boundless creativity."</p>
      <h1 className="page-title" style={{ color: color2 }}>SHOWCASE</h1>
      <p>Discover more.</p>
    </div>
  )
}

export default Showcase;
