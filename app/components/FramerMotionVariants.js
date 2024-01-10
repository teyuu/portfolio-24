export const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: "100%",
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

  // Función que devuelve los variants
export const getAnimationVariants = () => ({
  variants: fadeInAnimationVariant,
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true },
});