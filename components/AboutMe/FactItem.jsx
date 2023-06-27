'use client';
import { Tilt } from 'react-tilt';
import Image from 'next/image';

import ZoomIn from '../Motions/ZoomIn';
import { style } from '@/app/styles/styles';

const FactItem = ({ pic, title }) => {
  return (
    <Tilt>
      <ZoomIn>
        <div className="w-[200px] md:w-[250px] lg:w-[300px] p-1 blue-yellow-gradient rounded-2xl">
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary h-[300px] rounded-2xl py-1 px-4 flex flex-col justify-evenly items-center"
          >
            <h2 className="font-black text-gray-400 lg:text-[45px] text-[30px] lg:leading-[98px] text-center">
              Fun Fact
            </h2>
            <Image
              src={pic}
              width={150}
              height={150}
              alt={title}
              className="rounded-full"
            />
            <p className={`${style.subText} text-center`}>{title}</p>
          </div>
        </div>
      </ZoomIn>
    </Tilt>
  );
};

export default FactItem;
