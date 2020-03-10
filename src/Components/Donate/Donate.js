import React from 'react';
import {Row, Button} from 'reactstrap'


import './Donate.css';


function Donate() {
  return (
    <Row className="donateWrapper background-red justify-content-center white">
        <h3>Header</h3>
        <p>Magna eget est lorem ipsum dolor sit amet consectetur. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Nibh praesent tristique magna sit amet. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Cursus mattis molestie a iaculis at erat pellentesque. Convallis posuere morbi leo urna. Vitae semper quis lectus nulla at volutpat diam ut. Sollicitudin tempor id eu nisl nunc.</p>
        <Button className="donate-btn">Donate</Button>
    </Row>
  );
}

export default Donate;
