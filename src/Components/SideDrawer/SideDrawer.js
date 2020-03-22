import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './SideDrawer.css'

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}

const sideDrawer = props => {

  let drawerClasses = ['sideDrawer'];

  if(props.show){
    drawerClasses = 'sideDrawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link smooth to="/#Home" onClick={props.drawerClickHandler}>Home</Link></li>
        <li><Link smooth to="/#About" scroll={el => scrollWithOffset(el, 45)} onClick={props.drawerClickHandler}>About</Link></li>
        <li><Link smooth to="/#Contact" scroll={el => scrollWithOffset(el, 45)} onClick={props.drawerClickHandler}>Contact</Link></li>
        <li><Link to="/Policy#Healthcare" onClick={props.drawerClickHandler} scroll={el => scrollWithOffset(el, 175)}>Policy</Link></li>
        <li><a href="https://secure.actblue.com/donate/chanceforamerica" target="_blank" rel="noopener noreferrer" onClick={props.drawerClickHandler}>Donate</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawer
