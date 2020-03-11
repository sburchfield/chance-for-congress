import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

import Pic from '../Pic/Pic'

import monument from './images/monument.jpg'
import fireworks from './images/fireworks.jpg'
import tower from './images/tower.jpg'
import greatSmokeyMountains from './images/great-smokey-mountains.jpg'
import usCapitolBuilding from './images/us-capitol-building.jpg'

import './Issues.css'

let monDes = "Enim ut sem viverra aliquet eget sit amet tellus cras."
let fireworksDes = "Montes nascetur ridiculus mus mauris vitae ultricies. "
let towerDes = 'Eu facilisis sed odio morbi quis commodo odio. '
let greatDes = "Augue lacus viverra vitae congue. Lorem sed risus ultricies."
let capitolDes = "Ut ornare lectus sit amet est placerat in. Odio ut sem nulla pharetra. "


class Issues extends Component {


render() {

return(
  <div id="issuesInner">
    <Row className="issuesWrapper justify-content-around">
      <Col md="4">
        <Pic
          title={"Healthcare"}
          description={monDes}
          bgColorValue={'rgb(181,35,35)'}
          img={monument}
          link={'#'} />
      </Col>
      <Col md="4">
        <Pic
        title={"Legalization"}
        description={fireworksDes}
        bgColorValue={'rgb(21, 105, 199)'}
        img={fireworks}
        link={'#'} />
      </Col>
      <Col md="4">
        <Pic
        title={"Right to Work"}
        description={towerDes}
        bgColorValue={'rgb(181,35,35)'}
        img={tower}
        link={'#'} />
      </Col>
    </Row>
    <Row className="projectsWrapper justify-content-center">
      <Col md="4">
      <Pic
      title={"Tax Reform"}
      description={greatDes}
      bgColorValue={'rgb(21, 105, 199)'}
      img={greatSmokeyMountains}
      link={'#'} />
      </Col>
      <Col md="4">
        <Pic
        title={"Term Limits"}
        description={capitolDes}
        bgColorValue={'rgb(181,35,35)'}
        img={usCapitolBuilding}
        link={'#'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
