import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import SignInPage from "./components/sign_in_page";
import RecoverPage from "./components/Recover_page";
import ForgetPass from "./components/Forget_Pass";
import Verification from "./components/Verification";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SignInPage />
      <RecoverPage />
      <ForgetPass />
      <Verification />
      <div style={{ padding: "2rem" }}></div>
    </>
  );
}
export default App;
