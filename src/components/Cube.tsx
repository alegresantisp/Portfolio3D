// Cube.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Cube.css';
import Home from './Faces/Home/Home';
import About from './Faces/About/About';
import Social from './Faces/Social/Social';
import Projects from './Faces/Projects/Projects';

const faces = [
  { component: <Home />, title: "Home" },
  { component: <About />, title: "About" },
  { component: <Projects />, title: "Projects" },
  { component: <Social />, title: "Social" },
];

const Cube = () => {
  const [currentFace, setCurrentFace] = useState(0);

  const rotateCube = (direction: 'left' | 'right') => {
    setCurrentFace((prev) => {
      if (direction === 'left') return (prev + 1) % faces.length;
      return (prev - 1 + faces.length) % faces.length;
    });
  };

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      rotateCube('left');
    } else {
      rotateCube('right');
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    rotateCube(direction);
  };

  const cubeRotation = {
    rotateY: currentFace * -90,
  };

  return (
    <div
      className="scene"
      onWheel={handleScroll}
    >
      <motion.div
        className="cube"
        animate={cubeRotation}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => {
          if (info.offset.x < -50) handleSwipe('left');
          else if (info.offset.x > 50) handleSwipe('right');
        }}
      >
        {faces.map((face, index) => (
          <div 
            key={index} 
            className={`cube-face face-${index} ${currentFace === index ? 'face-active' : ''}`}
          >
            {face.component}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cube;
