import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { toast } from 'react-toastify';

export const NavBar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/">
          <img
            src="src/assets/react.svg"
            alt="react-logo"
            className="navbar-logo"
          />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar-buttons">
          {!loggedIn && (
            <button className="navbar-button">
              <Link to="/login" className="navbar-button-link">
                Login
              </Link>
            </button>
          )}
          {!loggedIn && (
            <button className="navbar-button">
              <Link to="/signup" className="navbar-button-link">
                Signup
              </Link>
            </button>
          )}
          {loggedIn && (
            <button
              className="navbar-button"
              onClick={() => {
                setLoggedIn(false);
                toast.success('Successfully Logged Out');
                navigate('/');
              }}
            >
              <Link to="/logout" className="navbar-button-link">
                Logout
              </Link>
            </button>
          )}
          {loggedIn && (
            <button className="navbar-button">
              <Link to="/dashboard" className="navbar-button-link">
                Dashboard
              </Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
