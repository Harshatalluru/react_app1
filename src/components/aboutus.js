import { Card, Row } from "react-bootstrap";
import imgs from './avatar.png'

const About =() =>  {
        return(
      <div className="container">
     
<Row>
      <Card style={{height:"300px",width:"200px",margin:"20px"}}>
        <img src={imgs} alt="" />
        <p style={{margin:"50px"}}>FOUNDER</p>
      </Card>
      <Card style={{height:"300px",width:"200px",margin:"20px"}}>
        <img src={imgs} alt="" />
        <p style={{margin:"50px"}}>CO-FOUNDER</p>
      </Card>
      <Card style={{height:"300px",width:"200px",margin:"20px"}}>
        <img src={imgs} alt="" />
        <p style={{margin:"50px"}}>Manager</p>
      </Card>
      <Card style={{height:"300px",width:"200px",margin:"20px"}}>
        <img src={imgs} alt="" />
        <p style={{margin:"50px"}}>CEO</p>
      </Card>    
</Row>
            </div>
        )
    }
export default About;