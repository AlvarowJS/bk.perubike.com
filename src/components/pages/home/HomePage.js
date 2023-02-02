import React from "react";
import MainBanner from "./MainBanner";
import Packages from "./Packages";

import Features from "./Features";
import Review from "./Review";
import Achievement from "./Achievement";

//Define Default Content
export default function HomePage() {
    return (
       <div>
           {/* Start Preloader Area */}
           <div className="preloader">
            <div class="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div> 
           </div>

           {/* End Preloader Area */}

           {/*---------Start Imported All Sections-----------*/}
            <MainBanner/>
            <Packages/>
            <Achievement/>
            <Review/>
            <Features/>
           {/*---------End Imported All Sections-----------*/}
       </div>
    );
  }


