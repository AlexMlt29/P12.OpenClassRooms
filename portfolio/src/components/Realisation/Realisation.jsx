import React from "react";
import img1 from "../../images/ohmyfood.png";
import img2 from "../../images/print-it.png";
import "../Realisation/Realisation.css";
import ProjectCard from '../ProjectCard/ProjectCard';

const Realisation = () => {
  const projects = [
    {
      href: "https://alexmlt29.github.io/P4.OpenClassRooms/",
      imgSrc: img1,
      imgAlt: "Un screenshot de la homepage du projet 4 OhMyFood.",
      title: "Projet - OhMyFood",
      skills: [
        { iconClass: "devicon-html5-plain", name: "HTML 5" },
        { iconClass: "devicon-css3-plain", name: "CSS 3" },
        { iconClass: "devicon-sass-original", name: "SASS" }
      ],
      description: "\"OhMyFood\" est mon premier projet en SASS, visant à créer une application web dynamique et responsive pour des restaurants. Le projet a été réalisé en suivant des étapes structurées, chacune apportant des fonctionnalités pour améliorer l'expérience utilisateur."
    },
    {
      href: "https://alexmlt29.github.io/P5.OpenClassRooms/",
      imgSrc: img2,
      imgAlt: "Un screenshot de la homepage du projet 5 Print it.",
      title: "Projet - Print it",
      skills: [
        { iconClass: "devicon-html5-plain", name: "HTML 5" },
        { iconClass: "devicon-css3-plain", name: "CSS 3" },
        { iconClass: "devicon-javascript-plain", name: "JAVASCRIPT" }
      ],
      description: "\"Print It !\" est mon premier projet en JavaScript, visant à créer un carrousel d'images interactif et dynamique. Le projet a été réalisé en suivant une série d'étapes structurées, chacune apportant des fonctionnalités spécifiques pour améliorer l'expérience utilisateur."
    }
  ];

  return (
    <section className="realisation">
      <div>
        <h2 className="realisation-title">RÉALISATION</h2>
        <div className="projet-card">
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              href={project.href}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              title={project.title}
              skills={project.skills}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisation;
