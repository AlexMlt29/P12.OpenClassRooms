import React from "react";
import "../Realisation/Realisation.css";

const SkillItem = ({ icon, name }) => (
  <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skills-tile">
        <i className={icon}></i>
        <p className="text-center">{name}</p>
      </div>
    </span>
  </li>
);

const ProjectCard = ({ title, imgSrc, imgAlt, link, description, skills }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="display-projet-card">
    <article className="card-projet">
      <img src={imgSrc} alt={imgAlt} />
      <div className="card-content">
        <div className="card-txt">
          <h3 className="card-title">{title}</h3>
          <ul className="list-inline mx-auto skill-icon">
            {skills.map((skill) => (
              <SkillItem key={skill.name} {...skill} />
            ))}
          </ul>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </article>
  </a>
);

export default ProjectCard;
