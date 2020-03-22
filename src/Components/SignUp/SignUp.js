import React, { Component } from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import firebase from "../firebase/firebase";


import './SignUp.css';


class SignUp extends Component {

  constructor() {
    super();
    this.state = {
     email: "",
     full_name: "",
     headerTitle: "Sign Up!",
     headerMessage: "Magna eget est lorem ipsum dolor sit amet consectetur. Vitae tempus quam pellentesque nec nam aliquam sem et tortor."
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addContact = e => {
    e.preventDefault();

    const db = firebase.firestore();

    const userRef = db.collection("contacts").add({
      full_name: this.state.full_name,
      email: this.state.email
    })
    .then(() => {
      this.setState({
        full_name: "",
        email: "",
        headerTitle: "Thanks!",
        headerMessage: "You have successfully signed up for our mailing list!"
      });
    })
    .catch(err => {

      console.log(err);
      this.setState({
        full_name: "",
        email: "",
        headerTitle: "Whoops!",
        headerMessage: "There was an error in signing you up. Please try again later."
      });
    });


  };

  render(){
    return (
      <div className="signUpWrapper background-blue white text-center">
        <h3>{this.state.headerTitle}</h3>
        <Row className=" justify-content-center">
            <p>{this.state.headerMessage}</p>
        </Row>
        <Form className="text-left" onSubmit={this.addContact}>
          <Row className="justify-content-center align-items-center">
            <Col xl="3">
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="full_name" id="name" placeholder="First and Last Name..." onChange={this.updateInput} value={this.state.full_name} />
              </FormGroup>
            </Col>
            <Col xl="3">
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" id="email" placeholder="Email..." onChange={this.updateInput} value={this.state.email} />
              </FormGroup>
            </Col>
            <Col xl="1" className="justify-self-center">
              <Button className="submit-btn">Submit!</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }

}

export default SignUp;
