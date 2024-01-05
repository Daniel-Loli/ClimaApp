import React from 'react'
import s from './Cards.module.css'

const Cards = ({ name, content, imageUrl ,humedity,lat,lon}) => {

    
    return (
      <div className={s.card}>
        <img src={imageUrl} alt="Card Image" className={s.cardImage} />
        <div className={s.cardConent}>
          <p className="card-title">City: {name} </p>
          <p className="card-text">Temperature: {content}</p>
          <p className="card-text">Presión: {humedity}</p>      
          <p className="card-text">Latitude: {lat}</p>   
          <p className="card-text">Longitud: {lon}</p>   
        </div>
        
      </div>
    );
  };

export default Cards