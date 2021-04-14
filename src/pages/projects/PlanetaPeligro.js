import React from 'react';
import ProjectBanner from './ProjectBanner';
import './Projects.css';

const PlanetaPeligro = () => {
  return (
    <div>
      <ProjectBanner 
        area="Conversational Interface Design"
        title="Planeta Peligro"
      />
      <div className="project-content">
        <h3>¿Qué es Planeta Peligro?</h3>  
        <p>Es un action de Google que está pensado como un complemento a la educación recibida en la escuela con relación a la protección civil. La información que se provee busca reforzar las indicaciones que los niños ya conocen, con la intención de que puedan actuar de forma independiente. El action se va a enfocar principalmente en desastres naturales y accidentes en casa.</p>
        <p>Main Invocation: <i>"Google abre Planeta peligro"</i></p>
        <h3>Investigación</h3>
        <ul>
          <li>Consulta de bibliografía relacionada a la Protección Civil en México</li>
          <li>Investigación sobre el uso de asistentes de voz y de dispositivos móviles</li>
          <li>Mapa de empatía</li>
          <li>Benchmark</li>
          <li>Survey Canvas</li>
          <li>Surveys</li>
          <li>User Persona</li>
          <li>Bot Persona</li>
          <li>Journey Map</li>
          <li>Planteamiento del Problema</li>
        </ul>
        <p>En el siguiente enlace se puede ver a detalle la metodología y herramientas usadas<a href="https://miro.com/welcomeonboard/eyqABZ2eqdcCLYYTN1pK6C7hTFlg1WIzRtrs6z0XnYYCFF3mgNRMIhd8EO2AyOiG" target="_blank"> <i class="fas fa-external-link-alt"></i></a></p>

        <h3>Guión</h3>
        <p>En el siguiente enlace se puede el template usado para crear el guión<a href="https://docs.google.com/spreadsheets/d/1F8TxdWDee1ghmS-K4S2NRHWXMmypKuVhZzy1jDZcL00/edit?usp=sharing" target="_blank"> <i class="fas fa-external-link-alt"></i></a></p>
        <h3>Presentación</h3>
        <p>En el siguiente enlace se puede el template usado para mirar a presentación mostrada en el Hackathon Women in Voice - Google Edition 2020<a href="https://docs.google.com/presentation/d/1xHgIiRMeEtbog4VraFGmuj1bUYtr2PLPK-4Pk7i77aQ/edit?usp=sharing" target="_blank"><i class="fas fa-external-link-alt"></i></a></p>
        
        <h3>Reconocimiento</h3>
        <p>Este proyecto obtuvo el segundo lugar en el Hackathon Women in Voice - Google Edition 2020</p>
        <p></p>
        <p><a href="https://github.com/sofiamejiamuro/planeta-peligro"><i className="fab fa-github"></i> Repositorio con el código de programación</a></p>
      </div>
    </div>
  )
}

export default PlanetaPeligro;