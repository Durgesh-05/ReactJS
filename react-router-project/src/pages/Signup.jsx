import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const toggleHandler = () => {
    setShowPassword((prev) => !prev);
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    toast.success('User Registered Successfully');
    navigate('/login');
  }

  return (
    <div className="signup-container">
      <h2>Join the millions learning to</h2>
      <h2>code with Durgesh for free</h2>
      <p className="tagline">Build skills for today, tomorrow & beyond</p>
      <p className="career-proof">Education to prove your career</p>

      <form className="signup-form" onSubmit={submitHandler}>
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-input"
          value={formData.firstName}
          onChange={changeHandler}
          required
          placeholder="Enter your first name"
        />

        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          value={formData.lastName}
          onChange={changeHandler}
          required
          placeholder="Enter your last name"
        />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
        />

        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            className="form-input"
            required
            placeholder="Enter your password"
            value={formData.password}
            onChange={changeHandler}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={toggleHandler}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>

        <input type="submit" value="Sign Up" className="submit-button" />

        <div className="or-container">
          <hr className="line" />
          <span className="or-text">or</span>
          <hr className="line" />
        </div>

        <div className="google-signin">
          <p className="google-text">
            <FcGoogle className="google-icon" /> Sign up with Google
          </p>
        </div>
      </form>
    </div>
  );
};
