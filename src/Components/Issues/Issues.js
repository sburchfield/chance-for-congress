import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

import Pic from '../Pic/Pic'

import monument from '../images/monument.jpg'
import fireworks from '../images/fireworks.jpg'
import tower from '../images/tower.jpg'
import greatSmokeyMountains from '../images/great-smokey-mountains.jpg'
import usCapitolBuilding from '../images/us-capitol-building.jpg'

import './Issues.css'

let monDes = "This is America - the greatest country in the modern world. And yet we are the only country without access to affordable and comprehensive healthcare for its citizens."
let fireworksDes = "Cannabis is a quickly growing industry and America is not capitalizing on it properly. Colorado made $1.7 billion in profit off the cannabis industry alone."
let towerDes = "Unions are the backbone of fair wages and benefits in America. We need to support them by letting them exist fairly and giving them access to new resources."
let greatDes = "Climate change is real. We need to accept that as a nation and use that information to benefit us. Taxing fossil fuel industries and creating jobs and wealth from alternative energy sources will help every American."
let capitolDes = "Washington is as murky as ever since the 2016 election. We need a new era of transparency and accountability in D.C. and our current administration is not a part of that."


class Issues extends Component {


  componentDidMount() {
    let imageList = [monument, fireworks, tower, greatSmokeyMountains, usCapitolBuilding]
    imageList.forEach((image) => {
      new Image().src = image
    });
  }

render() {

return(
  <div id="issuesInner">
    <Row className="issuesWrapper justify-content-around">
      <Col lg="4">
        <Pic
          title={"Healthcare"}
          description={monDes}
          bgColorValue={'rgb(170,57,57)'}
          img={monument}
          link={'/Policy#Healthcare'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"War on Drugs"}
        description={fireworksDes}
        bgColorValue={'rgb(101,127,173)'}
        img={fireworks}
        link={'/Policy#War_on_Drugs'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Jobs"}
        description={towerDes}
        bgColorValue={'rgb(170,57,57)'}
        img={tower}
        link={'/Policy#Jobs'} />
      </Col>
    </Row>
    <Row className="projectsWrapper justify-content-center">
      <Col lg="4">
      <Pic
      title={"Environment"}
      description={greatDes}
      bgColorValue={'rgb(101,127,173)'}
      img={greatSmokeyMountains}
      link={'/Policy#Environment'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Transparency"}
        description={capitolDes}
        bgColorValue={'rgb(170,57,57)'}
        img={usCapitolBuilding}
        link={'/Policy#Transparency'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
