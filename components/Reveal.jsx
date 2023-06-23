'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = 'w-full' }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const textAnimation = useAnimation();
  const backgroundAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      textAnimation.start('visible');
      backgroundAnimation.start('visible');
    }
  }, [textAnimation, isInView, backgroundAnimation]);

  return (
    <div className={`relative ${width}`}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={textAnimation}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={backgroundAnimation}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-secondary z-20"
      />
    </div>
  );
};

export default Reveal;
