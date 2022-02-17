import React, { useState , useContext, useEffect } from 'react';
import "./Sidebar.css"; 
import {IoMdClose} from "react-icons/io" ; 

export default function Sidebar({handleClose}) {

// useEffect(() => {
//   console.log("changed") ;
// } , [close])
  return (
      <div className="wholeSidebar">
             <div className= "sidebar">
            <div className="cancel">
              <IoMdClose className="closeIcon" onClick={ () => handleClose(true)}/>
            </div>
            <div className="sidebarOptions">
                <ul>
                  <li>Home</li>
                  <li>Categories</li>
                  <li>Politics</li>
                  <li>Business</li>
                  <li>Health</li>
                  <li>Design</li>
                  <li>Sport</li>
                  <li>Contact</li>
                  
                </ul>
            </div>
          </div>
        
      </div>
  )
}
