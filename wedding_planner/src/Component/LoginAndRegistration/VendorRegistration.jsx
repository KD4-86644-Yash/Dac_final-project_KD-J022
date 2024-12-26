import React, { useState } from "react";

function VendorRegistration() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    gstNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor Details:", formData);
    alert("Vendor Registration Successful!");
    setFormData({ companyName: "", contactPerson: "", email: "", phone: "", address: "", gstNumber: "" });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="companyName" style={{ display: "block", marginBottom: "5px" }}>Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="contactPerson" style={{ display: "block", marginBottom: "5px" }}>Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone" style={{ display: "block", marginBottom: "5px" }}>Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="address" style={{ display: "block", marginBottom: "5px" }}>Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="gstNumber" style={{ display: "block", marginBottom: "5px" }}>GST Number:</label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default VendorRegistration;
