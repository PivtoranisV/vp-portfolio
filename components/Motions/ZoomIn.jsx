'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ZoomIn = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const textAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      textAnimation.start('visible');
    }
  }, [textAnimation, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={textAnimation}
      transition={{
        duration: 1,
        type: 'tween',
        ease: 'easeOut',
        delay: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
