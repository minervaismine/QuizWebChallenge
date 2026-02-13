import "./Login.css";
import backgroundLogin from "../assets/background_login.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
        {/* LEFT SIDE (Gambar) */}
        <div className="login-left">
            <div className="logo-text">Quizzme.</div>
            <img src={backgroundLogin} alt="Background Login" className="background-login"/>
        </div>

        {/* RIGHT SIDE (Login Form) */}
        <div className="login-right">
            <h1 className="login-title">Ready For A Fun Challenge?</h1>
            <p className="login-subtitle">Sign in to continue your quiz adventure!</p>
            <form className="login-form">
                <div className="form-group-username">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="form-group-password">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Sign In</button>
                <p className="register-text">Don't have an account?{" "}<Link to="/register" className="register-link">Register Here!</Link></p>
            </form>
        </div>
    </div>
  );
}

export default Login;