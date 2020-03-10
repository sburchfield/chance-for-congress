import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaFacebook, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import './Toolbar.css';

const toolbar = props => (
  <section className="toolbar">
    <nav className="toolbar_nav" id="toolbar_nav">
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="toolbar_nav_items">
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/About"}>About</NavLink></li>
        <li><NavLink to={"/Policy"}>Policy</NavLink></li>
        <li><NavLink to={"/Donate"}>Donate</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>
      </ul>
    </div>
    <div className="spacer" />
    <div className="socialIcons">
    <ul>
      <a href="https://www.facebook.com/sam.burchfield.5" target="_blank" rel="noopener noreferrer" title="facebook account"><li><FaFacebook /></li></a>
      <a href="https://www.linkedin.com/in/sam-burchfield-13572913a" target="_blank" rel="noopener noreferrer" title="Linkedin Account"><li><FaLinkedin /></li></a>
      <a href="https://twitter.com/SamBurchWeb" target="_blank" rel="noopener noreferrer" title="twitter account"><li><FaTwitterSquare /></li></a>
    </ul>
    </div>
    </nav>
  </section>
);


export default toolbar
