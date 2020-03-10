import React from 'react';
import {NavLink} from 'react-router-dom';

import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = ['sideDrawer'];

  if(props.show){
    drawerClasses = 'sideDrawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/About"}>About</NavLink></li>
        <li><NavLink to={"/Policy"}>Policy</NavLink></li>
        <li><NavLink to={"/Donate"}>Donate</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>
      </ul>
    </nav>
  )
};

export default sideDrawer
