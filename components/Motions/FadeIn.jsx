'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const FadeIn = ({ children, index = 1 }) => {
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
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={textAnimation}
      transition={{
        duration: 1,
        type: 'spring',
        ease: 'easeOut',
        delay: index * 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
