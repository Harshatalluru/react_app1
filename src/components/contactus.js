import React from "react";
import contactp from './contact.png'
import { Form,Button,FloatingLabel,Col,Row} from 'react-bootstrap'


const Contact = () =>{
    return(  
<div className="container">
          <img style={{height:"300px",width:"50%"}} src={contactp} alt="" /><span>
            
          <h1>Contact us</h1><br/>
<p>please note here just ask blah blah blah</p><br />
    <Form>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
      
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Username</Form.Label>
      <Form.Control type="Username" placeholder="Username" />
    </Form.Group>
    </Row>
      <FloatingLabel controlId="floatingTextarea2" label="Message">

    <Form.Control
      as="textarea"
      placeholder="Leave a Message here"
      style={{ height: '200px' }}
    />
  </FloatingLabel><br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        </span>
      
</div>
    )
}
export default Contact