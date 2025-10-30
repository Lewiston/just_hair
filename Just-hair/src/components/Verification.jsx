import React from "react";
import "../Styles/Verify.css";

const SectionFour = () => {
  return (
    <div className="verification">
      <div className="page_container">
        <h2>Email Verification</h2>
        <line />
        <div className="text_container">
          <p>
            A verification code has been sent to your email.Please enter it to
            complete your sign-up
          </p>
        </div>
        <br />
        <input
          type="text"
          placeholder="verification code"
          id=" verification codes"
        />
        <br />
        <button className="tap"> Verify my email </button>/
      </div>
    </div>
  );
};

export default SectionFour;
