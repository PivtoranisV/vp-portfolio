'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { greetings } from '@/constants';

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState('Hello');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setCurrentGreeting(greetings[randomIndex]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mb-44">
      <div className="flex w-full h-screen items-center">
        <video
          src="/hero-video.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="w-full object-cover h-full object-left opacity-80"
        />
        <div className="absolute flex flex-col justify-center items-center m-4">
          <div className="w-5 h-5 rounded-full bg-[#fbdf7b]" />
          <div className="w-1 sm:h-80 h-60 yellow-gradient" />
        </div>
        <div className="absolute m-8 max-w-4xl p-2">
          <h1 className="font-black text-gray-300 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px]">
            {currentGreeting}!<br /> I&apos;m
            <span className="ml-3 bg-gradient-to-r from-blue-700 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Volodymyr
            </span>
          </h1>
          <p className="font-medium lg:text-[26px] sm:text-[20px] text-[16px] lg:leading-[40px] text-gray-300">
            Web Developer Enthusiast from Ukraine.
            <br />I believe that every idea holds the potential to become a
            reality.
            <br />I am dedicated to bringing dreams to life through code and
            innovation.
          </p>
        </div>
        <div className="absolute bottom-2 w-full flex justify-center items-center">
          <a href="#projects">
            <div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-primary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
