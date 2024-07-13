import React from "react";
import "./Presentation.css";
import "devicon/devicon.min.css";

const Presentation = () => {
  return (
    <section className="presentation">
      <div>
        <h2 className="presentation-title">PRÉSENTATION</h2>
        <p className="presentation-content">
          Je m'appelle Alexandre Millet et je suis intégrateur web junior, actuellement en fin de parcours en tant qu'intégrateur web chez OpenClassrooms. À travers ce parcours, j'ai acquis une solide base dans les technologies web modernes et développé mes compétences techniques ainsi que ma
          passion pour le développement front-end.
        </p>
        <div className="experience">
          <div className="container">
            <h2 className="experience-title">EXPÉRIENCE</h2>
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="list-inline mx-auto skill-icon">
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center skills-tile">
                        <i className="devicon-html5-plain"></i>
                        <p className="text-center">HTML 5</p>
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center skills-tile">
                        <i className="devicon-css3-plain"></i>
                        <p className="text-center">CSS 3</p>
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center skills-tile">
                        <i className="devicon-react-original"></i>
                        <p className="text-center">React</p>
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center skills-tile">
                        <i className="devicon-javascript-plain"></i>
                        <p className="text-center">JAVASCRIPT</p>
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center skills-tile">
                        <i className="devicon-sass-original"></i>
                        <p className="text-center">SASS</p>
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center skills-tile">
                        <i className="devicon-bootstrap-plain"></i>
                        <p className="text-center">BOOTSTRAP</p>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
