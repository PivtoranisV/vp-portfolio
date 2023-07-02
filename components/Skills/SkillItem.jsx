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
          className="blue-yellow-gradient rounded-full p-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="bg-tertiary rounded-full w-[80px] h-[80px] flex justify-center items-center"
            options={{ max: 45, scale: 1, speed: 450 }}
          >
            <Image src={icon} alt={name} width={55} height={55} />
            {showName && (
              <div className="absolute bg-gray-400 text-black px-2 py-1 rounded mt-36">
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
