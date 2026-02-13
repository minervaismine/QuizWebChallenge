import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome Melisa 👋</h1>
      <p className="home-text">Ini halaman Home pertama kamu dengan routing.</p>
      <button className="home-button" onClick={() => navigate("/login")}>Get Started</button>
    </div>
  );
}

export default Home;