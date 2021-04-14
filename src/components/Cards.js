import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/projects/planeta-peligro.png'
              text='Planeta Peligro'
              label='Voice Interface'
              path='/planeta-peligro'
            />
            <CardItem
              src='images/projects/cielito-querido.png'
              text='Cielito Querido Café'
              label='Chatbot'
              path='/cielito-querido'
            />
            <CardItem
              src='images/projects/pokemon.jpeg'
              text='Pokemon'
              label='UX Research'
              path='/pokemon-go'
            />{/* 
            <CardItem
              src='images/projects/quien-sabe-mas.jpg'
              text='¿Quién sabe más?'
              label='Voice Interface'
              path='/quien-sabe-mas'
            />
            <CardItem
              src='images/projects/bot.png'
              text='SAP chatbot'
              label='Chatbot'
              path='/sap-chatbot'
            />
             */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;