import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    toast.success('User Logged In');
    setLoggedIn(true);
    navigate('/');
  };

  const toggleHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p className="tagline">Build skills for today, tomorrow & beyond</p>
      <p className="career-proof">Education to prove your career</p>

      <form className="login-form" onSubmit={submitHandler}>
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={changeHandler}
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

        <input type="submit" value="Sign in" className="submit-button" />

        <div className="or-container">
          <hr className="line" />
          <span className="or-text">or</span>
          <hr className="line" />
        </div>

        <div className="google-signin">
          <p className="google-text">
            <FcGoogle className="google-icon" /> Sign in with Google
          </p>
        </div>
      </form>
    </div>
  );
};
