// ScrollInSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./ScrollInSection.css"; // Add styles if needed

const ScrollInSection = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-section"
    >
      {children}
    </motion.div>
  );
};

export default ScrollInSection;
