import React, { useState } from "react";
import { motion } from "framer-motion";

const CodeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    codeSnippet: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ title: "", description: "", codeSnippet: "" });
  };

  return (
    <motion.div
      className="draggable-container1"
      drag
      dragConstraints={{ left: 100, right: 900, top: 0, bottom: 200 }}
    >
      <div style={{ padding: "2px", maxWidth: "800px", margin: "auto", backgroundColor: "black" }}>
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", backgroundColor: "#00aaff" }}><h3>Add Code Snippet</h3></div>
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", backgroundColor: "#00aaff" }}>

          <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <div style={{ marginBottom: "10px" }}>
              <label>
                <strong>Title:</strong>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                placeholder="Enter title"
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>
                <strong>Description:</strong>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                placeholder="Enter description"
                rows="4"
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>
                <strong>Code Snippet:</strong>
              </label>
              <textarea
                name="codeSnippet"
                value={formData.codeSnippet}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontFamily: "Courier New, monospace",
                }}
                placeholder="Enter code snippet"
                rows="6"
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>

          {submittedData && (
            <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
              <h2>Preview</h2>
              <h3>{submittedData.title}</h3>
              <p>{submittedData.description}</p>
              <pre style={{ backgroundColor: "#282c34", color: "#61dafb", padding: "12px" }}>
                <code>{submittedData.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeForm;
