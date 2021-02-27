import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import { Col, Container, Row, Toast } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Menu } from "./components/Menu";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Showuser from "./components/Showuser";
import AdminWaiterPage from "./components/adminWaiterPage";
import AdminTotalOrder from "./components/adminTotalOrder";
import Logopart from "./logopart";
import AdminItem from "./components/adminItem";
import Navbar1 from './components/Navbar/Navbar';
import AdminTablePage from './components/adminTablePage';
function App() {
  return (
    <div className="App" id="outer-container">
    <div style={{background:"white"}}>
      {/* <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      <Router>
         {/* <Header />  */}
         
        <Row>
          <Col md={3} style={{paddingRight:"0px",paddingLeft:"0px"}}>
          <Logopart /> 
            {/* <Menu /> */}
            <Navbar1 />
          </Col>
          <Col md={9} style={{paddingRight:"0px",paddingLeft:"0px"}}>
          <Header /> 
            <Route path="/" component={Home} exact />
            <Route path="/AddUser" component={AddUser} exact />
            <Route path="/Showuser" component={Showuser} exact />
            <Route path="/Waiters" component={AdminWaiterPage} exact />
            <Route path="/TotalOrder" component={AdminTotalOrder} exact />
            <Route path="/Table" component={AdminTablePage} exact />
            <Route path="/itemDetails" component={AdminItem} exact />
          </Col>
        </Row>
        
        
      </Router>
      </div>
    </div>
  );
}
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
