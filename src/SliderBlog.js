import React , { useContext, useState , useRef } from 'react';
import "./SliderBlog.css" ; 
import { BiArrowBack } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CardContext } from './Context';
import { data } from "./Context" ;

export const SliderBlog = () => {
  const  dummy   = data ; 
const [ position , setPosition ] = useState(0) ;

const ref = useRef([]) ; 

const prev = (e) => {
  setPosition(previous => {
    if((previous !== 0)) 
    {
      // console.log(previous - 1) ; 
      translate(previous - 1) ;
      return (previous - 1 ) ; 

    } else {
      //console.log( (dummy.length) - 1 )  ; 
      translate(dummy.length - 1) ;
      return (dummy.length - 1 ) ; 
    }
  })
}

const next = (e) => {
  
  setPosition(prev => {
    if( (prev !== (dummy.length - 1) ) ) {
     // console.log(prev + 1) ; 
      translate(prev + 1) 
      return (prev + 1) ;
    }
    else {
      //console.log(0) ; 
      translate(0) ; 
      return 0 ; 
    }
  })
}

const translate = (multiple) =>  {
 const sliderRef = ref.current ; 
 console.log(( 20 * multiple * -1))
  sliderRef.style.transform = `translateX(-${20 * multiple}%)` ;
}

const boxClicked = (index) => {
  setPosition(index) ;
} 
  return (
    <div className="whole">

  <div className="wholeSlider">
    <div className="back">
      <BiArrowBack className="backIcon" onClick={e => prev()}/>
  </div>

  <div className="slider" ref={ref}>
     { dummy.map( (item , i) => (
      <div className="one">
      
      <div className="sliderImg">
        <img src ={dummy[i].img} alt=""></img>
      </div>

      <div className="sliderRight">
            <h4>{dummy[i].header}</h4>
            <h3>{dummy[i].title}</h3>
            <p>{dummy[i].sneak}</p>
            <h6>{dummy[i].author}<span> in </span>{dummy[i].category}</h6>
            <h6 className="date">{dummy[i].date}</h6>
      </div>
  </div>
     ))}
    </div>

  <div className="forward">
      <BiArrowBack className="forwardIcon" onClick={e => next()}/>
  </div>

  </div>

  <div className="boxContainer">
    {dummy.map( (item , index) => (
      <div className={index === position ? "box active" : "box"} data-id={index} onClick={e => boxClicked(index)}>
        </div>
    ))}
  </div>
      
  </div>

  )
};
