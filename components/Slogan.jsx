'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Slogan = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const textAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      textAnimation.start('visible');
    }
  }, [textAnimation, isInView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={textAnimation}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      <h1 className="mx-auto mt-[-80px] sm:mt-[0] bg-gradient-to-r from-blue-700 via-amber-200 to-yellow-500 bg-clip-text text-transparent font-black lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] text-center w-[225px] sm:w-[280px] lg:w-[360px]">
        If you can DREAM IT, You can DO IT
      </h1>
    </motion.section>
  );
};

export default Slogan;
