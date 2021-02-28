import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Redirect,
  Switch,Link} from "react-router-dom"
import Header from './components/Header';
import { Col, Container, Row, Toast} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import { Menu } from './components/Menu';
import Home from './components/Home';
import AddUser from './components/AddUser';
import Showuser from './components/Showuser';
//import Navbar from "./components/Navbar/Navbar";
//import Hotel from "./Hotel.png";
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom';

import Users from './components/user/pages/Users';
import NewPlace from './components/user/pages/Users'
//import UserPlaces from './components/places/pages/NewPlace';
import MainNavigation from './components/shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <Header />
    
      <MainNavigation />
      <main>
        <Switch>
          <Row >
       <Col md={4}> 
      
       </Col>
      <Col md={8}>
       <Route path="/" component={Home} exact />
       <Route path="/AddUser" component={AddUser} exact />
       <Route path="/Showuser" component={Showuser} exact />
       
       </Col>
     </Row>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

//function App() {
  // return (
  //   <div className="App">
  //     <Navbar />
  //   <Router>
    {/* <ToastContainer /> */}
//     {/* <Container  className="ml-0 mr-0"> */}
    // <Header />
    // <Row >
    //   <Col md={4}> 
    //   <Navbar />
    //    <Menu />
    //   </Col>
    //   <Col md={8}>
    //   <Route path="/" component={Home} exact />
    //   <Route path="/AddUser" component={AddUser} exact />
    //   <Route path="/Showuser" component={Showuser} exact />
    //   </Col>
    // </Row>
//     {/* </Container> */}
//     </Router>
//    </div>
//   );
//  }
// export default App;

// import React from "react";
// import "./App.css";
// import AdminDashboard from "./pages/adminDashboard.js";
// const App = () => {
//   return <AdminDashboard />;
// 
export default App;

// import React from "react";
// import "./App.css";
// import AdminDashboard from "./pages/adminDashboard.js";
// const App = () => {
//   return <AdminDashboard />;
// };
// export default App;

// import Greet from './components/functionalcomp.js'
// import Welcome from './components/classcomp'
// import Message from './components/message'
// import Counter from './components/counter'
// import Functiongreet from './components/Header'
// import Form from './components/formfun'
// import Adduser from './components/Adduser';
