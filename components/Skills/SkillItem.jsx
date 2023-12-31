'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import FadeIn from '../Motions/FadeIn';

const SkillItem = ({ name, icon, index }) => {
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <Tilt>
      <FadeIn index={index}>
        <div
          className="blue-yellow-gradient p-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="bg-tertiary w-[80px] h-[80px] flex justify-center items-center relative"
            options={{ max: 45, scale: 1, speed: 450 }}
          >
            <Image src={icon} alt={name} width={55} height={55} />
            {showName && (
              <div className="absolute inset-0 bg-gray-400 text-black text-center flex items-center justify-center  w-full h-full">
                {name}
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </Tilt>
  );
};

export default SkillItem;
