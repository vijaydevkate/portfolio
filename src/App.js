
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Recommendation from "./components/Recommendation";
// import Signup from './components/Signup'


function App() {
  return (
    <>
  
      <Nav/>

      <Intro/>
      {/* <hr style={{width: "100%", margin: "10px 0"}} /> */}
      <About/>
      <Education/>
      <Project/>
      <Recommendation/>

    </>

   
  );
}

export default App;
