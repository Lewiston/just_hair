import React from "react";
import "../Styles/Recover.css";

const SectionTwo = () => {
  return (
    <>
      <div className="RecoverPassword">
        <div className="page_container">
          <div className="text">
            <h2>Recover Password</h2>
          </div>

          <line />

          <label htmlFor="User Name"> User Name</label>

          <input type="text" placeholder="👤 User Name" id="User Name" />
          <br />

          <label htmlFor="Recovery Password"> Recovery Password</label>

          <input type="text" placeholder="✉️ Email" id="Email" />

          <br />
          <button className="next-page">continue </button>
          <br />

          <h2>
            i don't have an account, <a href="sign up.">sign up. </a>
          </h2>
        </div>
      </div>
    </>
  );
};
export default SectionTwo;
