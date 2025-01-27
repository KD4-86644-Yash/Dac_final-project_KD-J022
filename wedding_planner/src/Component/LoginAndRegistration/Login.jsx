import React, { useState } from "react";
import "../../css/LoginAndRegistration/Login.css"; // Optional: Add your CSS file for styling
// "C:\Users\Acer\OneDrive\Desktop\cdac_p\Dac_final-project_KD-J022\wedding_planner\src\Component\LoginAndRegistration"
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn-login"
        onClick={() => window.location.href = "/user _profile"}
        >
          Login
        </button>
      </form>

      <div className="additional-options">
        <a href="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
      </div>

      <div className="create-account-buttons">
        <h4>Create New Account</h4>
        <button
          className="btn-create-account vendor"
          onClick={() => window.location.href = "/vendor"}
        >
          As Vendor
        </button>
        <button
          className="btn-create-account customer"
          onClick={() => window.location.href = "/user"}
        >
          As Customer
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
