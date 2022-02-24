import React from "react";
import "./Navbar2.css" ; 
import { AiOutlineSearch } from "react-icons/ai";
import { SearchInput } from "./SearchInput";

export const Navbar2 = () => {
  return (
          <div className="navIcons">
        <div className="searchAndIcon">
         <SearchInput className="icons" />
          <div className="navbarSearch">
            <AiOutlineSearch className="icon" />
          </div>
        </div>
      </div>
    
  );
};
