export const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration:0.5,
        delay:0.5,
        ease: 'easeOut',
      }
    },
  };