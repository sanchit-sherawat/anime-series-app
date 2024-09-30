import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const MiniPlayerWindow = ({ content }) => {
  const externalWindow = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    // Create a new window when the component mounts
    externalWindow.current = window.open(
      "",
      "",
      "width=300,height=300,left=500,top=200"
    );

    if (!externalWindow.current) {
      console.error("Failed to open a new window.");
      return;
    }

    // Create a new div element and attach it to the new window's body
    const newDiv = externalWindow.current.document.createElement("div");
    externalWindow.current.document.body.appendChild(newDiv);
    setContainer(newDiv);

    // Clean up the window when the component unmounts
    return () => {
      if (externalWindow.current) {
        externalWindow.current.close();
      }
    };
  }, []);

  return container ? (
    // Render the content into the new window using React portal
    ReactDOM.createPortal(content, container)
  ) : null;
};

export default MiniPlayerWindow;