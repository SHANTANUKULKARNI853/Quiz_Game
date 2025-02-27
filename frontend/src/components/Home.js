import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        style={styles.box}
      >
        <h1 style={styles.title}>Welcome to the Ultimate Quiz Game!</h1>
        <p style={styles.subtitle}>Test your knowledge with 10 exciting questions.</p>
        <motion.button 
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          style={styles.startButton}
          onClick={() => navigate("/quiz")}
        >
          Start Quiz 🚀
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
    background: "linear-gradient(135deg, #1E3C72, #2A5298)", // Dark blue gradient
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  box: {
    background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
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
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  startButton: {
    padding: "12px 20px",
    fontSize: "1.2rem",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Warm pink gradient
    color: "#000000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

export default Home;
