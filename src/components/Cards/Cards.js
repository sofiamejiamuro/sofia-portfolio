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
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/910fa7117528095.60775d951a12f.png'
              text='Planeta Peligro'
              label='Voice Interface'
              path='/planeta-peligro'
            />
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/654a7d117530457.607b963056988.png'
              text='Gurú de viaje'
              label='Chatbot'
              path='/guru-de-viaje'
            />
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
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0aa45d117528095.60775d951910e.jpg'
              text='¿Quién sabe más?'
              label='Voice Interface'
              path='/quien-sabe-mas'
            />
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/038217117528095.60775d9519d68.png'
              text='Cielito Querido Café'
              label='Chatbot'
              path='/cielito-querido'
            />
            <CardItem
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/12c470117528095.6077640d41033.jpg'
              text='Augur'
              label='Voice Interface'
              path='/augur'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;