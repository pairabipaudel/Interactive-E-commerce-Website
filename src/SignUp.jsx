import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="full_signup_container">
      <div className="signup_container">

        <button
          type="button"
          className="back_button"
          onClick={() => navigate('/')}
        >
          ← Back
        </button>

        

        <p className="title_signup">Sign Up</p>

        <form>
          <div className="input_group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              placeholder='Enter your username'
              type="text"
              required
            />
          </div>

          <div className="input_group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='Enter your email'
              required
            />
          </div>

          <div className="input_group">
            <label htmlFor="password">Password:</label>
            <input
              id="password" 
              placeholder='Enter your password'
              name="password"
              type="password"
              required
            />
          </div>

          <div className="input_group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              name="confirm_password"
              placeholder='Enter your password again'
              type="password"
              required/>
          </div>

          <button type="submit" className="enter_signup">
            Sign Up
          </button>
        </form>

        <div className="change_to_login_container">
          <p>If you already have an account?</p>
          <button onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
