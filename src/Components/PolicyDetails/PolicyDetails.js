import React, { Component } from 'react';
import { Row, Col, Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import monument from '../images/healthcare.jpg'
import fireworks from '../images/drugs.jpg'
import tower from '../images/jobs.jpg'
import greatSmokeyMountains from '../images/great-smokey-mountains.jpg'
import usCapitolBuilding from '../images/us-capitol-building.jpg'

import './PolicyDetails.css';

let policy = [{
                title: "Healthcare",
                text: "This is America - the greatest country in the modern world. And yet we are the only country without access to affordable and comprehensive healthcare for its citizens. Our current healthcare system is a mess. High deductibles, expensive procedures and medications, and insurance companies that will do anything to ensure they make a profit before protecting you.",
                list: ["Eliminate medical debt", "Work with experts in medical field to find best ways to fix their industry", "Expand government medical plans to cover all Americans while finding a way to transition away from corporate-backed insurance", "Tackle opioid crisis by improving pharmacy working conditions and expanding access to treatment facilities"]
              },
              {
                title: "War_on_Drugs",
                text: "Cannabis is a quickly growing industry and America is not capitalizing on it properly. Colorado made $1.7 billion in profit off the cannabis industry alone. As a country, we need to use this money and overturn all wrongful convictions dealing with drugs.",
                list: ["Pass legislation to legalize cannabis country-wide", "Fight to over-turn wrongful convictions relating to drugs", "Introduce legislation to regulate cannabis so that it is safe", "Tax cannabis industries to supplement other government programs"]
              },
              {
                title: "Jobs",
                text: "Unions are the backbone of fair wages and benefits in America. We need to support them by letting them exist fairly and giving them access to new resources. Not only should more Americans unionize, but we should also fight for higher wages in non-union industries and have the billionaire class pay their fair share of taxes.",
                list: ['Repeal “Right to Work” statues nationwide, garnering more interest in union membership', "Focus on legislation granting access to training for the incoming wave of automation across all industries", "Make companies pay their fair share of taxes. You and I should not pay more in taxes than companies such as Amazon", "Fight for raising the minimum wage to a living standard"]
              },
              {
                title: "Environment",
                text: "Climate change is real. We need to accept that as a nation and use that information to benefit us. Taxing fossil fuel industries and creating jobs and wealth from alternative energy sources will help every American.",
                list: ["Vote to have America re-join the Paris Climate Accord", "Invest in jobs and research focusing on alternative energy sources", "Capitalize on emerging industries by bringing jobs to East Tennessee", "Pass regulations on the fossil fuel industry to cut emissions and improve their technologies", "Heavily tax companies that heavily pollute or abuse emission regulations"]
              },
              {
                title: "Transparency",
                text: "Washington is as murky as ever since the 2016 election. We need a new era of transparency and accountability in D.C. and our current administration is not a part of that.",
                list: ["Publish notes on every decision made", "Answer any and all public questions about legislation", "Vote in the best interest of the people", "Work in a bipartisan manner, not only voting along party lines", "Work to overturn Citizens United"]
              }
              ]



let imageList = [monument, fireworks, tower, greatSmokeyMountains, usCapitolBuilding];

class PolicyDetails extends Component {


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: window.location.hash.replace('#', ''), cards: ["Healthcare", "War_on_Drugs", "Jobs", "Environment", "Transparency"] };
    console.log(window.location.hash);
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === event ? 0 : event });
  }

  render() {
    const {cards, collapse} = this.state;
    return (
      <div className="container policyHeaderWrapper">
          <h3 className="page-header">Policy and Issues</h3>
          <h6 className="page-header">Below are policy stances that Chance holds. If anything is missing, contact us and we will add it to the page as soon as possible.</h6>
          {cards.map((id, i) => {
            return (
              <div key={i} id={policy[i].title}>
              <Card>
                <CardHeader className={(i%2 ? 'background-light-blue':'background-light-red') + ' white policyCardHeader'} onClick={this.toggle} data-event={policy[i].title}>{policy[i].title.replace(/_/g, " ")}</CardHeader>
                <Collapse isOpen={collapse === id}>
                  <CardBody>
                    <p className="policyText">{policy[i].text}</p>
                    <Row className="align-items-center justify-content-around listWrapper">
                      <Col lg="6">
                          <div className="policyImages" style={{backgroundImage: `url(${imageList[i]})`}}></div>
                      </Col>
                      <Col lg="6">
                        <ul>
                         {
                           policy[i].list.map( (item, s) => {
                             return(
                               <li key={"li" + s}>{item}</li>
                             )
                           })
                         }
                       </ul>
                      </Col>
                    </Row>

                  </CardBody>
                </Collapse>
              </Card>
              </div>
            )
          })}

        </div>
    );
  }
}

export default PolicyDetails;
