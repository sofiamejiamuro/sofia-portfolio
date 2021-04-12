import React from 'react';

// Styles
import './Projects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Components
//import Cards from '../components/Cards';
// import '../components/Cards.css';

const Projects = () => {
  return (
    <>
      <div className="projects-container">
      <h3>Projectos Diseño Conversacional</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/planeta-peligro.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/quien-es-ese-pokemon.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/quien-sabe-mas.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    
      <div className="projects-container">
      <h3>Projectos Desarrollo Web</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/planeta-peligro.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/quien-es-ese-pokemon.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/quien-sabe-mas.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
       
      </div>
      
    </>
  )
}

export default Projects
