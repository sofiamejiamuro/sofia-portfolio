import React from 'react';
import ProjectBanner from './ProjectBanner';
import './Projects.css';

const GuruDeViaje = () => {
  return (
    <div>
      <ProjectBanner 
        area="Chatbot Design"
        title="Gurú de Viaje"
      />
      <div className="project-content">
        <h3>Caso</h3>
        <p>Gurú de Viaje</p>
        <h3>Sobre Gurú de viaje</h3>
        <p>Según su sitio:</p>
        <p>
          "Cazamos Ofertas en la Web. <br/>
          Somos CAZA-OFERTAS de: vuelos, hoteles, experiencias y todo lo que tenga que ver con viajes. Diariamente publicamos las mejores ofertas que encontramos en diferentes sitios y te decimos cómo y dónde se compran, para que tú las aproveches"
        </p>
        <p>
          "Lo que SÍ vendemos <br/>
          Tenemos variedad de productos como: tours y paquetes a diferentes partes del mundo que SÍ las vende directamente Gurú de Viaje como cualquier agencia de viajes tradicional."
        </p>
        <p>Según sus creadores:</p>
        <p>Es un generador de demanda de viajes a traves de las ofertas. <br/>
        Los clientes llegan principalmente de la página pero hay más retención a través de la aplicación móvil. En 2019 entre las dos plataformas mencionadas se acumularon un total de 18 millones de usuarios.</p>

        <h3>El Problema</h3>
        <p>Gurú de viaje tiene dos plataformas, la aplicación móvil  y la página web, sólo en la página web tienen un Facebook Messenger Bot implementado , sin embargo, únicamente se puede visualizar en la sección "¿Quienes somos?" y no contiene ningún diálogo de inicio.</p>

        <p>También ofrece la  posibilidad de recibir información a través de grupos de whatsapp especializados en la selección previamente hecha de alguna ruta de interés.</p>
        <div className="video-containter">
          <iframe width="450" height="315" src="https://www.youtube.com/embed/jMIMLInCgTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <iframe width="450" height="315" src="https://www.youtube.com/embed/qxBOIm8CfTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>En el caso de la creación de alertas personalizadas tanto en la opción de la app móvil como en el sitio web,en este último previo a un registro, se crea la alerta eligiendo los destinos que se presentan alfabeticamente siguiendo el nombre de la ciudad.Una vez elegido el destino pregunta el punto de salida y el mes.
        En la app móvil antes de que aparezcan las ciudades puedes hacer un prefiltrado según el usuario sepa o no su destino.
        </p>
        <div className="video-containter">
          <iframe width="450" height="315" src="https://www.youtube.com/embed/szOQxoxJqVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <iframe width="450" height="315" src="https://www.youtube.com/embed/XAfqls_6m0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>Pains</p>
        <ul>
          <li>El ususario tendría que unirse a muchos grupos de whatsapp si quisiera muchos destinos</li>
          <li>Los grupos se reportan como llenos</li>
          <li>Las alertas personalizadas no tienen filtro de búsqueda entonces el usuario tiene que revisar todo el listado o buscar la letra específica del destino que quiere agregar </li>
        </ul>
       
        <h3>Propuesta</h3>
        <p>Implementar un chatbot que sea un agente de viajes para comprar y para la creación de alertas de viajes personalizados.</p>
        <h3>Proceso Creativo</h3>        
        <ul>
          <li>
            <h4>User Persona</h4>
          </li>
          <li>
            <h4>Journey Map actual en sitio web</h4>
          </li>
          <li>
            <h4>Bot Persona</h4>
          </li>
          <li>
            <h4>Journey Map con chatbot</h4>
            <p>Enlace al board con el proceso creativo a detalle<a href="https://miro.com/welcomeonboard/MyUGPFmgAxDfbE4p64HpKxD5yulDfQSM7wGLBBGZW02vjoKfdKtFQyBiTOgbKil6" target="_blank"> <i class="fas fa-external-link-alt"></i></a></p>
          </li>
          <li>
            <h4>Diálogo</h4>
            <p>El chatbot tiene dos momentos de incio.<br/> 
            El primero es cuando el usuario ingresa al sitio web y el segundo cuando el usuario desea crear alertas personalizadas. <br/> 
            El diagrama muestra el happy path del flujo conversacional, en esta primera versión no se contemplan otros casos.
            <br/> 
            En el diagrama se muestran la intereacción del chatbot y el usuario cuando se inicia desde el sitio web.
            </p>
            <p>Enlace al diagrama del diálogo<a href="https://lucid.app/lucidchart/invitations/accept/inv_4ab44961-5ae2-425b-bfbc-525d96256c27?viewport_loc=-76%2C494%2C3018%2C1612%2C0_0" target="_blank"> <i class="fas fa-external-link-alt"></i></a></p>
          </li>
          <li>
            <h4>Implementación</h4>
            <p> En el video se muestra en funcionamiento el chatbot y del lado derecho la integración de dialogflow, el modelo se puede probar sin embargo esta entrenado solo para responder a los inputs del video.</p>
          </li>
        </ul>
        <div className="video-containter"> <iframe width="450" height="315" src="https://www.youtube.com/embed/PxQCNvm44W0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
       
       
        <h3>Métricas</h3>
        <ul>
          <li>Número de usuarios que inician</li>
          <li>Número de usuarios que finalizan</li>
          <li>Tiempo que le toma al usuario completar su búsqueda</li>
          <li>Momento del flujo donde el usuario abandona</li>
          <li>Hora del día donde más consultas se hacen</li>
          <li>Destinos, fechas y lugar de salida más frecuentes para compra</li>
          <li>Destinos, fechas y lugar de salida más frecuentes para alerta</li>
        </ul>
        <h3>Next Steps</h3>
        <ul>
          <li>Creación del flujo conversacional para las alertas</li>
          <li>Consumir API desde dialog flow para información de destino y salida, ofertas, etc...</li>
          <li>Implementar webhooks</li>
          <li>implementar Firesbase</li>
          <li>Entrenar más el modelo</li>
        </ul>
        <h3>Tecnologías</h3>
        <ul>
          <li>DialogFlow</li>
          <li>Node Js</li>
          <li>React</li>
        </ul>
        <h3>Recursos</h3>
        <p><a href="https://www.youtube.com/watch?v=YhlnX37ZNRo" className="repo" target="_blank">El "Gurú" de los buscadores en ofertas de viajes | Shark Tank México</a></p>
        <p><a href="https://www.facebook.com/gurudeviaje" className="repo" target="_blank">Gurú de Viaje - Página de Facebook </a></p>
        <p><a href="https://gurudeviaje.com" className="repo" target="_blank">Gurú de Viaje - Sitio Oficial </a></p>
      </div>
    </div>
  )
}

export default GuruDeViaje;
