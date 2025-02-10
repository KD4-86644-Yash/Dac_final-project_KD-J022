
// export default VendorRegistration;
import React, { useState } from "react";
import navigate from "../../Component/NavBar.jsx";

export default function VendorRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "ROLE_VENDAR", // Default to Vendor role
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const response = await fetch("http://localhost:7070/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Signup Response:", data);
      

      if (response.ok) {
        setMessage("Vendor Registration Successful!");
        alert("Vendor Registered Successfully!");
        
        navigate("/login");

      } else {
        setMessage(data.message || "Registration Failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage("Error connecting to the server.");
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "ROLE_VENDAR",
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        {/* Last Name */}
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        {/* Email */}
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        {/* Password */}
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

       
        {/* Role Selection (Hidden, since users should always be USER) */}
        <input type="hidden" name="role" value="ROLE_VENDAR" />


        {/* Submit Button */}
        <button type="submit">Register</button>

        {/* Message */}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
