import "./Quiz.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundWelcome from "../assets/background_welcome_quiz.png";
import downIcon from "../assets/scroll_down_icon.png";

function Quiz() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const startQuiz = async () => {
    let url = `https://opentdb.com/api.php?amount=${amount}`;

    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
  };    

  return (
    <div className="quiz-wrapper">
        {/* NAVBAR */}
        <nav className="navbar">
            <span className="navbar-logo" onClick={() => navigate("/")}>Quizzme.</span>

            <ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/quiz" className="nav-item">Quiz</Link></li>
            <li><Link to="/leaderboard" className="nav-item">Leaderboard</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            </ul>

            <div className="navbar-right">
            <button className="navbar-login-button" onClick={() => navigate("/login")}>Sign In</button>
            </div>
        </nav>

        {/* CONTENT HOME */}
        <div className="quiz-hero">
            <img src={backgroundWelcome} alt="Welcome Quiz Background" className="quiz-welcome-image"/>
    
            <div className="welcome-caption">
                <h1>Build Your Perfect Quiz</h1>
                <p>Pick your challenge and show us what you've got!</p>

                <img src={downIcon} alt="Scroll Down" className="down-icon"/>
            </div>
        </div>

        {/* QUIZ SETUP */}
        <div className="quiz-setup">
            <h1>Let's prepare your quiz first!</h1>

            <div className="quiz-setup-form">
                {/* Number of Questions */}
                <label>Number of Questions</label>
                <input type="number" value={amount} min="1" max="50" onChange={(e) => setAmount(e.target.value)}/>

                {/* Category */}
                <label>Category</label> 
                <select value={category} onChange={(e) => setCategory(e.target.value)}> 
                    <option value="">Any Category</option> 
                    <option value="9">General Knowledge</option> 
                    <option value="21">Sports</option> 
                    <option value="23">History</option> 
                    <option value="17">Science & Nature</option> 
                    <option value="20">Mythology</option> 
                    <option value="11">Film</option> 
                </select>

                {/* Difficulty */}
                <label>Difficulty</label>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                {/* Type */}
                <label>Question Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>

                <button onClick={startQuiz}>Start Quiz 🚀</button>
            </div>
        </div>
    </div>
  );
}

export default Quiz;