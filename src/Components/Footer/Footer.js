import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

import './Footer.css'

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}

const footer = props => (
  <footer id="footer" className="background-light-blue">
    <h5>Chance Brown for Congress</h5>
    <p>Egestas congue quisque egestas diam in arcu cursus euismod quis.<br />Nullam non nisi est sit amet facilisis magna etiam tempor.</p>
    <div id="bottominfo">
      <ul>
        <li><a href="https://www.facebook.com/chanceforcongress" target="_blank" rel="noopener noreferrer" title="facebook account"><FaFacebook /></a></li>
        <li><a href="https://www.instagram.com/chanceforcongress/" target="_blank" rel="noopener noreferrer" title="NavInstagram Account"><FaInstagram /></a></li>
        <li><a href="https://twitter.com/ChanceforTN" target="_blank" rel="noopener noreferrer" title="twitter account"><FaTwitterSquare /></a></li>
      </ul>
    </div>
    <ul className="nav justify-content-center" id="footerNav">
      <li><Link smooth to="/#Home">Home</Link></li>
      <li><Link smooth to="/#About" scroll={el => scrollWithOffset(el, 45)}>About</Link></li>
      <li><Link smooth to="/#Contact" scroll={el => scrollWithOffset(el, 45)}>Contact</Link></li>
      <li><Link to="/Policy#Healthcare" scroll={el => scrollWithOffset(el, 175)}>Policy</Link></li>
      <li><a href="https://secure.actblue.com/donate/chanceforamerica" target="_blank" rel="noopener noreferrer">Donate</a></li>
    </ul>
    <p>Knoxville, TN</p>
    <p>E-mail: chancebrown@gmail.com</p>
    <p className="copy">© Chance Brown for Congress. All Rights Reserved</p>
</footer>
);


export default footer
