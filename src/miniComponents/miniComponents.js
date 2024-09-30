import MiniPlayerWindow from "./miniPart";
import { useState,useEffect } from 'react';
import "./mini.css"

const MiniComponents = () => {
  const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);

  const openMiniPlayer = () => {
    setIsMiniPlayerVisible(true);
  };

//   useEffect(() => {
//     // Ensure the element exists before performing DOM operations
//     const miniRoot = document.getElementById('mini-root');
//     if (miniRoot) {
//       // Perform operations involving miniRoot
//     }
//   }, []); 

  const closeMiniPlayer = () => {
    setIsMiniPlayerVisible(false);
  };

  return (
    <div className="app-container" id="mini-com">
      <div className="main-content">
        <h1 >Main Content</h1>
        <p>This is your main content area.</p>
        <button onClick={openMiniPlayer}>Open Miniplayer</button>
      </div>

      {isMiniPlayerVisible && (
        <MiniPlayerWindow
          content={
            <div>
              <h4>Miniplayer Component</h4>
              <button onClick={closeMiniPlayer}>Close</button>
              <p>This is your detachable miniplayer content.</p>
            </div>
          }
        />
        
      )}
    </div>
  );
};

export default MiniComponents;
