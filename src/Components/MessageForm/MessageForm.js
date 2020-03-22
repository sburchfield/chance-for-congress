import React, { Component } from 'react';
import {Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import firebase from "../firebase/firebase";


import './MessageForm.css';


class MessageForm extends Component {

  constructor() {
    super();
    this.state = {
     message_email: "",
     message_full_name: "",
     message: "",
     messageTitle: "Message Me!",
     messageMessage: "Send me a direct message!"
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addMessage = e => {
    e.preventDefault();

    const db = firebase.firestore();

    const userRef = db.collection("messages").add({
      full_name: this.state.message_full_name,
      email: this.state.message_email,
      message: this.state.message
    }).then(() =>{
      this.setState({
        message_full_name: "",
        message_email: "",
        message: "",
        messageTitle: "Thanks!",
        messageMessage: "I look forward to reading what you have to say! I will respond to you as soon as I can."
      });
    })
    .catch(err => {
      this.setState({
        message_full_name: "",
        message_email: "",
        message: "",
        messageTitle: "Whoops",
        messageMessage: "Sorry! There was an error and you message did not go through. Please try again later."
      });
    });


  };

  render(){
    return (
      <div id="Contact" className="messageFormWrapper">
      <h3>{this.state.messageTitle}</h3>
      <p>{this.state.messageMessage}</p>
      <Row className="justify-content-center">
        <Form onSubmit={this.addMessage}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" name="message_full_name" id="message_full_name" placeholder="First and Last Name..." onChange={this.updateInput} value={this.state.message_full_name}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" name="message_email" id="message_email" placeholder="Email..." onChange={this.updateInput} value={this.state.message_email}/>
          </FormGroup>
          <FormGroup>
            <Label for="text">Message:</Label>
            <Input type="textarea" name="message" id="text" onChange={this.updateInput} value={this.state.message} />
          </FormGroup>
          <Button className="submit-btn">Submit</Button>
        </Form>
      </Row>
      </div>
    );
  }
}

export default MessageForm;
