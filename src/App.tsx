import './App.css';
import WheelContainer from './components/WheelContainer.tsx';
import Title from './sections/Title.tsx';
import Narrative from './sections/Narrative.tsx';
import Showcase from './sections/Showcase.tsx';
import Contact from './sections/Contact.tsx';
import { useRef, useState, useEffect } from 'react';
import { ColorProvider } from './components/ColorProvider.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyPassion from './sections/MyPassion.tsx';



const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/my-passion' element={<MyPassion />} />
      </Routes>
    </Router>
  );
};

const Layout = () => {
  const sections = [
    { title: 'LEUTERIO CREATIONS', content: <Title /> },
    { title: 'CONTACT', content: <Contact /> },
    { title: 'SHOWCASE', content: <Showcase /> },
    { title: 'NARRATIVE', content: <Narrative /> }
  ];

  return(
    <ColorProvider>
      <div>
        <WheelContainer sections={sections} />
      </div>
    </ColorProvider>
  );
};

export default App;
