import React , { useContext } from 'react';
import { CardContext } from './Context';
import "./MediumCard.css" ;
import { data } from "./Context" ;


export default function MediumCard() {
    const dummy= data ; 
  return <div className="mediumCard">
      
      <div className="imageContainer">
        <img src ={dummy[0].img}></img>
      </div>

      <div className="imageDetails">
            <h3>{dummy[0].title}</h3>
            <p>{dummy[0].sneak}</p>
            <h6>{dummy[0].author}<span> in </span>{dummy[0].category}</h6>
            <h6 className="date">{dummy[0].date}</h6>
      </div>
  </div>;
}

