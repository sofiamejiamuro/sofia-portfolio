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
              src='images/planeta-peligro.png'
              text='Planeta Peligro'
              label='Voice Interface'
              path='/planeta-peligro'
            />
            <CardItem
              src='images/quien-sabe-mas.jpg'
              text='¿Quién sabe más?'
              label='Voice Interface'
              path='/quien-sabe-mas'
            />
            <CardItem
              src='images/bot.png'
              text='SAP chatbot'
              label='Chatbot'
              path='/sap-chatbot'
            />
            <CardItem
              src='images/pokemon.jpeg'
              text='pokemon'
              label='UX Research'
              path='/pokemon-go'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;