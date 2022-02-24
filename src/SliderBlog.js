import React , { useContext, useState , useRef } from 'react';
import "./SliderBlog.css" ; 
import { BiArrowBack } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { UserContext } from './Context/UserContext';
import { useData } from "./Context/DataContext" ; 

export const SliderBlog = () => {
  
 
  const  {data}  = useData() ; 

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
      //console.log( (data.length) - 1 )  ; 
      translate(data.length - 1) ;
      return (data.length - 1 ) ; 
    }
  })
}

const next = (e) => {
  
  setPosition(prev => {
    if( (prev !== (data.length - 1) ) ) {
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
     { data.map( (item , i) => (
      <div className="one">
      
      <div className="sliderImg">
        <img src ={data[i].img} alt=""></img>
      </div>

      <div className="sliderRight">
            <h4>{data[i].header}</h4>
            <h3>{data[i].title}</h3>
            <p>{data[i].sneak}</p>
            <h6>{data[i].author}<span> in </span>{data[i].category}</h6>
            <h6 className="date">{data[i].date}</h6>
      </div>
  </div>
     ))}
    </div>

  <div className="forward">
      <BiArrowBack className="forwardIcon" onClick={e => next()}/>
  </div>

  </div>

  <div className="boxContainer">
    {data.map( (item , index) => (
      <div className={index === position ? "box active" : "box"} data-id={index} onClick={e => boxClicked(index)}>
        </div>
    ))}
  </div>
      
  </div>

  )
};
