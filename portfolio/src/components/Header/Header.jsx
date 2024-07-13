import React, { useEffect, useRef } from "react";
import anime from "animejs";
import image from '../../images/background.jpg';
import "./Header.css";

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textWrapper = textRef.current;
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 5000,
        easing: "easeOutExpo",
        delay: 4000
      });
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    window.scrollTo({
      top: element.offsetTop - 60,
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <section id="home">
        <img src={image} alt="Home Background" className="home-background" />
        <div className="content">
          <h1 className="ml2" ref={textRef}>
            Bienvenue sur mon portfolio !
          </h1>
        </div>
      </section>
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>ACCUEIL</a></li>
          <li><a href="#presentation" onClick={(e) => handleScroll(e, 'presentation')}>PRÉSENTATION</a></li>
          <li><a href="#realisation" onClick={(e) => handleScroll(e, 'realisation')}>RÉALISATION</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
