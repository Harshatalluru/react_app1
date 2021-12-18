import React from "react";
import './style/header.css'
import profile from './logo.jpeg'


const Projects = () =>{
return(
  <div>
    <center>
         <card className="card">
           <img  className="img1" src={profile} alt="" /><span>
             <h1>Chat Application</h1>
           </span>
         </card><br />
         <card className="card">
           <img  className="img1" src={profile} alt="" /><span>
             <h1>Music App</h1>  
           </span>
         </card>
         </center> 
  </div>
)
}

export default Projects