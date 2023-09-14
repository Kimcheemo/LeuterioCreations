import React, { useState } from 'react';
import { useColors } from '../components/ColorProvider.tsx';
import me from '../images/me.jpg';
import '../styles/Narrative.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Logo from '../components/Logo.tsx';

const MyPassion = () => {

  // create multiple color instances so that each h2 will have different colors
//  const { color1, color2 } = useColors();
const [activeTab, setActiveTab] = useState("MY PASSION");

function Passion() {
  return(
    <div>
      <p>Recent UCF graduate with a Bachelor's degree in Computer Science with the goal of working in Web Development, specifically front-end using frameworks like ReactJS. My ultimate goal is to learn all aspects of web development and be a full stack developer.
      <br />
      <br />
      When encountering a company, people instinctively turn to their website, effectively serving as the company's virtual facade. This initial encounter becomes their first impression of the organization, making it imperative to craft a website that is not only intuitive but also visually captivating. Personally, I find immense joy in unleashing my creativity through web development, for the possibilities within this realm are limitless. My aspiration is to build websites that provide a lasting and memorable experience for their visitors.</p>
    </div>
  );
}

function About() {
  return(
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

function Education() {
  return(
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

function Hobbies() {
  return(
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
    </div>
  );
}

  return(
    <div className='flex mx-2'>

      <div className='mx-5 my-24'>
        <img src={me} height={600}/>
      </div>


        <div className="vertical-line"></div>
        <div className='vertical my-auto'>
        {activeTab.split('').map((letter, index) => (
          <span key={index} className='vertical-letter'>
            {letter === " " ? '\u00A0' : letter}
          </span>
        ))}
        </div>
        <div className="vertical-line"></div>


      <div className='mx-3'>
      <div className='float-right m-12'>
        <Logo />
      </div>
      <div className='float-left max-w-4xl mx-5 my-8'>
        <Tabs
          defaultActiveKey="MY PASSION"
          id="fill-tab-example"
          className="mb-3 border-0"
          fill
          onSelect={(selectedTabs) => setActiveTab(selectedTabs)}
        >
          <Tab eventKey="MY PASSION" title="MY PASSION" tabClassName='tab-title'>
            <Passion />
          </Tab>
          <Tab eventKey="ABOUT ME" title="ABOUT ME" tabClassName='tab-title'>
            <About />
          </Tab>
          <Tab eventKey="MY SKILLS" title="SKILLS" tabClassName='tab-title'>
            <Education />
          </Tab>
          <Tab eventKey="MY HOBBIES" title="HOBBIES" tabClassName='tab-title'>
            <Hobbies />
          </Tab>
        </Tabs>
      </div>
      </div>
    </div>

  );
}

export default MyPassion;
