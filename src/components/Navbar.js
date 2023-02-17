import React, { useState } from "react";
import { Link } from "react-scroll";
import {useMatch , useResolvedPath} from "react-router-dom"
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import logo from '../images/logo.png'

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [click, setclick] = useState(false);
  const handleclick = () => setclick(false);


  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  return (
    <>
    <div class = "header">
      <nav className="navbar">
        <Link to="Home" className="navbar-logo">
          <img src = {logo}/>
        </Link>
        <ul className= {click ? "nav-items active" : "nav-items"}>
          {navItems.map((item) => {
            if (item.title === "Solutions") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <CustomLink to={item.path} onClick = {handleclick}>{item.title}</CustomLink>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            if(item.title == "Home"){
              return (
                <li key={item.id} className={item.cName}>
                  <a href={item.path} spy={true} smooth={true} offset={50} duration={500} onClick = {handleclick}>{item.title}</a>
                 </li>
              );

            }
            
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path} spy={true} smooth={true} offset={50} duration={500} onClick = {handleclick}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        
      </nav>
      </div>
    </>
  );
}

export default Navbar;