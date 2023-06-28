'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import ZoomIn from '../Motions/ZoomIn';

const SkillItem = ({ name, icon }) => {
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <Tilt>
      <ZoomIn>
        <div
          className="blue-yellow-gradient rounded-full p-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="bg-tertiary rounded-full w-[100px] h-[100px] flex justify-center items-center"
            options={{ max: 45, scale: 1, speed: 450 }}
          >
            <Image src={icon} alt={name} width={85} height={85} />
            {showName && (
              <div className="absolute bg-gray-400 text-black px-2 py-1 rounded mt-36">
                {name}
              </div>
            )}
          </div>
        </div>
      </ZoomIn>
    </Tilt>
  );
};

export default SkillItem;
