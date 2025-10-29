import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
<<<<<<< HEAD
import SignInPage from "./components/sign_in_page";
import RecoverPage from "./components/Recover_page";
import ForgetPass from "./components/Forget_Pass";
import Verification from "./components/Verification";
=======
import Book from "./components/Chida/Book";
import Success from "./components/Chida/Success";
import Error_one from "./components/Chida/Error_one";
import Error_two from "./components/Chida/Error_two";

>>>>>>> refs/remotes/origin/dev
function App() {
  return (
    <>
      <Navbar />
      <Hero />
<<<<<<< HEAD
      <SignInPage />
      <RecoverPage />
      <ForgetPass />
      <Verification />
=======
      <Book />
      <Success />
      <Error_one/>
      <Error_two/>
>>>>>>> refs/remotes/origin/dev
      <div style={{ padding: "2rem" }}></div>
    </>
  );
}
export default App;
