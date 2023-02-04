import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyMoonglade from "./pages/WhyMoonglade";
import Solutions from "./pages/Solutions";
import ContactUs from "./pages/ContactUs";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
      <About/>
      <WhyMoonglade/>
      <ContactUs/>
      <Footer/>
        
      </BrowserRouter>
   
    </>
  );
}

export default App;