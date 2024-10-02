import React from 'react';
import "./Signup.css";
import logoimg from "../../images/logo.png";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup-container'>
      <form className='signup-form'>
        <img src={logoimg} alt="logo" />
        <h2 style={{ textAlign: "center" }}>Create your account</h2>

        <label htmlFor="username">Username: 
          <input type="text" id="username" placeholder="Enter your username" required />
        </label>

        <label htmlFor="email">Email: 
          <input type="email" id="email" placeholder="Enter your email" required />
        </label>

        <label htmlFor="phone">Phone: 
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </label>

        <label htmlFor="password">Password: 
          <input type="password" id="password" placeholder="Enter your password" required />
        </label>

        <label htmlFor="isAuthor">Are you an author?</label>
        <div className="radio-buttons">
          <label>
            <input type="radio" name="isAuthor" value="yes" required /> Yes
          </label>
          <label>
            <input type="radio" name="isAuthor" value="no" /> No
          </label>
        </div>

        <div className="signup-butt"><button type="submit">Signup</button></div>

        <div className="login-butt"><Link to="/login">Already have an account? Login</Link></div>
        <div className="back-butt"><Link to="/">Go back to home</Link></div>
      </form>
    </div>
  );
}

export default Signup;
