import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-fluid">
      <div className="project-container">
        <section className="title">
          <h1>My Projects</h1>
        </section>

        <section className="service_container">
          <div className="service_box">
            <h2>Stroke Prediction using Machine Learning</h2>
            <h4>Technolgy: Python, Machine Learning</h4>
            <p>
              • Pioneered a Random Forest model with help of 12 parameters to
              predict stroke. <br />• Implemented various models and achieved
              highest accuracy with random forest of 83%.
            </p>
          </div>

          <div className="service_box">
            <h2>Image Classification</h2>
            <h4>Technolgy: Python, Tensorflow </h4>
            <p>
              • Implemented convolution neural network to classify images
              between dogs and cats. <br />
              • 3000 dog and cat images were used, 2000 of them for training
              purpose and 1000 for testing. <br />• Made use of TensorFlow
              framework and achieved accuracy of 72%.
            </p>
          </div>

          <div className="service_box">
            <h2>Personal Portfolio</h2>
            <h4>Technology: React, JavaScript, html, css</h4>
            <p>
              • Web resume build using react components, html and css. <br />•
              Helped to leverage my skills
            </p>
          </div>

          <div className="service_box">
            <h2>Website for an Ed-Tech</h2>
            <h4>Technology: Html, CSS</h4>
            <p>
              • Developed front end with HTML, CSS with content of public
              speaking for an entry level startup. <br />
              • Creating responsive design that allow user to view in any
              system. <br />• This website helped student to learn public
              speaking skill.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
