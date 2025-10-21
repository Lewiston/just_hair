import React from "react";
import "../Bonisam/index.css";

const SignUp = ({ handleSignIn }) => {
  return (
    <div className="signup-container">
      <form action="">
        <div className="flex">
          <label htmlFor="fullname">Full Name </label>
          <input type="text" placeholder="👤  full Name" />
        </div>
        <br></br>

        <div className="flex">
          <label htmlFor="Username">User Name </label>
          <input type="text" placeholder="👤  Username" />
        </div>
        <br></br>

        <div className="flex">
          <label htmlFor="">Email </label>
          <input type="email" placeholder="🖂 email" />
        </div>
        <br></br>

        <div className="flex">
          <label htmlFor="password">Password </label>
          <input type="password" placeholder="password" />
        </div>
        <br></br>

        <div className="flex">
          <label htmlFor="retype password">Retype Password </label>
          <input type="password" placeholder="retype Password" />
        </div>
        <br></br>

        <div class="checkbox">
          <input type="checkbox" />
          <label htmlFor="checkbox">I agree with the </label>
          <a href="#">Terms of service and Privacy Policies</a>
        </div>
        <br></br>

        <button className="account" type="button">
          Create my account
        </button>
      </form>
      <div className="divider">
        <br></br>
        <span>OR</span>
      </div>
      <br></br>

      <div className="google">
        <button type="google-btn">G Sign up with Google</button>
      </div>
      <p className="signin-link">
        I already have an account &nbsp;
        <span style={{ color: "blue" }} onClick={handleSignIn}>
          sign in
        </span>
      </p>
    </div>
  );
};

export default SignUp;
