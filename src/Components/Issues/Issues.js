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
let towerDes = 'Eu facilisis sed odio morbi quis commodo odio. Imperdiet sed euismod nisi porta lorem mollis.'
let greatDes = "Augue lacus viverra vitae congue. Lorem sed risus ultricies tristique nulla aliquet enim tortor."
let capitolDes = "Ut ornare lectus sit amet est placerat in. Odio ut sem nulla pharetra diam sit amet nisl suscipit. "


class Issues extends Component {


render() {

return(
  <div id="issuesInner">
    <Row className="issuesWrapper justify-content-around">
      <Col className="col-4">
        <Pic
          title={"Healthcare"}
          description={monDes}
          bgColorValue={'red'}
          img={monument}
          link={'#'} />
      </Col>
      <Col className="col-4">
        <Pic
        title={"Legalization"}
        description={fireworksDes}
        bgColorValue={'white'}
        img={fireworks}
        link={'#'} />
      </Col>
      <Col className="col-4">
        <Pic
        title={"Right to Work"}
        description={towerDes}
        bgColorValue={'blue'}
        img={tower}
        link={'#'} />
      </Col>
    </Row>
    <Row className="projectsWrapper justify-content-center">
      <Col className="col-4">
      <Pic
      title={"Tax Reform"}
      description={greatDes}
      bgColorValue={'blue'}
      img={greatSmokeyMountains}
      link={'#'} />
      </Col>
      <Col className="col-4">
        <Pic
        title={"Term Limits"}
        description={capitolDes}
        bgColorValue={'red'}
        img={usCapitolBuilding}
        link={'#'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
