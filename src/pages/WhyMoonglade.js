import React from "react";
import { WhyItems } from "./WhyItems";
import "./WhyItems.css"

function WhyMoonglade(){
    const arr = [];
    const arr1 = [];
    for(let i=0;i<3;i++){
        arr.push(
            <div class = "inditem">
                <div class = "logo">
                  <img src =  {WhyItems[i].Icon} />
                </div>
            <h2>{WhyItems[i].title}</h2>
            <p>{WhyItems[i].Description}</p>
            </div>

        );
    }
    for(let i=3;i<6;i++){
        arr1.push(
            <div class = "inditem">
             <div class = "logo">
                  <img src =  {WhyItems[i].Icon} />
                </div>
            <h2>{WhyItems[i].title}</h2>
            <p>{WhyItems[i].Description}</p>
            </div>

        );
    }

    return (
        <>
        <div id = "whyMoonglade">
        <div class = "whychoose" >
        <h1 class = "choose">WHY CHOOSE MOONGLADE LINKS</h1>
        <p class = "cent">Know The Real Secret To Stand Out From Your Competition</p>
        </div>
<ul className="Whyitems">
          {arr.map((item) => {
            return (
              <li >
               {item}
              </li>
            );
          })}
        </ul>

        <ul className="Whyitems">
          {arr1.map((item) => {
            return (
              <li >
               {item}
              </li>
            );
          })}
        </ul>
        </div>
        </>

    );


}

export default WhyMoonglade;