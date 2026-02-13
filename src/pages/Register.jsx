import "./Register.css";
import backgroundRegister from "../assets/background_register.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and Confirm Password must match!");
      return;
    }

    setError("");
    alert("Register success 🎉");
  };

  return (
    <div className="register-container">
      {/* LEFT SIDE (Gambar) */}
      <div className="register-left">
        <div className="logo-text">Quizzme.</div>
        <img src={backgroundRegister} alt="Background Register" className="background-register"/>
      </div>

      {/* RIGHT SIDE (Register Form) */}
      <div className="register-right">
        <h1 className="register-title">Join The Fun!</h1>
        <p className="register-subtitle">Create your account to start playing fun quizzes!</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-grid-column">
            {/* Row 1 */}
            <div className="form-group-email">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group-username">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>

            {/* Row 2 */}
            <div className="form-group-password">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group-confirm-password">
              <label>Confirm Password</label>
              <input type="password" placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>
          
          {error && <p className="error-text">{error}</p>}

          <button type="submit">Sign Up</button>
          <p className="login-text">Already have an account?{" "}<Link to="/login" className="login-link">Login Here!</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;