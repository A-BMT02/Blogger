import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import "./SmallCard.css" ;
import { data } from "./Context/UserContext" ;
import { useData } from './Context/DataContext';

export default function SmallCard() {
  const  {data}  = useData() ; 

  return <div className="smallCard">
      
      <div className="imageContainer">
        <img src ={data[1].img}></img>
      </div>

      <div className="imageDetails">
            <h3>{data[1].title}</h3>
            <h6>{data[1].author}<span> in </span>{data[0].category}</h6>
            <h6 className="date">{data[1].date}</h6>
      </div>
  </div>;
}
