import React, { useContext } from 'react';
import { CardContext } from './Context';
import "./SmallCard.css" ;
import { data } from "./Context" ;


export default function SmallCard() {
    const dummy = data ; 
  return <div className="smallCard">
      
      <div className="imageContainer">
        <img src ={dummy[1].img}></img>
      </div>

      <div className="imageDetails">
            <h3>{dummy[1].title}</h3>
            <h6>{dummy[1].author}<span> in </span>{dummy[0].category}</h6>
            <h6 className="date">{dummy[1].date}</h6>
      </div>
  </div>;
}
