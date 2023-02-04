import React from "react";
import "./About.css";
import aboutimage from '../images/about-photo.png'


function About(){
return (
    <>
    <div class = "aboutitems" id = "About">
      <div class = "items">
        <h1>Our</h1>
        <h2>Principles</h2>
        <p id = "p">Building a world-class brand reputation requires a perfect combination of Ideation, Strategy and Implementation.</p>
      </div>
      <div class = "items">
      <h1>Work</h1>
        <h2 id = "h2">Methods</h2>
        <p id = "p">Laser focused approach for every single task to reach most rewarding customers at first will make a real difference.</p>

      </div>
      <div class = "items">
      <h1>Ethics</h1>
        <h2 id = "h2">Measurement</h2>
        <p id = "p">Best ROI is the result of good performance marketing. Client’s Returns on Ad Spend are our performance metrics.</p>

      </div>




    </div>
    <div class = "it">
      <div class = "container">
        <ul class = "list">
          <li>We love selling brands</li>
          <li>We love promoting growth</li>
          <li>And we love every freaking thing about moile marketing</li>
        </ul>
        <p1>1 size doesn’t fit all and best campaigns can not be established without diversity. Being a marketing partner we give our best to our clients in understanding the real secret to stand out from competition. We are a small team of performance agency that build brand promotion strategies with a holistic approach for all promotion channels. But don't take our word for it..</p1>
      </div>
      <div>
      <img src = {aboutimage}/>
      </div>
    </div>

    <div class = "talks">
      <h1 class = "center">...talk with us about it</h1>
      <p1>we know, it sounds loaded but we put our best out to deliver best results on what we commit</p1>
    </div>
    
    </>
)
}
export default About;