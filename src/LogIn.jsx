import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

import google from './icon/google.png';
import facebook from './icon/facebook.png';

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <div className="full_login_container">
      <div className="login_container">

        <button
          type="button"
          className="back_button"
          onClick={() => navigate('/')}
        >
          ← Back
        </button>

        <p className="title_login">Log In</p>

        <form>
          <div className="input_group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input_group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="enter_login">
            Log In
          </button>
        </form>

        <div className="alternative_img">
          <p className="alternative">Log in with:</p>
          <img src={google} alt="Google login" />
          <img src={facebook} alt="Facebook login" />
        </div>

        <div className="change_to_signup_container">
          <p>If you don't have an account?</p>
          <button onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
