import React, { useEffect  } from "react";
import { Link } from "react-scroll";
import * as Icons from "react-icons/fa";
import logo from '../images/logo.png';
import "./About.css";
import aboutimage from '../images/about-photo.png'
import AOS from 'aos';


function About(){
  useEffect(()=>{
    AOS.init({duration : 3000});
  });


return (
    <>
    <div class = "aboutitems" id = "About">
      <div class = "aboutitem">
      <div class = "items" >
        <div class = "before" >
        <h1>Our</h1>
        <h1 class = "h2">Principles</h1>
        {/* <p id = "p">Building a world-class brand reputation requires a perfect combination of Ideation, Strategy and Implementation.</p> */}
        </div>
        <div class = "after">
        {/* <h1>Our</h1> */}
        <h1 class = "h2">Principles</h1>
        <br/>
        <br/>
        <p id = "p">Building a world-class brand reputation requires a perfect combination of Ideation, Strategy and Implementation.</p>
        </div>
        </div>
      </div>
      <div class = "aboutitem">
      <div class = "items">
        <div class = "before">
        
      <h1>Work</h1>
        <h1 class = "h2">Methods</h1>
        {/* <p id = "p">Laser focused approach for every single task to reach most rewarding customers at first will make a real difference.</p> */}
        </div>
        <div class = "after">
        
      {/* <h1>Work</h1> */}
        <h2 class = "h2">Methods</h2>
        <br/>
        <br/>
        <p id = "p">Laser focused approach for every single task to reach most rewarding customers at first will make a real difference.</p>
        
        </div>
      </div>
      </div>
      <div class = "aboutitem">
      <div class = "items">
        <div class = "before">
      <h1>Ethics</h1>
        <h1 class = "h2">Measurement</h1>
        {/* <p id = "p" >Best ROI is the result of good performance marketing. Client’s Returns on Ad Spend are our performance metrics.</p> */}
        </div>
        <div class = "after">
      {/* <h1>Ethics</h1> */}
        <h2 class = "h2">Measurement</h2>
        <br/>
        <br/>
        <p id = "p" >Best ROI is the result of good performance marketing. Client’s Returns on Ad Spend are our performance metrics.</p>
        </div>
      </div>
      </div>




    </div>
    <div class = "it" data-aos="fade-right">
      <div class = "container">
        <ul class = "list">
          <li class = "listitems">We love selling brands</li>
          <li class = "listitems">We love promoting growth</li>
          <li class = "listitems">And we love every freaking thing about moile marketing</li>
        </ul>
        <p1 class = "text">1 size doesn’t fit all and best campaigns can not be established without diversity. Being a marketing partner we give our best to our clients in understanding the real secret to stand out from competition. We are a small team of performance agency that build brand promotion strategies with a holistic approach for all promotion channels. But don't take our word for it..</p1>
      </div>
      <div data-aos="fade-left">
      <img src = {aboutimage}/>
      </div>
    </div>

    <div class = "talks" data-aos = "zoom-in">
      <h1 class = "center">...talk with us about it</h1>
      <p1>we know, it sounds loaded but we put our best out to deliver best results on what we commit</p1>
    </div>
    
    </>
)
}
export default About;