import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import backgroundHero from "../assets/background_welcome_home.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
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
      <div className="hero">
        <img src={backgroundHero} alt="Hero Background" className="hero-image"/>

        <div className="hero-caption">
          <h1>Ready to challenge your brain?</h1>
          <p>Play fun quizzes and see how high you can score!</p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/quiz")}>Try A Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;