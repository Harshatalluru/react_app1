import React from 'react'
import Error from './components/errorpage';
import Header from './components/header';
import Projects from './components/projects';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Body from './components/body';
import Contact from './components/contactus';
import Employees from './components/employees';
import  About  from './components/aboutus';



//<Header />
 //  <Body />
// <Nav>
// <Link to="/projects">Home</Link>
//
//</Nav>

function App() {
  return (
   
   <Router>
<Header />
 
     <Routes>
       <Route path="/" element={<Body /> } /> 
       <Route path="*" element={<Error />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/Employeesdata" element={<Employees />} />
       <Route path="/contactus" element={<Contact />} />
       <Route path="/about" element={<About />} />

       
      

     </Routes>
   </Router>
  );
}

export default App;
