import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

import background from './images/background.jpg'

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
        <header>
          <div className="filter">
            <div className="headerWrapper">
              <Row>
                <Col xs={8}>
                  <h1>CHANCE FOR CONGRESS 2020</h1>
                  <p><span className="red">COMPASSION. </span><span className="white">TRANSPARENCY. </span><span className="blue">SENSIBILITY. </span></p>
                </Col>
              </Row>
            </div>
          </div>
        </header>
    )
  }

}


export default Header
