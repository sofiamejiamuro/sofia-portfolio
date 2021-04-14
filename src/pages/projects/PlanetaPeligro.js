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
        <h3>Guión</h3>
        <h3>Presentación</h3>
        <h3>Reconocimiento</h3>
        <a href="https://miro.com/welcomeonboard/eyqABZ2eqdcCLYYTN1pK6C7hTFlg1WIzRtrs6z0XnYYCFF3mgNRMIhd8EO2AyOiG" target="_blank"></a>
      </div>
    </div>
  )
}

export default PlanetaPeligro;