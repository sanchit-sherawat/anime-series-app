import React from "react";
import "./CodeTile.css"; // Optional: Add CSS for styling

const CodeTile = ({ title, description, codeSnippet }) => {
  return (
    <div className="code-tile">
      <h2 className="code-tile-title">{title}</h2>
      <p className="code-tile-description">{description}</p>
      <pre className="code-tile-snippet">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default CodeTile;
