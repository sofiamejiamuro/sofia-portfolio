import React from 'react';
import './resume.css'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className>
        <div>
          <h2 className="resume-title">
            Mi Experiencia
          </h2>
        </div>
        <div>
          <div className="experience-container">
            <h4 className="resume-h3">BOTS BUILDER</h4>
            <h5>Auronix | Mayo 2021 - presente</h5>
            <p>Las actividades que desempeño como Bots Builder implican la comunicación con cliente, la diagramación del flujo conversacional y la construcción del bot.</p>
            <p> La primer parte del proceso de creación de un bot es la comunicación con el cliente que quiere implementar estas experiencias conversacionales en sus servicios/productos, entender las necesidades que desea curbrir, hablar de la viabilidad y proponer distintas soluciones. Despúes se crea el flujo conversacional basado en una investigación para obtener un bot persona, definir la voz y el tono del mismo, así como la definición de los requerimientos técnicos para su desarrollo, una vez que se tiene la primer versión del diálogo se itera sobre el mismo hasta obtener el visto bueno del cliente. Por último, se construye el bot utilizando una herramienta interna. </p>
          </div>
          <div className="experience-container">
            <h4 className="resume-h3">GLOBAL WEBMASTER</h4>
            <h5>Women in Voice | Mayo 2021 -presente</h5>
            <p>Estoy a cargo del mantenimiento del sitio web de la organización. Las herramientas tecnológicas de este proyecto son Wordpress y PHP. Para la organización del equipo se utiliza Asana y Slack. </p>
          </div>
          <div className="experience-container">
            <h4 className="resume-h3">CONVERSATIONAL AND USER EXPERIENCE DESIGNER</h4>
            <h5>Side Projects | Diciembre 2019 - presente</h5>
            <p>He realizado diferentes proyectos que están enfocados al diseño conversacional, como chatbots e interfaces de voz. El proceso incluye el diseño de la conversación,la investigación del usuario y el desarrollo.</p>
          </div>
          <div className="experience-container">
            <h4 className="resume-h3">FRONTEND DEVELOPER</h4>
            <h5>Pefai | Diciembre 2019 - Mayo 2021</h5>
            <p>Como frontend dev estuve a cargo de desarrollar las interfaces de usuario, las tecnologías que utilicé son JavaScript, TypeScript, React, SASS y emotion. Seguí una metodología ágil, entregas por sprint y Azure Boards para la organización de tareas.</p>
          </div>
          <div className="experience-container">
            <h4 className="resume-h3">AI Training</h4>
            <h5>Defined Crowd | Enero - Julio 2020</h5>
            <p>Durante mi colaboración en este proyecto mi actividad era revisar múltiples posts de diferentes redes sociales como Facebook o Twitter e identificar los sustantivos relevantes y darles un significado adecuado, esto con el fin de proveer información relevante y específica para el correcto entrenamiento de los modelos de Machine Learning.</p>
          </div>
          <div className="experience-container">
            <h4 className="resume-h3">INVESTIGACIÓN LINGÜÍSTICA</h4>
            <h5>UAM / INALI / INAH / ENAH | 2014 - Enero 2019</h5>
            <p>Como parte de mi formación profesional llevé a cabo investigaciones sobre dos lenguas mexicanas: zapoteco y chinanteco. Mis estudios se enfocaron principalmente en las áreas de fonética y fonología. También realicé estudios de tipo filológicos con documentos del siglo XVII. Durante mi etapa investigativa presenté los resultados en diferentes congresos, además de que forman parte del Acervo de Lenguas Indígenas Nacionales (ALIN - INALI)</p> 
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="resume-title">
            Skills
          </h2>
        </div>
        <div className="uls-container">
          <div className="ul-div">
            <h3 className="resume-h3">UX & CONVERSATIONAL DESIGN</h3>
            <ul className="resume-ul">
              <li>Design Thinking</li>
              <li>Metodologías de User Research</li>
              <li>User Interviews</li>
              <li>Personas</li>
              <li>Canvas</li>
              <li>Journey Mapping</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Pruebas de Usabilidad</li>
              <li>UX Writing</li>
              <li>Conversational Design</li>
              <li>Figma</li>
              <li>Invision</li>
              <li>Alexa Console</li>
              <li>Dialogflow</li>
              <li>Google Actions Builder</li>
            </ul>
          </div>
          <div className="ul-div">
            <h3 className="resume-h3">PROGRAMACIÓN</h3>
            <ul className="resume-ul">
              <li>HTML5</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>TypeScript</li>
              <li>R</li>
              <li>Python</li>
              <li>React JS</li>
              <li>Node JS</li>
              <li>Git</li>
              <li>Github</li>
              <li>Postman</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Google Cloud Functions</li>
              <li>gactions CLI</li>
            </ul>
          </div>
          <div className="ul-div">
            <h3 className="resume-h3">OTROS</h3>
            <ul className="resume-ul">
              <li>Miro</li>
              <li>Trello</li>
              <li>Canva</li>
              <li>Azure Board</li>
              <li>Metodologías Ágiles</li>
              <li>Monday</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>        
      </div>
      <div>
        <div>
          <h2 className="resume-title">
            Reconocimientos
          </h2>
        </div>
        <div>
          <div className="experience-container">
            <h4 className="resume-h3">1o LUGAR WOMEN IN VOICE HACKATHON - AMAZON EDITION NOVIEMBRE 2019</h4>
            <h5>Diseño de la conversación y programación en JavaScript de la skill en la Alexa Console.</h5>
            <h5><a href="https://github.com/sofiamejiamuro/quien-sabe-mas" className="repo" target="_blank"><i className="fab fa-github repo"></i> Repositorio en Github</a></h5>
            
          </div>
          <div className="experience-container">
            <h4 className="resume-h3">2o LUGAR WOMEN IN VOICE HACKATHON - GOOGLE EDITION DICIEMBRE 2020</h4>
            <h5>Diseño de la conversación, UX research y programación en JavaScript de la action en la Google Action console.</h5>
            <h5><a href="https://docs.google.com/presentation/d/1xHgIiRMeEtbog4VraFGmuj1bUYtr2PLPK-4Pk7i77aQ/edit?usp=sharing" className="repo" target="_blank"><i class="fas fa-external-link-alt"></i>Presentación</a></h5>
            <h5><a href="https://github.com/sofiamejiamuro/planeta-peligro" className="repo" target="_blank"><i className="fab fa-github repo"></i> Repositorio en Github</a></h5>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="resume-title">
            Educación
          </h2>
        </div>
        <div>
          <div>
            <h4 className="resume-h3">LICENCIATURA EN LINGÜÍSTICA | 2021</h4>
            <h5>Universidad Autónoma Metropolitana</h5>
            <h5>CDMX, México</h5>
          </div>
          <div>
            <h4 className="resume-h3">DATA ANALYSIS | ENE 2021 - JUL 2021</h4>
            <h5>BEDU</h5>
            <h5>CDMX, México</h5>
          </div>
          <div>
            <h4 className="resume-h3">FRONT-END DEVELOPER | JUN 2019 - DIC 2020</h4>
            <h5>Laboratoria</h5>
            <h5>CDMX, México</h5>
          </div>
          <div>
            <h4 className="resume-h3">INTERNATIONAL AND CULTURAL STUDIES | 2014 - 2015</h4>
            <h5>津田塾大学 - Tsuda University</h5>
            <h5>Tokio, Japón</h5>
          </div>
         
        </div>
        
      </div>
    </div>
  )
}

export default Resume
