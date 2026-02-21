import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // SIGN OUT
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      // SIGN IN
      navigate("/login");
    }
  };

  return (
    <nav className="navbar-home">
      <span className="navbar-home-logo" onClick={() => navigate("/")}>Quizzme.</span>

      <ul>
        <li><NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Home</NavLink></li>
        <li><NavLink to="/quiz" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Quiz</NavLink></li>
        <li><NavLink to="/leaderboard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Leaderboard</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>About</NavLink></li>
      </ul>

      <div className="navbar-right">
        <button className="navbar-login-button" onClick={handleAuthClick}>
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;