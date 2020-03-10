import React from 'react';
import {Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'


import './ContactForm.css';


function ContactForm() {
  return (
    <div className="contactFormWrapper">
    <h3>Conact Us!</h3>
    <Row className="justify-content-center">
    <Form>
    <FormGroup>
    <Label for="name">Name:</Label>
    <Input type="text" name="name" id="name" placeholder="First and Last Name..." />
    </FormGroup>
    <FormGroup>
    <Label for="email">Email:</Label>
    <Input type="email" name="email" id="email" placeholder="Email..." />
    </FormGroup>
    <FormGroup>
    <Label for="text">Message:</Label>
    <Input type="textarea" name="text" id="text" />
    </FormGroup>
    <Button color="primary">Submit</Button>
    </Form>
    </Row>
    </div>
  );
}

export default ContactForm;
