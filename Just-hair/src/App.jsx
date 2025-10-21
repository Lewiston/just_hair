import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Book from "./components/Chida/Book";
import Success from "./components/Chida/Success";
import Error_one from "./components/Chida/Error_one";
import Error_two from "./components/Chida/Error_two";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <Success />
      <Error_one/>
      <Error_two/>
      <div style={{ padding: "2rem" }}></div>
    </>
  );
}
export default App;
