import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import 'bootstrap.css';
import "./About.css"

function Home(){

return (
    <>
    <div id = "Home">
    <Carousel>
    
                <div class = "carousel">
                    <img src="https://res.cloudinary.com/dhr5ru0cw/image/upload/v1657455232/cld-sample-3.jpg" />
                </div>
                <div class = "carousel">
                    <img src="https://res.cloudinary.com/dhr5ru0cw/image/upload/v1657455232/cld-sample-4.jpg" />
                </div>
                <div class = "carousel">
                    <img src="https://res.cloudinary.com/dhr5ru0cw/image/upload/v1657455233/cld-sample-5.jpg" />
                </div>

    </Carousel>
    <div class = "homematter">
    <p2>We are A Mobile Performance Marketing company that helps businesses to achieve a global growth and become category leader, we design well crafted full media services driven by innovation and expertise… there are many to mention like this and everything may perfectly suit us. But The fact is well established campaigns are actually outnumbered by marketing agencies and we are one more, but surely interesting addition to this space. We believe in doing things with a simple approach for great outcomes.</p2>
    </div>
    </div>
    </>


);
}
export default Home;