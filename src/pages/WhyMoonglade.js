import React , {useState} from "react";
import { WhyItems } from "./WhyItems";
import "./WhyItems.css"
import {CardImg} from 'reactstrap'



function WhyMoonglade(){

  const [image1  , setImage1] = useState(true);
  const [image2  , setImage2] = useState(true);
  const [image3  , setImage3] = useState(true);
  const [image4  , setImage4] = useState(true);
  const [image5  , setImage5] = useState(true);
  const [image6  , setImage6] = useState(true);

  function unsetstate(i){
    if(i==0)return setImage1(false);
    if(i==1)return setImage2(false);
    if(i==2)return setImage3(false);
    if(i==3)return setImage4(false);
    if(i==4)return setImage5(false);
    if(i==5)return setImage6(false);

  }
  function setstate(i){
    if(i==0)return setImage1(true);
    if(i==1)return setImage2(true);
    if(i==2)return setImage3(true);
    if(i==3)return setImage4(true);
    if(i==4)return setImage5(true);
    if(i==5)return setImage6(true);

  }
  function url(i){
    if(i==0){
      if(image1 == true) return WhyItems[i].Icon1;
      else return WhyItems[i].Icon2;
    }
    if(i==1){
      if(image2 == true) return WhyItems[i].Icon1;
      else return WhyItems[i].Icon2;
    }
    if(i==2){
      if(image3 == true) return WhyItems[i].Icon1;
      else return WhyItems[i].Icon2;
    }
    if(i==3){
      if(image4 == true) return WhyItems[i].Icon1;
      else return WhyItems[i].Icon2;
    }
    if(i==4){
      if(image5 == true) return WhyItems[i].Icon1;
      else return WhyItems[i].Icon2;
    }
    if(i==5){
      if(image6 == true) return WhyItems[i].Icon1;
      else return WhyItems[i].Icon2;
    }

  }

    const arr = [];
    const arr1 = [];
    for(let i=0;i<3;i++){
        arr.push(
            <div class = "inditem" 
            onMouseEnter= {()=>unsetstate(i)}
                onMouseLeave={()=>setstate(i)}>
              
                <div class = "logo" >
                  <img src =  {url(i)}/>
                </div>
            <h2>{WhyItems[i].title}</h2>
            <p>{WhyItems[i].Description}</p>
            </div>

        );
    }
    for(let i=3;i<6;i++){
        arr1.push(
            <div class = "inditem"
            onMouseEnter= {()=>unsetstate(i)}
                onMouseLeave={()=>setstate(i)}
                >
             <div class = "logo">
                  <img src =  {url(i)} />
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