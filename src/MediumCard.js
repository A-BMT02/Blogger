import React , { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import "./MediumCard.css" ;
import { useData } from "./Context/DataContext" ;


export default function MediumCard() {
  const  {data}  = useData() ;
  return <div className="mediumCard">
      
      <div className="imageContainer">
        <img src ={data[0].img}></img>
      </div>

      <div className="imageDetails">
            <h3>{data[0].title}</h3>
            <p>{data[0].sneak}</p>
            <h6>{data[0].author}<span> in </span>{data[0].category}</h6>
            <h6 className="date">{data[0].date}</h6>
      </div>
  </div>;
}

