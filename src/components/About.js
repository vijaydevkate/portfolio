import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="container-fluid">
      <div className="about-container">
        <h1>ABOUT ME</h1>
        <p>
        "I am passionate about using technology to solve problems and make a positive impact on the world. My interests include machine learning, front end web development I have experience working on projects using technology such as react, javascript. I am always eager to learn new skills and tackle new challenges. In my free time, I enjoy seeing people. Thank you for visiting my portfolio and I look forward to connecting with you."
        </p>
      </div>

      <div className="container-box">
        <div className="box"> <strong>Name:</strong> Vijay Devkate</div>
        <div className="box"><strong>Degree:</strong> MS-Computer Science</div>
        <div className="box"> <a href="https://github.com/vijaydevkate"> <strong>GitHub</strong> </a></div>
        <div className="box"><strong>Email:</strong> vijaycdevkate@gmail.com</div>
        {/* <div className="box">insta</div> */}
        <div className="box"> <a href="https://www.linkedin.com/in/vijay-devkate-12069a179/"> <strong>Linkedin</strong> </a></div>
     
      </div>
    </section>
  );
};

export default About;
