import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedReveal = ({ children, direction = "up", delay = 0.2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 50, opacity: 0 };
      case "down":
        return { y: -50, opacity: 0 };
      case "left":
        return { x: 50, opacity: 0 };
      case "right":
        return { x: -50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getDirectionOffset()}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      
    >
      {children}
    </motion.div>
  );
};

export default AnimatedReveal;