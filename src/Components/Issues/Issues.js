import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

import Pic from '../Pic/Pic'

import monument from '../images/healthcare.jpg'
import fireworks from '../images/drugs.jpg'
import tower from '../images/jobs.jpg'
import greatSmokeyMountains from '../images/great-smokey-mountains.jpg'
import usCapitolBuilding from '../images/us-capitol-building.jpg'

import './Issues.css'

let monDes = "This is America - the greatest country in the modern world. And yet we are the only country without access to affordable and comprehensive healthcare for its citizens."
let fireworksDes = "The war on drugs has been a systematic way to incarcerate minorities. We need to eliminate their sentences and legalize cannabis to usher in new industry opportunities. "
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
          bgColorValue={'rgb(51, 102, 230, .6)'}
          img={monument}
          link={'/Policy#Healthcare'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"War on Drugs"}
        description={fireworksDes}
        bgColorValue={'rgb(230, 50,50, .5)'}
        img={fireworks}
        link={'/Policy#War_on_Drugs'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Jobs"}
        description={towerDes}
        bgColorValue={'rgb(51, 102, 230, .6)'}
        img={tower}
        link={'/Policy#Jobs'} />
      </Col>
    </Row>
    <Row className="projectsWrapper justify-content-center">
      <Col lg="4">
      <Pic
      title={"Environment"}
      description={greatDes}
      bgColorValue={'rgb(230, 50,50, .6)'}
      img={greatSmokeyMountains}
      link={'/Policy#Environment'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Transparency"}
        description={capitolDes}
        bgColorValue={'rgb(51, 102, 230, .6)'}
        img={usCapitolBuilding}
        // rgb(255, 40,40) I like this red
        // rgb(51, 102, 255) I like this blue
        link={'/Policy#Transparency'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
