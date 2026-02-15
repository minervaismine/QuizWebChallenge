import "./Quiz.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundWelcome from "../assets/background_welcome_quiz.png";
import downIcon from "../assets/scroll_down_icon.png";
import Swal from "sweetalert2";

function Quiz() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const startQuiz = async (e) => {
    e.preventDefault(); // penting karena pakai <form>

    let url = `https://opentdb.com/api.php?amount=${amount}`;

    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "No Questions Found",
            text: "Please change your filters.",
            confirmButtonText: "OK",
            customClass: {
                title: "swal-title",
                content: "swal-text",
                confirmButton: "swal-button"
            },
        });
        return; // stop function, jangan lanjut ke navigate
    }

    navigate("/quiz/start", { state: { questions: data.results } });
  };    

  return (
    <div className="quiz-wrapper">
        {/* NAVBAR */}
        <nav className="navbar-quiz">
            <span className="navbar-quiz-logo" onClick={() => navigate("/")}>Quizzme.</span>

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

        {/* CONTENT */}
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

            <form className="quiz-setup-form" onSubmit={startQuiz}>
                <div className="setup-grid-column">
                    {/* Row 1 */}
                    {/* Number of Questions */}
                    <div className="form-group-amount">
                        <label>Number of Questions</label>
                        <input type="number" value={amount} min="1" max="50" onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    
                    <div className="form-group-category">
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
                    </div>
                    
                    {/* Row 2 */}
                    <div className="form-group-difficulty">
                        {/* Difficulty */}
                        <label>Difficulty</label>
                        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value="">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div className="form-group-type">
                        {/* Type */}
                        <label>Question Type</label>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Any Type</option>
                            <option value="multiple">Multiple Choice</option>
                            <option value="boolean">True / False</option>
                        </select>
                    </div>
                </div>

                <button type="submit">Start Quiz</button>
            </form>
        </div>
    </div>
  );
}

export default Quiz;