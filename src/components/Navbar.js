import React, { useState } from "react";
import { Link } from "react-scroll";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import logo from '../images/logo.png'

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [click, setclick] = useState(false);
  const handleclick = () => setclick(false);

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
                  <Link to={item.path} onClick = {handleclick}>{item.title}</Link>
                  {dropdown && <Dropdown />}
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