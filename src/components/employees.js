import React from "react";
import {Table} from 'react-bootstrap'
import emps from './emp.png'
const Employees = () =>{
const employeedata=[{
    'id':"1",
    "employeeName":"udaykumar",
    "Role":"software",
    "salary":"50k",
    "workingtime":"8 Hours/day"
},{
    'id':"2",
    "employeeName":"pavankumar",
    "Role":"UI/UX",
    "salary":"70k",
    "workingtime":"8 Hours/day" 
},{
    'id':"3",
    "employeeName":"Harish",
    "Role":"Fullstack",
    "salary":"90k",
    "workingtime":"8 Hours/day"
}]

    return(
    <div  className="container">
        <body style={{backgroundImage:{emps}}}>
        <img style={{height:"400px",width:"100%"}} src={emps} alt="" />
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>EmployeeName</th>
      <th>Role</th>
      <th>salary</th>
      <th>working(hours)</th>
    </tr>
  </thead>
  {
  employeedata.map((Employee)=>{  
       return( 

<tbody> 
    <tr>
        <td>{Employee.id}</td>
      <td>{Employee.employeeName}</td>
      <td>{Employee.Role}</td>
      <td>{Employee.salary}</td>
      <td>{Employee.workingtime}</td>
    </tr>
    </tbody>      
        )
        })}          
</Table>
</body>
    </div>
    )}
    export default Employees











 