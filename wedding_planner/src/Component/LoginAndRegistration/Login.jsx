


import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import "../../css/LoginAndRegistration/Login.css"; 
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:7070/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const text = await response.text();
      console.log("Raw Response:", text);

      const data = JSON.parse(text);

      if (response.ok && data.jwt) {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("id", data.id);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);

        // ✅ Redirect based on role
        if (data.role === "ROLE_VENDAR") {
          navigate("/vendor_profile");
        } else if (data.role === "USER") {
          navigate("/user_profile");
        } else {
          navigate("/dashboard");
        }
      } else {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>

      {/* ✅ Registration Buttons */}
      <div className="registration-buttons">
        <button onClick={() => navigate("/vendor")}>Register as Vendor</button>
        <button onClick={() => navigate("/user")}>Register as User</button>
      </div>
    </div>
  );
}
