import React from 'react';
import { Link } from 'react-router-dom'; 

const CardItem = ({path, label, src, text}) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__items__link" to={path}>
          <figure className="cards__items__pic-wrap" data-category={label}>
            <img 
              src={src} alt="yyyy"
              className="cards__items__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem;
