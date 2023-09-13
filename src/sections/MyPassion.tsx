import React from 'react';
import { useColors } from '../components/ColorProvider.tsx';
import me from '../images/me.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const MyPassion = () => {

  // create multiple color instances so that each h2 will have different colors
//  const { color1, color2 } = useColors();


function Passion() {
  return(
    <div>
      <h5>Recent UCF graduate with a Bachelor's degree in Computer Science with the goal of working in Web Development, specifically front-end using frameworks like ReactJS. My ultimate goal is to learn all aspects of web development and be a full stack developer.
      <br />
      <br />
      When encountering a company, people instinctively turn to their website, effectively serving as the company's virtual facade. This initial encounter becomes their first impression of the organization, making it imperative to craft a website that is not only intuitive but also visually captivating. Personally, I find immense joy in unleashing my creativity through web development, for the possibilities within this realm are limitless. My aspiration is to build websites that provide a lasting and memorable experience for their visitors.</h5>
    </div>
  );
}

function About() {
  return(
    <div>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
    </div>
  );
}

function Education() {
  return(
    <div>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
    </div>
  );
}

function Hobbies() {
  return(
    <div>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</h5>
    </div>
  );
}

  return(

    <div className='columns-2'>
      <div>
        <img src={me} height={600}/>
      </div>
      <div className='container'>
        <Tabs
          defaultActiveKey="my-passion"
          id="fill-tab-example"
          className="mb-3 border-0"
          fill
        >
          <Tab eventKey="my-passion" title="My Passion" tabClassName='tab-title'>
            <Passion />
          </Tab>
          <Tab eventKey="about-me" title="About Me" tabClassName='tab-title'>
            <About />
          </Tab>
          <Tab eventKey="education" title="Education" tabClassName='tab-title'>
            <Education />
          </Tab>
          <Tab eventKey="hobbies" title="Hobbies" tabClassName='tab-title'>
            <Hobbies />
          </Tab>
        </Tabs>
      </div>
    </div>

  );
}

export default MyPassion;
