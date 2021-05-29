import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <figure >
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/41c38b117530457.60776acaa4c5f.jpg' alt="me"
            className="about__img card__container"
          />
        </figure>
      </div>
      <div className="right">
        <p>👋 Soy Sofia, estudié la licenciatura en Lingüística. En Junio entré a Laboratoria y descubrí de qué se trataba la programación y escribí mi primer línea de código a los 29 años.</p> 
        <p>Mi primer trabajo en la industria tech fue como desarrollado frontend y como puedes dejar la lingüística pero ella nunca a ti, ahora diseño y programo chatbots y ... me pagan por eso. También me gusta hacer cosillas con las interfaces de voz y ahondar en el NLP. </p>
        <p>Antes hacía documentación y análisis de dos lenguas mexicanas; zapoteco y chincanteco, como parte de este trabajo investigativo conocí distintas comunidades de Oaxaca. Viví un año  en Tokio como estudiante de intercambio en el área de International Cultural Studies en Tsuda University - 津田塾大学</p>
      </div>
    </div>
  )
}

export default About
