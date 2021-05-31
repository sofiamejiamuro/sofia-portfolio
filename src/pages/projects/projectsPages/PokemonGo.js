import React from 'react';
import ProjectBanner from './ProjectBanner';
import './Projects.css';

const PokemonGo = () => {
  return (
    <div>
      <ProjectBanner 
        area="UX Research"
        title="POKEMON GO - POKEDEX"
      />
      <div className="project-content">
        <h4>El problema</h4>
        <p>La visualización de la data proporcionada en el juego Pokemon Go. La información que proporciona sobre cada Pokemón no es en su totalidad la que el usuario necesita y hace uso de recursos externos</p>
        <h4>Proceso Creativo</h4>
        <p>Para llevar acabo esta investigación se uso un poco de distintas metodologías, UX Research, Lean UX y Design Thinking. El primer paso fue elegir el tema, el que más me llamó la atención fue Pokemon Go, una vez decidido comencé a revisar la data proporcionada y a pensar en el usuario.</p>
        <div className="text_img">
          <div className="text">
            <h4>¡A Jugar!</h4>  
            <p>Descargué la app Pokémon Go y salí a cazar pokemones… ¡gajes del oficio!. La finalidad era familiarizarme y conocer la dinámica del juego.</p>       
            <p>Para tener un acercamiento a los usuarios me integré a tres comunidades de jugadores de Pokémon GO en Facebook.</p> 
            <p>Además lleve acabo una misión exploratoria a la Alameda Central de la CDMX, ahí realicé dos entrevistas que me dieron un punto de partida, los informantes fueron muy claros con sus necesidades.</p> 
          </div>  
          <div className="img">
            <figure >
              <img 
                src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e019b9117528361.60775eda682f3.jpg' alt="pokemon_1"
                className="one"
              />
            </figure>
          </div>
        </div>
        
        <h4>¿QUÉ ES LO QUE QUIEREN VER LOS JUGADORES DE POKÉMON GO?</h4>
        <p>En resumen, las necesidades de los usuarios eran saber los Individual Values (IV) que son los valores individuales de cada pokémon: ataque, defensa y estamina (vida), datos útiles a la hora de combate, y saber sobre los ataques de cada pokémon.</p>
        <h4>¿PROPUESTA?</h4>
        <p>Al conocer las necesidades de los usuarios el planteamiento fue hacer una página web que permitiera comparar esas características entre dos o tres ejemplares de pokémon.</p>
        <h4>PROBLEMÁTICA</h4>
        <p>Ahora que ya tenía de dónde partir, contrasté la data proporcionada en el archivo src con lo mostrado en la interfaz del juego.</p>
      
        <p>Al revisar la data que se proporcionó y las necesidades que se detectaron en las entrevistas… !Oh sorpresa! No se ajustaban, fue entonces que hice un poco de investigación en blogs y videos de youtube donde confirmé que las necesidades que se expresaron en las entrevistas eran generalizadas. En este punto investigué qué herramientas proporcionan una resolución a esas sugerencias, se econtraron dos aplicaciones para Android y una para IOS, sin embargo ninguna de ellas compara los valores de los pokemones.</p>
        <figure >
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/6517f9117528361.60775eda6785b.png' alt="pokemon_3"
            className="five"
          />
        </figure>
        <p>Estas aplicaciones te proporcionan el IV a partir del Poder de Combate (PC) y los Puntos de Salud (PS) de cada pokémon, ambos datos sí los proporciona la app POKÉMON GO sin embargo no están dentro de la data proporcionada en el src del proyecto Data Lovers.</p>

        <p>En este punto habaía dos opciones, meter los datos de los 151 pokemones manualmente o restringirme a la data proporcionada. Por cuestiones de tiempo … y de salud mental opté por la segunda.</p>
        <h4>¿USUARIO VS CLIENTE?</h4>
        <p>En este punto hubo una discordancia entre lo que quiere el cliente, en este caso Laboratoria y el proyecto Data Lovers, y las necesidades de los usuarios reales. En este caso particular de POKÉMON GO, el primer acercamiento que tuve para empatizar con el usuario y entenderlo arrojó una expectativa que no se cumpliría por que el cliente no contemplaba esa data. En el mundo real la app POKÉMON GO tampoco la proporciona en la interfaz del usuario, inclusive hay descontento en la comunidad por lo mismo. Mucho se habla de lo poco importante que es la información que te provee la app y la necesidad innecesaria de descargar otras apps para obtener información que te ayude a mejorar como jugador. La forma para llevar a cabo el proyecto a pesar de que no coincidían ambas necesidades fue ceñirme a los datos y pasar por alto lo real.</p>
        <h4>RESOLUCIÓN</h4>
        <p>El planteamiento fue ¿Qué de lo que hay disponible en la data del proyecto Data Lovers es importante para este juego? Como ya me había involucrado con el producto sabí que el tipo de pokémon, sus debilidades, sus evoluciones y los caramelos necesarios para evolucionar son características importantes a la hora de decidir con qué pokémon vamos a combatir.
        Una vez reestablecido los valores con los que disponía se creó la encuesta, se tomaron seis datos que sí aparecen en la data y se le propuso al encuestado elegir los tres más importantes, además de elegir qué le gustaría comparar, de esas características ya mencionadas, entre sus pokemones. Para definir al usuario se le pidió su edad y su género.
        Teniendo esto en mente se lanzó la encuesta a las comunidades de FB, permanecería abierta desde el martes 25 de junio a las 6pm hasta el miércoles 26 de junio a la 10am.</p>

        <p>La respuesta fue muy positiva en las comunidades de FB, incluso una de las administradoras compartió la encuesta por grupos de WhatsApp, además nos agregó en un grupo de puras mujeres jugadoras de POKÉMON GO.

        Sobre el grupo de WhatsApp me gustaría hacer un comentario que vas más relacionado a esto que significa Laboratoria para las mujeres y la sociedad. Hay dos requisitos para ser aceptada en este grupo de sólo mujeres, cito a la administradora que nos añadió “La primer regla es mucho respeto, y la segunda, y última es enviar un audio presentándonos y así verificamos ser chicas… porque es un juego predominantemente jugado por hombres y luego son muy manchados” , es un tema que debe ser puntualizado en nuestros proyectos porque hacerlo notar es un paso para hacer un cambio.</p>
        <h4>FEEDBACK DE LA ENCUESTA</h4>
        <p>Recibí dos comentarios acerca de nuestra encuesta. El primero...</p>
        <figure >
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b12870117528361.60775eda67ca3.png' alt="pokemon_5"
            className="three"
          />
        </figure>
        <p>El segundo...</p>
        <figure >
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/0feb00117528361.60775eda67356.png' alt="pokemon_5"
          />
        </figure>
        <p>Como se puede notar, las necesidades de los usuarios son los IV, datos que tampoco proporciona la app POKÉMON GO.</p>
        <h4>RESULTADOS DE LA ENCUESTA</h4>
        <p>Participaron en la encuesta 74 personas, a continuación mostramos lo obtenido.
        </p>
        <figure >
          <figcaption>Rangos de Edad</figcaption>
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/308236117528361.60775eda660d0.png' alt="pokemon_5"
            className="three"
          />
        </figure>
        <p>Aquí podemos ver dos bloques bien diferenciados, el primero que va de los 18 a los 24 años y el segundo de los 28 a los 30, hay un dato que parece resolver el misterio de la edad de Chabelo al afirmar que tiene 9 mil años (aún por confirmar).</p>
        <figure >
          <figcaption>Géneros</figcaption>   
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e218db117528361.60775eda688c2.png' alt="pokemon_5"
            className="three"
          />
        </figure>
        <p>Predominantemente jugado por hombres. Características principales de un pokémon</p>
        <p>Para los encuestados el tipo de pokemón, su evolución y sus debilidades son las características más importantes.</p>
        <figure >
          <figcaption>Carácteristicas</figcaption>
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0013e8117528361.60775eda6900e.png' alt="pokemon_5"
            className="three"
          />
        </figure>
        <p>Respecto a lo que les gustaría comparar, los datos coinciden con las características más importantes; el tipo, la evolución y las debilidades.</p>
        <div className="text_img">
          <div className="text">
            <h4>¿QUÉ SE PROPONE AHORA?</h4>
            <p>Con las entrevistas, las encuestas y mi experiencia jugando seguí con la propuesta inicial de crear una web app que permita visualizar las tres características más importantes de un pokémon (que tenemos disponibles) y hacer una comparació entre los mismos.</p>
            <h4>HISTORIAS DE USUARIO</h4>
            <p>A continuaciónse muestra el proceso para crear las historias de usuario, qué tarea épica se crea y cuál sería la definition of done.</p>
          </div>
          <div className="img">
            <figure>
            <img 
              src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/b351c2117528361.60775eda66852.jpg' alt="pokemon_5"
              className="four"
            />
          </figure>
          </div>
        </div>
        
        <h4>ANÁLISIS DE LA COMPETENCIA</h4>
        <p>Las aplicaciones que existen en el mercado son principalmente para medir el IV de los pokemones, sin embargo ninguna de ellas lo hace de forma comparativa sino de forma individual.</p>
        <p>En la web sí existen páginas que proporcionan información comparativa, bastante completa, sobre pokemones.</p>
        <a href="https://veekun.com/dex/gadgets/compare_pokemon" target="_blank" >Veekun</a>
        <figure>
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d9934e117528361.60775eda69ec4.png' alt="pokemon_5"
            className="five"
          />
        </figure>
        <a href="http://www.psypokes.com/dex/compare.php" target="_blank" >Psypoke</a>
        <figure>
          <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf33dd117528361.60775eda65973.png' alt="pokemon_5"
            className="five"
          />
        </figure>
        <h4>¿CUÁL ES EL PROBLEMA Y CÓMO LO RESOLVEMOS?</h4>
        <p>El problema sería que no hay una página web en la que sea fácil la visualización de la data en un teléfono, que es lo que el 100% de los usuarios usan para jugar POKÓMON GO, además de que la data proporcionada es mucha e irrelevante para su uso en los combates, ademásde que se necesita el espacio de tres pantallas verticales en ambas aplicaciones para contener toda la información</p>
        <div className="text_img">
          <div className="img">
            <figure>
              <img 
                src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98754a117528361.60775eda6548b.png' alt="pokemon_5"
                className="six"
              />
          </figure>
          </div>
          <div className="img">
            <figure>
              <img 
                src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96e17d117528361.60775eda66eb2.png' alt="pokemon_5"
                className="six"
              />
            </figure>
          </div>
        </div>
        <h4>PROTOTIPO BAJA FIDELIDAD</h4>
        <p>Para hacer este prototipo se utilizó marvel.</p>
        <h4>TESTEOS DE USABILIDAD</h4>
        <p>En las primeras pruebas se integró la búsqueda por tipo, se agrego el valor "required" a el input de búsqueda por nombre. En las siguientes pruebas se hizo cambio de color siguiendo las recomendaciones de Dení.</p>
        <p><a href="https://github.com/sofiamejiamuro/Monster-Compare-v1" className="repo" target="_blank"><i className="fab fa-github repo"></i> Repositorio con el código de programación</a></p>
      </div>
    </div>
  )
}

export default PokemonGo;

// Mejorar la visualizacion de la data proporiconada en el juego  Pokemon GO
// The Problem
// Process
// Challenges
// Result