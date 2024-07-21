import React from "react";
import img1 from "../../images/ohmyfood.png";
import img2 from "../../images/print-it.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import "../Realisation/Realisation.css";

const projects = [
  {
    title: "Projet - OhMyFood",
    imgSrc: img1,
    imgAlt: "Un screenshot de la homepage du projet 4 OhMyFood.",
    link: "https://alexmlt29.github.io/P4.OpenClassRooms/",
    description: "\"OhMyFood\" est mon premier projet en SASS, visant à créer une application web dynamique et responsive pour des restaurants. Le projet a été réalisé en suivant des étapes structurées, chacune apportant des fonctionnalités pour améliorer l'expérience utilisateur.",
    skills: [
      { icon: "devicon-html5-plain", name: "HTML 5" },
      { icon: "devicon-css3-plain", name: "CSS 3" },
      { icon: "devicon-sass-original", name: "SASS" },
    ],
  },
  {
    title: "Projet - Print it",
    imgSrc: img2,
    imgAlt: "Un screenshot de la homepage du projet 5 Print it.",
    link: "https://alexmlt29.github.io/P5.OpenClassRooms/",
    description: "\"Print It !\" est mon premier projet en JavaScript, visant à créer un carrousel d'images interactif et dynamique. Le projet a été réalisé en suivant une série d'étapes structurées, chacune apportant des fonctionnalités spécifiques pour améliorer l'expérience utilisateur.",
    skills: [
      { icon: "devicon-html5-plain", name: "HTML 5" },
      { icon: "devicon-css3-plain", name: "CSS 3" },
      { icon: "devicon-javascript-plain", name: "JavaScript" },
    ],
  },
];

const Realisation = () => {
  return (
    <section className="realisation">
      <div>
        <h2 className="realisation-title">RÉALISATION</h2>
        <div className="projet-card">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisation;
