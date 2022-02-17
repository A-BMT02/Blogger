import React from "react" ; 
import "./SearchInput.css"

export const SearchInput = () => {
    return (
        <div className="searchBox">
            <input className="searchTxt" type="text" placeholder="Search..."/>
        </div>
    )
}