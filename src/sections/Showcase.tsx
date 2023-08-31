import React from 'react';
import '../App.css';
import { useColors } from '../components/ColorProvider.tsx';

const Showcase = () => {

  const { color1, color2 } = useColors();

  return(
    <div className="page">
      <div className='container-sm'>
        <h4 className='flex justify-start mb-0'>"Unwavering dedication,</h4>
        <h4 className='flex justify-end mt-0'>boundless creativity."</h4>
        <h1 className="page-title mb-12" style={{ color: color2 }}>SHOWCASE</h1>
        <p className='flex justify-end mt-12'>Discover more.</p>
      </div>
    </div>
  )
}

export default Showcase;
