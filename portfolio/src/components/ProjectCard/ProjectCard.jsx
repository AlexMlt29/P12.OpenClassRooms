import React from 'react';

const ProjectCard = ({ href, imgSrc, imgAlt, title, skills, description }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="display-projet-card">
    <article className="card-projet">
      <img src={imgSrc} alt={imgAlt} />
      <div className="card-content">
        <div className="card-txt">
          <h3 className="card-title">{title}</h3>
          <ul className="list-inline mx-auto skill-icon">
            {skills.map(skill => (
              <li key={skill.name} className="list-inline-item mx-3">
                <span>
                  <div className="text-center skills-tile">
                    <i className={skill.iconClass}></i>
                    <p className="text-center">{skill.name}</p>
                  </div>
                </span>
              </li>
            ))}
          </ul>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </article>
  </a>
);

export default ProjectCard;
