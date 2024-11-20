import React, { useState } from "react";
import { motion } from "framer-motion";
import "./DraggableNav.css";

const DraggableNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="draggable-container"
      drag
      dragConstraints={{ left: 0, right: 300, top: 0, bottom: 600 }}
    >
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <motion.div
        className={`menu-items ${isOpen ? "open" : "closed"}`}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button className="menu-item">🏠</button>
        <button className="menu-item">📍</button>
        <button className="menu-item">⏰</button>
        <button className="menu-item">📷</button>
        <button className="menu-item">⚙️</button>
        <button className="menu-item">❌</button>
      </motion.div>
    </motion.div>
  );
};

export default DraggableNav;
