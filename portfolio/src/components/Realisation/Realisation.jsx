import React from "react";
import img1 from "../../images/ohmyfood.png";
import img2 from "../../images/print-it.png";
import "../Realisation/Realisation.css";

const Realisation = () => {
  return (
    <section className="realisation">
      <div>
        <h2 className="realisation-title">RÉALISATION</h2>
        <div className="projet-card">
          <a href="https://alexmlt29.github.io/P4.OpenClassRooms/" target="_blank" rel="noopener noreferrer" className="display-projet-card">
            <article className="card-projet">
              <img src={img1} alt="Un screenshot de la homepage du projet 4 OhMyFood." />
              <div className="card-content">
                <div className="card-txt">
                  <h3 className="card-title">Projet - OhMyFood</h3>
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
                          <i className="devicon-sass-original"></i>
                          <p className="text-center">SASS</p>
                        </div>
                      </span>
                    </li>
                    <p className="card-description">"OhMyFood" est mon premier projet en SASS, visant à créer une application web dynamique et responsive pour des restaurants. Le projet a été réalisé en suivant des étapes structurées, chacune apportant des fonctionnalités pour améliorer l'expérience utilisateur.</p>
                  </ul>
                </div>
              </div>
            </article>
          </a>
          <a href="https://alexmlt29.github.io/P5.OpenClassRooms/" target="_blank" rel="noopener noreferrer" className="display-projet-card">
            <article className="card-projet">
              <img src={img2} alt="Un screenshot de la homepage du projet 5 Print it." />
              <div className="card-content">
                <div className="card-txt">
                  <h3 className="card-title">Projet - Print it</h3>
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
                          <i className="devicon-javascript-plain"></i>
                          <p className="text-center">JAVASCRIPT</p>
                        </div>
                      </span>
                    </li>
                  </ul>
                  <p className="card-description">"Print It !" est mon premier projet en JavaScript, visant à créer un carrousel d'images interactif et dynamique. Le projet a été réalisé en suivant une série d'étapes structurées, chacune apportant des fonctionnalités spécifiques pour améliorer l'expérience utilisateur.</p>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Realisation;
