import React from "react";
import "../Bonisam/index.css";

const SignIn = ({ handleSignUp }) => {
  return (
    <div className="signup-container">
      <form action="">
        <div className="flex">
          <label htmlFor="Username">User Name </label>
          <input type="text" placeholder="👤 Username" />
        </div>
        <br></br>
        <div className="flex">
          <label htmlFor="password">Password </label>
          <input type="password" placeholder="Password" />
        </div>
        <br></br>
        <div class="checkbox">
          <input type="checkbox" />
          <label htmlFor="checkbox">Stay signed in </label>
          <a href="#"> Forgot your password? </a>
        </div>
        <br></br>
        <button className="account" type="button">
          Sign in
        </button>
      </form>
      <div className="divider">
        <br></br>
        <span>OR</span>
      </div>
      <br></br>
      <div className="google">
        <button className="google-btn">G Sign up with Google</button>
      </div>
      <p className="signin-link">
        I don't have an account &nbsp;
        <span style={{ color: "blue" }} onClick={handleSignUp}>
          sign up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
