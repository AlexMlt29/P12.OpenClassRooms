import React from "react";
import "./Presentation.css";
import "devicon/devicon.min.css";
import SkillItem from '../SkillItem/SkillItem';

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
                  <SkillItem iconClass="devicon-html5-plain" skillName="HTML 5" />
                  <SkillItem iconClass="devicon-css3-plain" skillName="CSS 3" />
                  <SkillItem iconClass="devicon-react-original" skillName="React" />
                  <SkillItem iconClass="devicon-javascript-plain" skillName="JAVASCRIPT" />
                  <SkillItem iconClass="devicon-sass-original" skillName="SASS" />
                  <SkillItem iconClass="devicon-bootstrap-plain" skillName="BOOTSTRAP" />
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
