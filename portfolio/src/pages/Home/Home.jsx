import React from "react";
import Presentation from "../../components/Presentation/Presentation";
import Realisation from "../../components/Realisation/Realisation";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <section id="presentation" className="section">
        <Presentation />
      </section>
      <section id="realisation" className="section">
        <Realisation />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
