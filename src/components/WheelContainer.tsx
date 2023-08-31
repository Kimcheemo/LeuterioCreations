import React, { useState, useEffect, useRef } from 'react';
import '../styles/WheelContainer.css';

interface WheelContainerProps {
  sections: Section[];
}

const WheelContainer: React.FC<WheelContainerProps> = ({ sections }) => {
  const [angle, setAngle] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let scrollStart = 0;
  let velocity = 0;
  const friction = .99;
  const minVelocity = 0.01; //0.01
  //const decayFactor = 0.95;
  const scrollSensitivity = 0.0003;

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const scrollAmount = event.deltaY;


    velocity += scrollAmount * 0.003;  //.001
    cancelAnimationFrame(animateScroll);
    animateScroll();
  };

  const animateScroll = () => {

    velocity *= friction;
    //velocity *= decayFactor;
    scrollStart += velocity;

    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `rotate(${angle + scrollStart}deg) translateY(-50%)`;
    }

    if (Math.abs(velocity) > minVelocity) {
      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [angle]);

  return (
    <div className="wheel-container" ref={scrollContainerRef}>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            transform: `rotate(${angle + scrollStart + index * (360 / sections.length)}deg) translateY(-50%)`,
          }}
        >
          {section.content}
        </div>
      ))}
    </div>
  );
};

export default WheelContainer;
