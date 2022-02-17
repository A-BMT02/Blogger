import React, { useContext, useEffect, useState  } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchInput } from "./SearchInput";
import "./Navbar1.css";
import { Logo } from "./Logo";
import { GoThreeBars } from "react-icons/go" ;
import  Sidebar  from "./Sidebar" ; 
import { CardContext } from "./Context" ;
import {signOut , onAuthStateChanged } from "firebase/auth" ; 
import { auth } from "./firebase" ; 
import { useNavigate } from "react-router-dom";

export const Navbar1 = () => {

  const [ close , setClose ] = useState(true) ; 
    const  user  = useContext(CardContext) ;
    // const [ setUser ] = useContext(CardContext) ; 

  const [ button , setButton ] = useState("") ; 
  const navigate = useNavigate() ;

  const handleClose = () => {
    setClose(true) ; 
  }

   

  const loginOrLogout = () => {
    if(button === "Log Out") {
     //log Out 
      signOut(auth).then(() => {
        console.log("signed out")
        // setUser({}) ;
        setButton("Log In") ;
        console.log(button) ;
      }) .catch(err => {
        console.log(err) ; 
      })
    } else {
      //log in
      navigate("/login") ; 
    }
  }

  useEffect(() => {
    if(user) {
      console.log(user) ;
      setButton("Log Out")
    } else {
      setButton("Log In")
    }

  } , [button])

  return (
    <div className="navbar1">
        {!close && <Sidebar setClose={setClose} handleClose={handleClose}/>  }
      <div className="logo">
        <Logo className="blogger"/>
        <div className="bars" onClick={e => setClose(false)}>
          <GoThreeBars className="barIcon"/>

        </div>
      </div>

      <div className="navIcons">
        <div className="social">
          <button className="loginOrSignUp" onClick={e => loginOrLogout()}>{button}</button>
          {/* <div  className="icons">
            <FaFacebookF/>
          </div>
          <div  className="icons">
            <FaTwitter />
          </div>
          <div className="icons" >
            <FaInstagram />
          </div> */}
        </div>
        <div className="searchAndIcon">
         <SearchInput className="icons" />
          <div className="navbarSearch">
            <AiOutlineSearch className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
