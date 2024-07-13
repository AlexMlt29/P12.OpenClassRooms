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
                  <h3 className="card-title">Projet 4 - OhMyFood</h3>
                </div>
              </div>
            </article>
          </a>
          <a href="https://alexmlt29.github.io/P5.OpenClassRooms/" target="_blank" rel="noopener noreferrer" className="display-projet-card">
            <article className="card-projet">
              <img src={img2} alt="Un screenshot de la homepage du projet 5 Print it." />
              <div className="card-content">
                <div className="card-txt">
                  <h3 className="card-title">Projet 5 - Print it</h3>
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
