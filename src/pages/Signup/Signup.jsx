import React, { useState } from "react";
import "./Signup.css";
import logoimg from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = formData;

    if (!name || !email || !phone || !password) {
      setErrorMessage("Please fill in all fields.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least 1 uppercase letter, 1 digit, 1 special character, and be at least 8 characters long."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await ApiService.registerUser({
        name,
        email,
        phone,
        password,
      });

      if (response.statusCode === 200) {
        setFormData({ name: "", email: "", phone: "", password: "" });
        setSuccessMessage("User registered successfully");
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <img src={logoimg} alt="Logo" />
        <h2>Create your account</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {passwordError && <p className="error-message">{passwordError}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="name">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </label>
        </div>
        <div className="email">
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </label>
        </div>
        <div className="phone">
        <label htmlFor="phone">
          Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </label>
        </div>
        <div className="password">
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
          <small>
            Password must contain at least 1 uppercase letter, 1 digit, 1 special
            character, and be at least 8 characters long.
          </small>
        </label>
        </div>
        <div className="signup-butt">
          <button type="submit">Sign Up</button>
        </div>
        <div className="login-butt">
          <Link to="/login">Already have an account? Login</Link>
        </div>
        <div className="back-butt">
          <Link to="/">Go back to home</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
