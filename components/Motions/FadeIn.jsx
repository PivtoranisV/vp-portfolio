'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const FadeIn = ({ children, index }) => {
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
        hidden: { opacity: 0, x: '100% ' },
        visible: { opacity: 1, x: 0 },
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
