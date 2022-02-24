import React, { useContext, useEffect, useState  } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Navbar1.css";
import { Logo } from "./Logo";
import { GoThreeBars } from "react-icons/go" ;
import  Sidebar  from "./Sidebar" ; 
import { UserContext } from "./Context/UserContext" ;
import {signOut , onAuthStateChanged } from "firebase/auth" ; 
import { auth } from "./firebase" ; 
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context/UserContext";
import { useData } from "./Context/DataContext"

export const Navbar1 = () => {
    const { topbar } = useAuth() ; 
    const { loading } = useAuth() ; 

    // const [item , setItem ] = useState([])
  const [ close , setClose ] = useState(true) ; 
    const { user } = useAuth() ;
    //const [ setUser ] = useContext(UserContext) ; 

    const [ option , setOption] = useState("") ;

  const [ button , setButton ] = useState("") ; 
  const navigate = useNavigate() ;

  const { logout } = useAuth() ; 

  const handleClose = () => {
    setClose(true) ; 
  }

   

  //   if(button === "Log Out") {
  //    log Out 
  //     try{
  //       await logout() ;
  //       setButton("Log In") ; 
  //     }catch(err) {
  //       alert(err) ; 
  //     }

  //   } else {
  //     log in
  //     navigate("/login") ; 
  //   }
  // }

  const logoutUser = async () => {
    await logout() ; 
  }

  const redirect = (e) => {
    switch(e.target.value){
      case "Post a Blog" : 
        navigate("/blog") ;
        break;

      case "Read" : 
        navigate("/read") ;
        break;

      case "Log Out" :
        logoutUser() ; 
        break; 

      case "Log In" :
        navigate("/login") ; 
        break ; 

      case "About Us" : 
        navigate("/aboutus") ; 
        break ; 

        case "Get Started" : 
          navigate("/getstarted") ;
          break ;

      default : 
      console.log(e.target.value.length)
    }
  }


 

  return (
    
    <div className="navbar1">
        {!close && <Sidebar setClose={setClose} handleClose={handleClose}/>  }
      <div className="logo">
        <Logo className="blogger"/>
        <div className="bars" onClick={e => setClose(false)}>
          <GoThreeBars className="barIcon"/>

        </div>
      </div>

        {/* here */}
        <div className="navbar2">

        <ul>
            {topbar.map( item => (
            <li ><a><button value={item} onClick={(e) => redirect(e)}>{item}</button></a></li>  
            ) ) }
           
        </ul>
    </div>
    </div>
  );
};
