import React from 'react';
import {Link} from 'react-router-dom'
import { FaFacebook, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

import './Footer.css'

const footer = props => (
  <footer id="footer" className="background-blue">
    <h5>Chance Brown for Congress</h5>
    <p>Egestas congue quisque egestas diam in arcu cursus euismod quis.<br />Nullam non nisi est sit amet facilisis magna etiam tempor.</p>
    <div id="bottominfo">
      <ul>
        <li><a href="#" target="_blank" rel="noopener noreferrer" title="facebook account"><FaFacebook /></a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer" title="Linkedin Account"><FaLinkedin /></a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer" title="twitter account"><FaTwitterSquare /></a></li>
      </ul>
    </div>
    <ul className="nav justify-content-center" id="footerNav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Policy</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Donate</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Contact</Link>
      </li>
    </ul>
    <p>Knoxville, TN</p>
    <p>E-mail: chancebrown@gmail.com</p>
    <p className="copy">© Chance Brown for Congress. All Rights Reserved</p>
</footer>
);


export default footer
