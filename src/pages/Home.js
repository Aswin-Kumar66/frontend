import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel  from 'react-elastic-carousel';
import "./About.css"
import img1 from '../images/carousel-img1.png'
import img2 from '../images/carousel-img2.png'
import img3 from '../images/carousel-img3.png'
import Wave from 'react-wavify';

function Home(){

    const breakPoints = [
        {width : 1 , itemsToShow : 1},
        {width : 550 , itemsToShow : 1},
        {width : 768 , itemsToShow : 1},
        {width : 1200 , itemsToShow : 1}
    ];

return (
    <>
    <div id = "Home">
    <Carousel breakPoints={breakPoints}>
    
                <div class = "carousel">
                    <img src= {img1} />
                </div>
                <div class = "carousel">
                    <img src={img2} />
                </div>
                <div class = "carousel">
                    <img src={img3} />
                </div>

    </Carousel>
    <Wave fill='yellow'
        paused={false}
        options={{
          amplitude: 20,
          speed: 0.35,
        }}
        class = "height"
  />

    <div class = "homematter">
    <p2>We are A Mobile Performance Marketing company that helps businesses to achieve a global growth and become category leader, we design well crafted full media services driven by innovation and expertise… there are many to mention like this and everything may perfectly suit us. But The fact is well established campaigns are actually outnumbered by marketing agencies and we are one more, but surely interesting addition to this space. We believe in doing things with a simple approach for great outcomes.</p2>
    </div>
    </div>
    </>


);
}
export default Home;