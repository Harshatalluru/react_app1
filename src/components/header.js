import React from "react";
import { useState } from "react";
import './style/header.css';
import logo from './logo.jpeg';
import auth from './auth.png'
import { Button,Navbar,Container,Nav,FormControl,Form,Offcanvas} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Header =()=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
     return(
        <div className="header">
        <Navbar bg="white" expand="lg">
        <Container fluid>
        <Navbar.Brand> 
          <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Nav.Link><Link to="/">Home</Link></Nav.Link>
              
              <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
              <Nav.Link><Link to="Employeesdata">Employees</Link></Nav.Link>
              <Nav.Link><Link to="/contactus">Contact us</Link></Nav.Link>
              <Nav.Link><Link to="/about">About us</Link></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="email"
                placeholder="Enter a username"
                
                className="me-2"
                aria-label="Search"
                required
              />
              <FormControl
                type="password"
                placeholder="enter a password"
                className="me-2"
                aria-label="Search"
                
                
                required
              />
              <Button type="submit"  variant="outline-primary ">Login</Button>{' '}
              <Button variant="danger" onClick={handleShow} className="me-6">
         Signup
       </Button>
       <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
           <Offcanvas.Title>
             Signup Form
           </Offcanvas.Title>
          
         </Offcanvas.Header>
         <Offcanvas.Body>
           <img style={{height:"300px",width:"100%"}} src={auth} alt=""  />
         <Form className="">
              <FormControl
                type="email"
                placeholder="Enter a Email"
                
                className="me-2"
                aria-label="Search"
                
                required 
              /><br />
              <FormControl
                type="email"
                placeholder="Enter a username"
                
                className="me-2"
                aria-label="Search"
                
                required 
              /><br />
              <FormControl
                type="password"
                placeholder="enter a password"
                className="me-2"
                aria-label="Search"
                
               
                required
              /><br />
              <FormControl
                type="password"
                placeholder="enter again password"
                className="me-2"
                aria-label="Search"
                
                
                required
              />


<br />
    
              <Button type="submit" variant="outline-primary">Signup</Button>{' '}</Form>
         </Offcanvas.Body>
       </Offcanvas>
            
            
            
            
            
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
   
    )}


export default Header