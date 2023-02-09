import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import phone from "../images/phone.png"
import "./AppConsulting.css";

function AppConsulting(){
    return (
        <>
        <Navbar/>
        <p>'</p>
        <p>'</p>
        
        <div class = "mobile-marketing">
        <div class = "mobile-matter">
        <h2 class = "h2">STRATEGY</h2>
        <h1 class = "heading">Mobile Marketing Strategy </h1>
        <p>ACHIEVE YOUR GOALS WITH A HIGH-IMPACT STRATEGY</p>
        <p>WORK WITH THE WORLDWIDE LEADERS IN MOBILE MARKETING STRATEGY , AS WE DEVELOP YOUR WINNING APPROCAH JUST LIKE WE'VE DONE FOR THE BIGGEST NAMES IN  THE WORLD. OUR TEAM PRIDES ITSELF ON BEING ABLE TO LOOK AT YOUR SPECIFIC APP , GOALS , KPIs, AND FUTURE VISION -AND PRESENT A MOBILE STRATEGY THATBIS BUILT TO TRIUMPH</p>
        <br/>
        <button class = "but">I WANT TO GROW</button>
        
        </div>
        
        <img src = {phone} class = "image"/>
        </div>
        <br/>
        <br/>
        <div class = "Appsecond">
            <p>Achieveing the optimal results</p>
            <p>We help you define and measure the right KPIs for every aspect of your campaign</p>
            <p>We constantly measure progress against these agreed KPIs,</p>
            <p>always looking for ways to optimize and bring you even better results</p>
        </div>
        <Footer/>
        </>
    );
}

export default AppConsulting
