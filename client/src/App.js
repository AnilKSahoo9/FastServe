// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom" 

import Header from './components/Header';
import { Col, Container, Row, Toast} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import { Menu } from './components/Menu';
import Home from './components/Home';
import AddUser from './components/AddUser';
import Showuser from './components/Showuser';
function App() {
  return (
    <div className="App">
    <Router>
    {/* <ToastContainer /> */}
    {/* <Container  className="ml-0 mr-0"> */}
    <Header />
    <Row >
      <Col md={4}>
       <Menu />
      </Col>
      <Col md={8}>
      <Route path="/" component={Home} exact />
      <Route path="/AddUser" component={AddUser} exact />
      <Route path="/Showuser" component={Showuser} exact />
      </Col>
    </Row>
    {/* </Container> */}
    </Router>
   </div> 
  );
 }
export default App;




// import Greet from './components/functionalcomp.js'
// import Welcome from './components/classcomp'
// import Message from './components/message'
// import Counter from './components/counter'
// import Functiongreet from './components/Header'
// import Form from './components/formfun'
// import Adduser from './components/Adduser';
{/* <toastcontainer />
    <Functiongreet greet="Login page"/>
    <Form/>
    <Adduser/> */}


// import Calc from './components/Calc';
// import Addnum from './components/Addnum';
 {/* <Addnum />
      <Calc /> */}