import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const finalScore = location.state?.finalScore || 0;

  return (
    <div style={styles.container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        style={styles.box}
      >
        <h1 style={styles.title}>Quiz Completed! 🎉</h1>
        <h2 style={styles.score}>Your Score: {finalScore} / 10</h2>
        
        <motion.button 
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
          onClick={() => navigate("/")}
        >
          Play Again 🔄
        </motion.button>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #2E3192, #1BFFFF)", // Blue-green gradient
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  box: {
    background: "rgba(255, 255, 255, 0.2)", // Glass effect
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    width: "50%",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ffdd57",
  },
  score: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#fff",
  },
  button: {
    padding: "12px 20px",
    fontSize: "1.2rem",
    background: "linear-gradient(135deg, #36D1DC, #5B86E5)", // Cool blue gradient
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

export default Result;
