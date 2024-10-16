import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Cube.css';
import Home from './Faces/Home/Home';
import About from './Faces/About/About';
import Social from './Faces/Social/Social';
import Projects from './Faces/Projects/Projects';

const faces = [
<Home />,
<Social />,
<Projects />,
<About />,];

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

  const cubeRotation: { [key: number]: { rotateY: number } } = {
    0: { rotateY: 0 },
    1: { rotateY: -90 },
    2: { rotateY: -180 },
    3: { rotateY: -270 },
  };

  return (
    <motion.div
      className="scene"
      onWheel={handleScroll}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x < 0) handleSwipe('left');
        else handleSwipe('right');
      }}
    >
      <motion.div
        className="cube"
        animate={cubeRotation[currentFace as keyof typeof cubeRotation]}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {faces.map((face, index) => (
          <div key={index} className={`cube-face face-${index}`}>
            {face}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Cube;