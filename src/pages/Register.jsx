import "./Register.css";
import backgroundRegister from "../assets/background_register.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    setError({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    if (!email) {
      setError(prev => ({ ...prev, email: "*Please enter your email!" }));
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError(prev => ({ ...prev, email: "*Please enter a valid email!" }));
        hasError = true;
      }
    }

    if (!username) {
      setError(prev => ({ ...prev, username: "*Please enter your username" }));
      hasError = true;
    }

    if (!password) {
      setError(prev => ({ ...prev, password: "*Please enter your password" }));
      hasError = true;
    }

    if (!confirmPassword) {
      setError(prev => ({ ...prev, confirmPassword: "*Please confirm your password" }));
      hasError = true;
    }

    if (password && confirmPassword && password !== confirmPassword) {
      setError(prev => ({ ...prev, password: "*Password is not match!!" }));
      setPassword("");
      setConfirmPassword("");
      hasError = true;
    }

    if (hasError) return;

    const existingUserData = JSON.parse(localStorage.getItem("userRegisterData"));
    if (existingUserData && existingUserData.email === email) {
      Swal.fire({
        title: "Looks like you already have an account!",
        text: "Head over to Sign In to continue.",
        confirmButtonText: "Sign In",
        customClass: {
          title: "swal-title",
          content: "swal-text",
          confirmButton: "swal-button"
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    // Simpan ke localStorage
    const userData = {email, username, password};
    localStorage.setItem("userRegisterData", JSON.stringify(userData));

    Swal.fire({
      title: "Register Success!!",
      confirmButtonText: "Sign In",
      customClass: {
        title: "swal-title",
        content: "swal-text",
        confirmButton: "swal-button"
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });

    // Reset form setelah register
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
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
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {error.email && <p className="error-text">{error.email}</p>}
            </div>
            <div className="form-group-username">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              {error.username && <p className="error-text">{error.username}</p>}
            </div>

            {/* Row 2 */}
            <div className="form-group-password">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {error.password && <p className="error-text">{error.password}</p>}
            </div>
            <div className="form-group-confirm-password">
              <label>Confirm Password</label>
              <input type="password" placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              {error.confirmPassword && <p className="error-text">{error.confirmPassword}</p>}
            </div>
          </div>

          <button type="submit">Sign Up</button>
          <p className="login-text">Already have an account?{" "}<Link to="/login" className="login-link">Login Here!</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;