import React, { useEffect, useRef } from "react";
import image from '../../images/background.webp';
import "./Header.css";

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textWrapper = textRef.current;
    const textContent = textWrapper.textContent;
    textWrapper.innerHTML = textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const letters = textWrapper.querySelectorAll('.letter');

    let animationFrame;
    let direction = 1;
    const duration = 950;

    const animate = (time, startTime) => {
      const elapsedTime = time - startTime;
      letters.forEach((letter, index) => {
        const delay = index * 70;
        let progress = Math.min(1, Math.max(0, (elapsedTime - delay) / duration));
        if (direction === -1) progress = 1 - progress;
        const scale = 4 - 3 * progress;
        const opacity = progress;
        letter.style.transform = `scale(${scale})`;
        letter.style.opacity = opacity;
      });

      if (elapsedTime < letters.length * 70 + duration) {
        animationFrame = requestAnimationFrame((newTime) => animate(newTime, startTime));
      } else {
        direction *= -1;
        setTimeout(() => {
          animationFrame = requestAnimationFrame((newTime) => animate(newTime, performance.now()));
        }, 4000);
      }
    };

    const startAnimation = () => {
      animationFrame = requestAnimationFrame((time) => animate(time, time));
    };

    startAnimation();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
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
