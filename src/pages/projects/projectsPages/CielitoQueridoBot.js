import React from 'react';
import ProjectBanner from './ProjectBanner';
import './Projects.css';

const CielitoQueridoBot = () => {
  return (
    <div>
      <ProjectBanner 
        area="Chatbot Design"
        title="Cielito Querido Café"
      />
      <div className="project-content">
        <h3>🤖 Hola, soy Terroncito. ¿Qué se te antoja hoy?</h3>
        <p>Caso: <br/> Cielito querido café quiere hacer un bot. Suponiendo que el bot inicia la conversación al promocionar sus cafés.</p>
        <p>Requisitos:</p>
        <ul>
          <li>Cielito tiene 3 cafés que quiere promocionar a través de WhatsApp:
            <ul>
              <li>Espresso Americano</li>
              <li>Capuchino</li>
              <li>Mocha</li>
            </ul>
          </li>
          <li>Crear un flujo con las siguientes opciones que puede hacer el usuario
            <ul>
              <li>Ordenar su café a través de la conversación</li>
              <li>enviar a su domicilio</li>
              <li>Nice to have ¿Cómo se te ocurre que paga el café?</li>
            </ul>
          </li>
          <li>Para ver la solución de tu flujo, puedes crear una conversación a manera de "script" entre el bot y el usuario.</li>
        </ul>
        <h3>Investigación</h3>
        <p>¿Qué es cielito querido café?</p>
        <p>Es una cafetería que busca empatizar y crear nicho con los consumidores mexicanos de café a través del uso de una estética con elementos mexicanos , uso de referencias a frases de conocimiento popular, con la venta de alimentos y bebidas basadas en recetas de origen mexicano y a través de brindar una experiencia que remita al hogar tradicional.
        Target: Hombres y Mujeres de 18 a 35 años de edad con NSE (nivel socioeconómico) A/B  y  C+ , además de consumidores de más de  50 años ‘gente que de alguna manera no se siente bien en el ambiente de las demás cafeterías‘ siguiendo a Paula Selene de Anda fundadora de la agencia Thot Comunicación Total.</p>
        <h3>Definición de la voz</h3>
        <p>Adjetivos, cualidades y atributos resultado de la investigación:</p>
        <div className="list-container">
          <div className="list">
            <ul>
              <li>Sabor de México</li>
              <li>Tradiciones </li>
              <li>Hogareño</li>
              <li>Sabor de México</li>
              <li>Mexicano</li>
              <li>Acogedor</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Popular</li>
              <li>Para todos</li>
              <li>Tradiciones </li>
              <li>Hogareño</li>
              <li>Cálido</li>
              <li>Bohemio</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Nostalgico</li>
              <li>Tipico</li>
              <li>Barrio</li>
              <li>Hospitalario </li>
              <li>Auténtico</li>
              <li>Comunidad</li>
            </ul>
          </div>
        </div>
        <h3>Definición del tono</h3>
        <p>El tono se define según el contexto en el que el usuario se encuentra. En esta interacción se pueden detectar cuatro momentos del customer journey en el que el usuario se encontrará y la intención para cada uno, y así poder definir el tono, las palabras y la estructura del mensaje. </p>
        <p>Momentos:</p>
        <ul>
          <li>Conocer los productos</li>
          <li>Elección del producto</li>
          <li>Ingresar la dirección de entrega del producto</li>
          <li>Pago de producto</li>
        </ul>
        <p>Tono:</p>
        <ul>
          <li>Casual</li>
          <li>Tradicional</li>
          <li>Hogareño</li>
          <li>Cariñoso</li>
          <li>Acogedor</li>
          <li>Reconocible dentro del contexto mexicano</li>
        </ul>
        <h3>Bot persona</h3>
        <p>This is terroncito, it will help you ordering, paying, and deliver it to your home your coffee</p>
        <h3>Frases</h3>
        <p>Se seleccionaron algunas frases que podrían ser usadas durante la experiencia conversacional</p>
        <ul>
          <li>Como caído del cielo</li>
          <li>¡A darle que es mole de olla!</li>
          <li>Al buen entendedor, pocas palabras</li>
          <li>Para todo mal mezcal, para todo bien también.</li>
          <li>El que a buen árbol se arrima, buena sombra le cobija.</li>
          <li>Barriga llena, corazón contento.</li>
          <li>Se metió hasta la cocina.</li>
          <li>¿A quién le dan pan, que llore?</li>
          <li>Matrimonio y mortaja, del cielo bajan</li>
          <li>Ni tanto que queme al santo, ni tan poco que no lo alumbre</li>
        </ul>
        <h3>Script</h3>
        <p>En el siguiente enlace se puede ver el script <a href="https://docs.google.com/document/d/1kzchQF6cxXlEc8NnYfdS6Aj5rKKnAbsLliespqD1aaE/edit?usp=sharing" target="_blank"><i class="fas fa-external-link-alt"></i></a></p>
        <p>En el siguiente enlace se puede ver la presentación <a href="https://docs.google.com/presentation/d/1-4my353Ewi3VhmFrIrM5jgBfTgCi1rcIUZhMMJ1GrgQ/edit?usp=sharing" target="_blank"><i class="fas fa-external-link-alt"></i></a></p>
      </div>
    </div>
  )
}

export default CielitoQueridoBot;
