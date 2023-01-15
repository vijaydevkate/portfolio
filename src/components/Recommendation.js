import React from "react";
import "./Recommendation.css";

const Recommendation = () => {
  return (
    <div className="Recommendation-fluid">
      <div className="recommendations">
        <div className="inner">
          <h1>Recommendations</h1>
          <div className="border"></div>

          <div className="r-row">
            <div className="r-col">
              <div className="recommendation">
                <div className="name">Dr. V. M. Panchade</div>
                <h4>HOD Electrical Department-GHRIET</h4>
                <br />
                <p>
                  I have had the pleasure of having vijay in my class and have
                  been consistently impressed with his dedication, intelligence,
                  and work ethic. he can very systematically present his viwes
                  and ideas regarding particular topic. <br />
                  <a href="https://drive.google.com/file/d/117xHCaf7OqN4DldO_IP2Qjk6rRCfn-uL/view?usp=share_link">
                    Read more
                  </a>
                </p>
              </div>
            </div>

            <div className="r-col">
              <div className="recommendation">
                <div className="name">Dr. Asha Shendge </div>
                <h4>Dean Research and Development-GHRIET</h4>
                <br />
                <p>
                  I highly recommend Vijay for building products. He have
                  demonstrated strong aptitude and dedication in his work and
                  have consistently impressed me with his critical thinking and
                  analytical skills. He would be a valuable asset to any program
                  or organization. <br />
                  <a href="https://drive.google.com/file/d/1NHsSgGhEKXU10UWzCGBu68xbzzrvjDFr/view?usp=share_link">
                    Read more
                  </a>
                </p>
              </div>
            </div>

            <div className="r-col">
              <div className="recommendation">
                <div className="name">Dinesh Selvaraj</div>
                <h4>Founder of Wrexa Technologies</h4>
                <br />

                <p>
                  Vijay is an excellent resource, and a master at Machine
                  Learning and Data Science, has been a real gem to my clients
                  and contacts, company He makes sure all the deadlines meet and
                  that also with the highest standards. He is a hardworking and
                  dedicated person who will complete your project in a given
                  time frame. I would Highly recommend and endorse Vijay.”
                  <br />
                  <a href="https://www.linkedin.com/in/vijay-devkate-12069a179/">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
