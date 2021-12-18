import React from "react";
import office from './office.png'
import './style/body.css'
import { useState,useEffect } from "react";
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Body = () =>{
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setTimeout(() => setTime(new Date()), 1000);
      return () => clearTimeout(timer);
    });
    return(
       <div className="container">
<span>
    <img className="img" src={office} alt="" /></span>




<h1 style={{color:"blue"}}>{time.toLocaleTimeString()}</h1>


    <div className="para">
        <h1>HELLO WELCOME</h1>
<p>NOTHING NOTHING NOTHING NOTHING..........</p>
<Link to="/projects"><Button  variant="primary">Client</Button></Link>{' '}<span><Button variant="secondary">Developer</Button></span>
</div>
    </div>
    )}
 export default Body