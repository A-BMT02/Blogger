import React from 'react';
import MediumCard from './MediumCard';
import SmallCard from "./SmallCard" ; 
import "./HomeSectionA.css" ; 

export default function HomeSectionA() {
  return (
    <div className="sectionA">
  <div className="editorsPickA">
      <div className="mediumA">
          <div className="underlinedTitle">
              <h2>Editor's Pick</h2>
          </div>

              <MediumCard/>

      </div>

      <div className="smallA">
        <div className="underlinedTitle">
            <h2></h2>
        </div>
              <SmallCard/>
              <SmallCard/>
              <SmallCard/>
        </div>
      

      
  </div>

    <div className="trendingA">
        <div className="underlinedTitle">
          <h2>Trending</h2>
        </div>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>

      </div>

      </div>
  );
}
