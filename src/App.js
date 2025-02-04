import React from "react";

function App() {
  const rollNumber = "1/22/FET/BCS/426"; // Replace with your roll number
  const name = "Parinay Wadhwa"; // Replace with your name

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.text}>{name}</h1>
        <h2 style={styles.text}>Roll No: {rollNumber}</h2>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6e8efb, #a777e3)", // Gradient background
  },
  card: {
    padding: "20px 40px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    animation: "fadeIn 1.5s ease-in-out",
  },
  text: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    color: "#333",
  },
};

// Adding global styles for animations
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);

export default App;

