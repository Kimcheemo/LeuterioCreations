import './App.css';
import WheelContainer from './components/WheelContainer.tsx';
import Title from './sections/Title.tsx';
import Narrative from './sections/Narrative.tsx';
import Showcase from './sections/Showcase.tsx';
import Contact from './sections/Contact.tsx';
import { useRef } from 'react';


// const pages: ReactNode[] = [
//   <div className="page">
//     <p>Web Developer</p>
//     <h1 className="page-title">LEUTERIO CREATIONS</h1>
//   </div>,
//   <div className="page">
//     <h1 className="page-title">CONTACT</h1>
//   </div>,
//   <div className="page">
//     <h1 className="page-title">SHOWCASE</h1>
//   </div>,
//   <div className="page">
//     <h1 className="page-title">NARRATIVE OF ME</h1>
//   </div>
// ];

const sections = [
  { title: 'LEUTERIO CREATIONS', content: <Title /> },
  { title: 'CONTACT', content: <Contact /> },
  { title: 'SHOWCASE', content: <Showcase /> },
  { title: 'NARRATIVE', content: <Narrative /> }
];

const App: React.FC = () => {

  return (
    <div>
      <WheelContainer sections={sections} />
    </div>
  );
};

export default App;
