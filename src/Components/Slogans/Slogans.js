import React from 'react';
import {Row, Col} from 'reactstrap';
import { FaHeart } from 'react-icons/fa';
import { GiBrain, GiCapitol} from 'react-icons/gi';


import './Slogans.css';


function Slogans() {
  return (
    <div>
    <Row id="slogansWrapper">
      <Col lg="4" className="red animated slideInLeft">
          <FaHeart className="icons" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Col>
      <Col lg="4" className="animated slideInUp">
          <GiCapitol className="icons" />

          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </Col>
      <Col lg="4" className="blue animated slideInRight">
          <GiBrain className="icons" />
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <p>Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam maecenas ultricies mi eget mauris pharetra et.  </p>
      </Col>
    </Row>
    </div>
  );
}

export default Slogans;
