// // 
// // src/components/MotionPlayground/MotionPlayground.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './MotionPlayground.css';

// export default function MotionPlayground() {
//   return (
//     <div className="playground">
//       <h1>Framer Motion Playground</h1>
//       <section>
//         <h2>1. Resizable Box</h2>
//         <ResizableBox />
//       </section>

//       <section>
//         <h2>2. Reorderable List</h2>
//         <ReorderableList />
//       </section>

//       <section>
//         <h2>3. Accordion with Exit Animation</h2>
//         <ToggleItem />
//       </section>

//       <section>
//         <h2>4. Staggered Children</h2>
//         <StaggeredList />
//       </section>
//     </div>
//   );
// }

// // 1. Resizable Box
// function ResizableBox() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <motion.div
//       className="box"
//       layout
//       onClick={() => setIsOpen(!isOpen)}
//       style={{
//         width: isOpen ? 300 : 150,
//         background: '#e67e22'
//       }}
//     >
//       Click to {isOpen ? 'Shrink' : 'Grow'}
//     </motion.div>
//   );
// }

// // 2. Reorderable List
// function ReorderableList() {
//   const [items, setItems] = useState([
//     { id: 'a', text: 'First' },
//     { id: 'b', text: 'Second' },
//     { id: 'c', text: 'Third' },
//   ]);

//   const shuffle = () => {
//     setItems([...items].sort(() => Math.random() - 0.5));
//   };

//   return (
//     <>
//       <button onClick={shuffle}>Shuffle</button>
//       <motion.ul className="list" layout>
//         {items.map(item => (
//           <motion.li
//             className="list-item"
//             layout
//             key={item.id}
//           >
//             {item.text}
//           </motion.li>
//         ))}
//       </motion.ul>
//     </>
//   );
// }

// // 3. Accordion with Exit Animation
// function ToggleItem() {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Content
//       </button>
//       <AnimatePresence>
//         {show && (
//           <motion.div
//             className="accordion"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <p>This content will expand/collapse with animation.</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // 4. Staggered Children
// function StaggeredList() {
//   const container = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.2 } }
//   };
//   const child = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.ul
//       className="list"
//       variants={container}
//       initial="hidden"
//       animate="visible"
//     >
//       {['Alpha', 'Beta', 'Gamma'].map((text, i) => (
//         <motion.li className="list-item" variants={child} key={i}>
//           {text}
//         </motion.li>
//       ))}
//     </motion.ul>
//   );
// }
// src/components/AnimatedCard/AnimatedCard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MotionPlayground.css";

const AnimatedCard = () => {
  const [show, setShow] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-wrapper">
      <button onClick={() => setShow(prev => !prev)}>
        {show ? "Hide" : "Show"} Card
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            layout
            onClick={() => setExpanded(prev => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Hello Motion</h3>
            {expanded && <p>This card expands smoothly using layout animations.</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCard;
