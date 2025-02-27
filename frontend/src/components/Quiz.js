import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import he from "he"; // Decode special characters
import { motion } from "framer-motion";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/questions")
      .then((response) => {
        const decodedQuestions = response.data.results.map((q) => ({
          ...q,
          question: he.decode(q.question), // Decode special characters
          correct_answer: he.decode(q.correct_answer),
          incorrect_answers: q.incorrect_answers.map((ans) => he.decode(ans)),
        }));
        setQuestions(decodedQuestions);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
      setPopupMessage(`✅ Correct! Answer: ${correctAnswer}`);
    } else {
      setPopupMessage(`❌ Wrong! Correct Answer: ${correctAnswer}`);
    }
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/result", { state: { finalScore: score + (selectedAnswer === correctAnswer ? 1 : 0) } });
      }
    }, 1500);
  };

  return (
    <div style={styles.container}>
      {questions.length > 0 ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.box}
        >
          <h2 style={styles.questionNumber}>Question {currentQuestion + 1} / 10</h2>
          <h3 style={styles.question}>{questions[currentQuestion].question}</h3>
          <div style={styles.options}>
            {[...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer]
              .sort(() => Math.random() - 0.5) // Shuffle options
              .map((answer, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  style={styles.optionButton}
                  onClick={() => handleAnswer(answer)}
                >
                  {answer}
                </motion.button>
              ))}
          </div>
        </motion.div>
      ) : (
        <h2 style={styles.loading}>Loading Questions...</h2>
      )}
      {showPopup && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.popup}>{popupMessage}</motion.div>}
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1E3C72, #2A5298)", // Dark blue to soft blue
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    padding: "20px",
  },
  box: {
    background: "rgba(255, 255, 255, 0.2)", // Transparent white for glass effect
    backdropFilter: "blur(10px)", // Glassmorphism effect
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    width: "60%",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  questionNumber: {
    fontSize: "1.5rem",
    color: "#ffdd57",
    marginBottom: "10px",
  },
  question: {
    fontSize: "1.2rem",
    margin: "20px 0",
    color: "#fff",
  },
  options: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  optionButton: {
    padding: "12px",
    fontSize: "1rem",
    background: "linear-gradient(135deg, #FDC830, #F37335)", // Orange gradient
    color: "#000000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  loading: {
    fontSize: "2rem",
    color: "#ddd",
  },
  popup: {
    position: "absolute",
    top: "10%",
    background: "linear-gradient(135deg, #ff758c, #ff7eb3)", // Bright pink popup
    padding: "12px 20px",
    borderRadius: "6px",
    fontSize: "1.2rem",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default Quiz;
