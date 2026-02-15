import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./QuizStart.css";
import backgroundNoQuestion from "../assets/background_no_questions.png";
import backIcon from "../assets/back_icon.png";
import { useMemo } from "react";
import Swal from "sweetalert2";

const QUIZ_DURATION = 30 * 60; // 30 menit

function QuizStart() {
  const location = useLocation();
  const navigate = useNavigate();

  const questions = location.state?.questions;
  // const questions = null;

  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [currentIndex, setCurrentIndex] = useState(0);

  // HANDLE BUTTON BACK
  const handleBackClick = () => {
    Swal.fire({
      icon: "warning",
      text: "Are you sure want to back to main menu?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/quiz");
      }
    });
  };

  // TIMER
  useEffect(() => {
    if (!questions) return;

    if (timeLeft <= 0) {
      navigate("/quiz/result");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate, questions]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  // 

  if (!questions) {
    return (
      <div className="no-questions-wrapper">
        <img src={backgroundNoQuestion} alt="No questions" className="no-questions-image" />
        <h1 className="no-questions">No questions loaded!!</h1>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/quiz/result");
    }
  };

  const handleAnswerClick = (answer) => {
    console.log("User chose:", answer);

    // TODO: score logic nanti di sini

    handleNext(); //Auto Next
  };

  const answers = useMemo(() => {
    return [
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ].sort(() => Math.random() - 0.5);
  }, [currentIndex]);

  return (
    <div className="quiz-start-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-quiz-start">
        <span className="navbar-quiz-start-logo">Quizzme.</span>

        <div className="progress-wrapper">
          <div className="progress-circle" style={{ "--progress": progress }}>
            <span>{progress}%</span>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="quiz-card">
        <p>Question {currentIndex + 1}</p>

        <div className="question-card">
          <h1 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        </div>

        <div className="answers">
          {answers.map((ans, index) => (
            <button key={index} onClick={() => handleAnswerClick(ans)} dangerouslySetInnerHTML={{ __html: ans }}/>
          ))}
        </div>

        <div className="bottom-menu">
          <img src={backIcon} alt="Back" className="back-icon" onClick={handleBackClick}/>

          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${((currentIndex + 1) / questions.length) * 100}%`}}/>
            </div>
            <div className="progress-text">
              {currentIndex + 1} / {questions.length}
            </div>
          </div>

          <div className="timer">{formatTime(timeLeft)}</div>        
        </div>
      </div>
    </div>
  );
}

export default QuizStart;