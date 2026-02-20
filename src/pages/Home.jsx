import "./Home.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import backgroundHero from "../assets/background_welcome_home.png";
import featuresIcon1 from "../assets/features_icon1.png";
import featuresIcon2 from "../assets/features_icon2.png";
import featuresIcon3 from "../assets/features_icon3.png";
import featuresIcon4 from "../assets/features_icon4.png";
import howToPlayBg from "../assets/background_how_to_play.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      {/* HERO */}
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

      {/* FEATURES HIGHLIGHT */}
      <div className="features-highlight">
        <div className="feature-box">
          <div className="feature-header">
            <img src={featuresIcon1} alt="icon" className="feature-icon" />
            <h3>One Question At A Time</h3>
          </div>
          <p>Stay focused and enjoy every challenge! Each page shows one question to keep the experience fun and distraction-free.</p>
        </div>

        <div className="feature-box">
          <div className="feature-header">
            <img src={featuresIcon2} alt="icon" className="feature-icon" />
            <h3>Beat The Timer!</h3>
          </div>
          <p>Race against the clock and test how fast you can think. The countdown adds extra excitement to every quiz!</p>
        </div>

        <div className="feature-box">
          <div className="feature-header">
            <img src={featuresIcon3} alt="icon" className="feature-icon" />
            <h3>Pick Up Where You Left Off</h3>
          </div>
          <p>Accidentally closed the browser? No worries! Continue your unfinished quiz right where you left off.</p>
        </div>

        <div className="feature-box">
          <div className="feature-header">
            <img src={featuresIcon4} alt="icon" className="feature-icon" />
            <h3>Celebrate Your Score!</h3>
          </div>
          <p>See your score instantly! Find out how many answers you got right and challenge yourself to do better next time.</p>
        </div>
      </div>

      {/* HOW TO PLAY */}
      <div className="how-to-play">
        <img src={howToPlayBg} alt="How To Play Background" className="how-bg" />

        <div className="how-overlay">
          <h2>Ready, Set, Quiz!</h2>
          <p>Follow these simple steps to start playing and beat the challenge!</p>
          <div className="how-steps-number">
            <div className="step-item">
              <div className="steps-number-box">1</div>
              <h2>Get Started</h2>
              <p>Create your account or sign in to start your quiz adventure.</p>
            </div>

            <div className="step-item">
              <div className="steps-number-box">2</div>
              <h2>Start the Quiz</h2>
              <p>Click the "Start Quiz" button and get ready for the challenge!</p>
            </div>

            <div className="step-item">
              <div className="steps-number-box">3</div>
              <h2>Focus & Answer</h2>
              <p>Focus on each question and choose the best answer before moving to the next one.</p>
            </div>

            <div className="step-item">
              <div className="steps-number-box">4</div>
              <h2>Think Fast!</h2>
              <p>Keep an eye on the countdown! When time runs out, the quiz will end automatically.</p>
            </div>

            <div className="step-item">
              <div className="steps-number-box">5</div>
              <h2>See The Results</h2>
              <p>Check how many answers you got right and challenge yourself to score even higher next time!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;