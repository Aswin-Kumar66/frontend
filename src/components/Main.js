import React, { useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import WhyMoonglade from "../pages/WhyMoonglade";
import ContactUs from "../pages/ContactUs";
import Footer from './Footer';
import AOS from 'aos';

function Main() {
  useEffect(()=>{
    AOS.init({duration : 2000});
  });
  
  return (
    <>
        <Navbar  />
        <div><Home/></div>
        <div  data-aos="fade-up"><About/></div>
        <div  data-aos="fade-up"><WhyMoonglade/></div>
        <div  data-aos="fade-up"><ContactUs/></div>
      <Footer/>
        
     
   
    </>
  );
}

export default Main;