import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Bonisam from "./components/Bonisam";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bonisam />
    
      <div style={{ padding: "2rem" }}></div>
    </>
  );
}
export default App;
