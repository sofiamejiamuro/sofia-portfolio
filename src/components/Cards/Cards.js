import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/654a7d117530457.607b963056988.png'
              text='Gurú de viaje'
              label='Chatbot'
              path='/guru-de-viaje'
            />
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/aff92b117528095.60b1b4df1ee1f.png'
              text='Estafeta'
              label='Voicebot'
              path='/estafeta'
            />
             <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ec2d73117528095.60b1bb9caab62.png'
              text='Oxxo'
              label='Chatbot'
              path='/oxxo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/edf136117528095.60775d9518b6c.jpeg'
              text='Pokemon'
              label='UX Research'
              path='/pokemon-go'
            />
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/038217117528095.60775d9519d68.png'
              text='Cielito Querido Café'
              label='Chatbot'
              path='/cielito-querido'
            />
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/910fa7117528095.60775d951a12f.png'
              text='Planeta Peligro'
              label='Voicebot'
              path='/planeta-peligro'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;