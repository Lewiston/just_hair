import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./index.css";

function Bonisam() {
  const [tab, setTab] = useState("signup");

  function handleSignUp() {
    setTab("signup");
  }
  function handleSignIn() {
    setTab("signin");
  }
  return (
    <div className="main-container">
      <div className="auth-container">
        <div className="tabs">
          <h2
            style={
              tab == "signup"
                ? {
                    borderBottom: "5px solid blue",
                    padding: ".5em",
                    cursor: "pointer",
                  }
                : {
                    borderBottom: "5px solid gray",
                    padding: ".5em",
                    cursor: "pointer",
                  }
            }
            onClick={handleSignUp}
          >
            Sign up
          </h2>
          <h2
            style={
              tab == "signin"
                ? {
                    borderBottom: "5px solid blue",
                    padding: ".5em",
                    cursor: "pointer",
                  }
                : {
                    borderBottom: "5px solid gray",
                    padding: ".5em",
                    cursor: "pointer",
                  }
            }
            onClick={handleSignIn}
          >
            Sign in
          </h2>
        </div>
        {tab === "signup" ? (
          <SignUp handleSignIn={handleSignIn} />
        ) : (
          <SignIn handleSignUp={handleSignUp} />
        )}
      </div>
    </div>
  );
}

export default Bonisam;
