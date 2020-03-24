import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagram, FaRegBell } from "react-icons/fa";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { HashLink as Link } from 'react-router-hash-link';

import './Toolbar.css';

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}

const toolbar = props => (
  <section className="toolbar">
    <nav className="toolbar_nav" id="toolbar_nav">
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="toolbar_nav_items">
      <ul>
        <li><Link smooth to="/#Home">Home</Link></li>
        <li><Link smooth to="/#About" scroll={el => scrollWithOffset(el, 45)}>About</Link></li>
        <li><Link smooth to="/#Contact" scroll={el => scrollWithOffset(el, 45)}>Contact</Link></li>
        <li><Link to="/Policy#Healthcare" scroll={el => scrollWithOffset(el, 175)}>Policy</Link></li>
        <li><a href="https://secure.actblue.com/donate/chanceforamerica" target="_blank" rel="noopener noreferrer">Donate</a></li>
      </ul>
    </div>
    <div className="spacer" />
    <div className="socialIcons">
    <ul>
      <a href="https://www.facebook.com/chanceforcongress" target="_blank" rel="noopener noreferrer" title="Facebook Account"><li><FaFacebook /></li></a>
      <a href="https://www.instagram.com/chanceforcongress/" target="_blank" rel="noopener noreferrer" title="Linkedin Account"><li><FaInstagram /></li></a>
      <a href="https://twitter.com/ChanceforTN" target="_blank" rel="noopener noreferrer" title="Twitter Account"><li><FaTwitterSquare /></li></a>
    </ul>
    </div>
    </nav>
  </section>
);


export default toolbar
