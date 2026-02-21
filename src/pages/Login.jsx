import "./Login.css";
import backgroundLogin from "../assets/background_login.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        setError({ 
            username: "", 
            password: "" 
        });

        if (!username) {
            setError(prev => ({ ...prev, username: "*Please enter your username" }));
            hasError = true;
        }

        if (!password) {
            setError(prev => ({ ...prev, password: "*Please enter your password" }));
            hasError = true;
        }

        if (hasError) return;

        // Ambil data user dari localStorage
        const userData = JSON.parse(localStorage.getItem("userRegisterData"));

        if (!userData) {
            Swal.fire({
                title: "Oops! No account found",
                text: "Let's create one first!",
                confirmButtonText: "Sign Up",
                customClass: {
                    title: "swal-title",
                    content: "swal-text",
                    confirmButton: "swal-button"
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/register");
                }
            });
            return;
        }

        // Cek login
        if (username === userData.username && password === userData.password) {

            localStorage.setItem("isLoggedIn", "true");

            Swal.fire({
                icon: "success",
                title: "Login Successful!!",
                confirmButtonText: "Continue",
                customClass: {
                    title: "swal-title",
                    content: "swal-text",
                    confirmButton: "swal-button"
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    // Reset hanya setelah login sukses
                    setUsername("");
                    setPassword("");
                    navigate("/");
                }
            });
            return;
        } else {
            // Login gagal
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Username or password is incorrect!",
                confirmButtonText: "OK",
                customClass: {
                    title: "swal-title",
                    content: "swal-text",
                    confirmButton: "swal-button"
                },
            });
            return;
        }
    };


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
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group-username">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {error.username && <p className="error-text">{error.username}</p>}
                </div>
                <div className="form-group-password">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error.password && <p className="error-text">{error.password}</p>}
                </div>
                <button type="submit">Sign In</button>
                <p className="register-text">Don't have an account?{" "}<Link to="/register" className="register-link">Register Here!</Link></p>
            </form>
        </div>
    </div>
  );
}

export default Login;