import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education">
      <div className="container">
      <div className="inner">
          
        <h1>Education & Experience</h1>
        </div>
        <main className="row">
          {/* Education section starts from here */}
          <section className="col">
            <header className="title">
              <h2>Education</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>Master of Science - Computer Science</h4>
                <h3>Pace Univerisity | 2022 - 2024</h3>
                <p>
                  Course Work : <br /> CS-641 Mobile Web Content & Development{" "}
                  <br /> CS-623 Database management system <br /> CS-608
                  Algorithm &Computing theory <br /> 
                  {/* CS- Internet Computing */}
                  CS-505 Intro to computer science with Java <br />{" "}
                  CS-604Computer Systems and Concept
                </p>
              </div>

              <div className="box">
                <h4>Bachelor of Engineering - Electrical Engineering</h4>
                <h3>Savitribai Phule Pune University | 2017 - 2021</h3>

                <p>
                  Course Work : <br /> Linear Algebra, Analog and Digital Electronics,
                  Electrical Machines, Power Generation Technologies, Matarial
                  Science, Numerical Methods and ComputerProgramming,Industrial
                  and Technology Management.
                </p>
              </div>

              {/* <div className="box">
              <h4>2018-2022</h4>
              <h3>BE</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                veniam rem nesciunt magnam aspernatur explicabo fugiat eaque
                laboriosam incidunt inventore molestiae odio, eligendi omnis?
              </p>
            </div>
            <div className="box">
              <h4>2018-2022</h4>
              <h3>masters</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                veniam rem nesciunt magnam aspernatur explicabo fugiat eaque
                laboriosam incidunt inventore molestiae odio, eligendi omnis?
              </p>
            </div> */}
            </div>
          </section>

          {/* Expereince section */}

          <section className="col">
            <header className="title">
              <h2>Experience</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>Buisness Developemnt Associate</h4>
                <h3>PlanetSpark | May 2021- Sep 2021 </h3>
                <p>
                  • Developed strong internal relations with account management,
                  product management, investment and operations team, and senior
                  management. <br />
                  • Established and maintained watchlist for further
                  development, with early relations established. <br />• Lead
                  UAE business development management team meeting and strategy
                  development.
                </p>
              </div>

              <div className="box">
                <h4>ML & AI Research Analyst </h4>
                <h3>Intern at Zeedup Techonologies and Services | Oct 2020- May 2021</h3>
                <p>
                  • Launched courses for training programming skills. <br />
                  • Designed and produced a 14-hour course on machine learning <br />
                  using python, beginning with the language fundamental. <br />
                  • researched various machine learning concepts and simplified them for non-programming students.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Education;
