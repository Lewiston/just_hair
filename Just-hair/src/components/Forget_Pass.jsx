import React from "react";
import "../Styles/Forget.css";

const Section = () => {
  return (
    <div className="ForgetPassword">
      <div className="page_container">
        <h2>forget Password</h2>
        <line />
        <div className="text_container">
          <p aria-placeholder="">
            your recovery password has been sent to your email .Use it to log
            back into your account .For security, please change your password
            after logging in.
          </p>
        </div>
        <button className="tap"> continue</button>/
      </div>
    </div>
  );
};

export default Section;
