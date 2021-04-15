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
        <p>Soy Sofia, estudié la licenciatura en Lingüística y escribí mi primer línea de código a los 29 años.</p>
        <p>En junio de 2019 entré a Laboratoria y descubrí el mundo de la programación.Soy desarrolladora front-end pero el back-end me hace ojitos, trabajo principalmente con Javascript, React y Typescript. Descubrí las interfaces de voz, y como puedes dejar la lingüística pero ella nunca a ti, en mis ratos libres me gusta trabajar en el diseño conversacional y en el desarrollo de asistentes de voz.</p>
        
        <p>Antes hacía documentación y análisis de dos lenguas mexicanas; zapoteco y chincanteco, como parte de este trabajo investigativo conocí distintas comunidades de Oaxaca.</p>
        
        <p>Viví un año  en Tokio como estudiante de intercambio en el área de International Cultural Studies en Tsuda University - 津田塾大学.Aprender idiomas: siempre, el tiempo con mis amigas: me encanta, programar: ¡Uff! ¿por qué nadie me lo había dicho?.Diría que soy un ratón de biblioteca parlanchín... así que hablemos bajito.</p>
      </div>
    </div>
  )
}

export default About