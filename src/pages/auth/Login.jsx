import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import "./login.css";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axiosInstance.post("auth/login", { email, password });

            const { access_token, user } = res.data;

            console.log(res, access_token)

            // Save token
            localStorage.setItem("access_token", access_token);

            // Redirect based on role
            if (user.role === "admin") {
                navigate("/"); // Admin dashboard
            } else if (user.role === "provider") {
                navigate("/provider/dashboard"); // Provider dashboard
            } else {
                // Optional: normal user dashboard
                navigate("/user/dashboard");
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError(err.response?.data?.message || "Login failed");
        }
    };


    return (
        <div className="login-page">
            <div className="logo">
                <svg width={30} height={30} viewBox="0 0 492.481 492.481">
                    <polygon
                        fill="#0077FF"
                        points="25.687,297.141 135.735,0 271.455,0 161.398,297.141"
                    />
                </svg>
                <h4 className="text-primary m-0">Logo</h4>
            </div>

            <div className="login-card shadow">
                <h2 className="text-center text-white mb-3">Login</h2>
                <p className="text-center mb-4">Welcome Back!</p>

                <form onSubmit={handleLogin}>
                    <div className="input-box mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-box mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button className="login-btn mb-4" type="submit">
                        Login
                    </button>
                </form>

                <p className="text-center text-secondary">
                    Don't Have an account?
                    <a href="#" className="text-info">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
