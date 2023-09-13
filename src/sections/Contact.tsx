import React from 'react';
import { useColors } from '../components/ColorProvider.tsx';

const Contact = () => {

  const { color1, color2 } = useColors();

  return(
    <div className="page">
      <h1 className="page-title" style={{ color: color1 }}>CONTACT</h1>
    </div>
  )
}

export default Contact;
