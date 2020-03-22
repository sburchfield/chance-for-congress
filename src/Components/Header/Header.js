import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap'

import background from './images/background0.jpg'

import './Header.css'


class Header extends Component {

  componentDidMount() {
    let imageList = [background]
    imageList.forEach((image) => {
      new Image().src = image
    });
  }

  render(){
    return(
        <header id="Home">
          <div className="filter">
            <div className="headerWrapper">
              <Row>
                <Col lg={8}>
                  <h1>CHANCE FOR CONGRESS 2020</h1>
                  <p><span className="light-red">COMPASSION. </span><span className="white">TRANSPARENCY. </span><span className="light-blue">SENSIBILITY. </span></p>
                </Col>
              </Row>
              <a href="https://secure.actblue.com/donate/chanceforamerica" target="_blank" rel="noopener noreferrer"><Button className="header-donate-btn">Donate Now!</Button></a>
              <p className="header-donate-text">I am a fresh politician and every bit helps!</p>
            </div>
          </div>
        </header>
    )
  }

}


export default Header
