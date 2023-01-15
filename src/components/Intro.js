import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="body">
      <div className="row1">
        <div className="left">
          <img src="/images/Profilepic.jpg" alt="" />
        </div>

        <div className="right">
          <div className="content">
            <h2>Hello, my name</h2>
            <h1>Vijay Devkate</h1>

            <a
              href=" https://drive.google.com/file/d/1y-lD_EG3EgYKzVBlk9Nt2fgLDEGmoF0E/view?usp=share_link"
              download
            >
              <button class="cv-btn">
                {" "}
                <h3>
                  <strong>Download CV</strong>{" "}
                </h3>{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
