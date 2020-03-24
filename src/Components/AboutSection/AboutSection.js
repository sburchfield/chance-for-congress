import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'


import './AboutSection.css';


class AboutSection extends Component {

  render(){
    return (
      <div id="About" className="aboutSectionWrapper">
      <h4 className="aboutSectionHeader black">About</h4>
      <Row className="justify-content-center align-items-center">
      <Col xl="5">
      <div className="aboutSectionImage"></div>
      </Col>
      <Col xl="5" className="aboutSectionText black">
      <p>Chance is a lifelong East Tennessee resident and is proud to represent its people in Washington. He has watched as extreme partisanship in the area destroy the economy, environment, and the will of the people to even participate in the electoral process. </p>
<p>This is another paragraph</p>
        </Col>
      </Row>
      </div>
    );
  }
}

export default AboutSection;
