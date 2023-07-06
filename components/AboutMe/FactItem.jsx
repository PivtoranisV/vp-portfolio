'use client';
import { Tilt } from 'react-tilt';
import Image from 'next/image';

import ZoomIn from '../Motions/ZoomIn';
import { style } from '@/app/styles/styles';

const FactItem = ({ pic, title }) => {
  return (
    <Tilt>
      <ZoomIn>
        <div className="w-[250px] lg:w-[300px] p-1 blue-yellow-gradient rounded-2xl">
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary h-[350px] lg:h-[400px] rounded-2xl py-1 px-4 flex flex-col justify-evenly items-center"
          >
            <h2 className="font-black text-white lg:text-[35px] text-[25px] text-center">
              Fun Fact
            </h2>
            <Image
              src={pic}
              width={200}
              height={200}
              alt={title}
              className="rounded-2xl"
            />
            <p className={`${style.subText} text-center`}>{title}</p>
          </div>
        </div>
      </ZoomIn>
    </Tilt>
  );
};

export default FactItem;
