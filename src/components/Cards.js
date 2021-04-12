import React from 'react';

// Component
import CardItem from './CardItem';

const Cards = ({src, text, label, path}) => {
  return (
    <div >
      <p>Check out</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={src}
              text={text}
              label={label}
              path={path}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
