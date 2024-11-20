import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CircularNav.css";

const CircularNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Circular layout animation for the items
  const circleVariants = {
    open: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    closed: {
      scale: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const itemVariants = {
    open: (index) => ({
      x: 100 * Math.cos((index * Math.PI) / 3),
      y: 100 * Math.sin((index * Math.PI) / 3),
      opacity: 1,
      transition: { delay: index * 0.1, type: "spring", stiffness: 300 },
    }),
    closed: {
      x: 0,
      y: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="draggable-container1"
      drag
      dragConstraints={{ left: 100, right: 900, top: 100, bottom: 500 }}
    >
      <button className="menu-toggle1" onClick={toggleMenu}>
        ☰
      </button>

      <motion.div
        className="circle-menu1"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={circleVariants}
      >
        {["", "", "", "📝", "📋", "❌"].map((icon, index) => (
          <motion.button
            key={index}
            className="menu-item1"
            custom={index}
            variants={itemVariants}
          >
            {icon}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CircularNav;
