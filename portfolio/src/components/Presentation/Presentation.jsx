import React from "react";
import SkillItem from "../../components/SkillItem/SkillItem";
import "./Presentation.css";
import "devicon/devicon.min.css";

const skills = [
  { icon: "devicon-html5-plain", name: "HTML 5" },
  { icon: "devicon-css3-plain", name: "CSS 3" },
  { icon: "devicon-react-original", name: "React" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-sass-original", name: "SASS" },
  { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
];

const Presentation = () => {
  return (
    <section className="presentation">
      <div>
        <h2 className="presentation-title">PRÉSENTATION</h2>
        <p className="presentation-content">
          Je m'appelle Alexandre Millet et je suis intégrateur web junior,
          actuellement en fin de parcours en tant qu'intégrateur web chez
          OpenClassrooms. À travers ce parcours, j'ai acquis une solide base
          dans les technologies web modernes et développé mes compétences
          techniques ainsi que ma passion pour le développement front-end.
        </p>
        <div className="experience">
          <div className="container">
            <h2 className="experience-title">EXPÉRIENCE</h2>
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="list-inline mx-auto skill-icon">
                  {skills.map(skill => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
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
