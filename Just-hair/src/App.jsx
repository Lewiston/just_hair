import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import SignInPage from "./components/sign_in_page";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SignInPage />
      <div style={{ padding: "2rem" }}></div>
    </>
  );
}
export default App;
