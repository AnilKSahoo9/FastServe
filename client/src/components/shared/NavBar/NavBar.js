// import React from 'react'
// import {Button } from 'reactstrap'
// const Header = () => {
//     return (
//         <div style ={{backgroundColor:"yellow"}}>
//         <div className="text-right">

//             <h5 className="text-left ">Smart Beanary</h5>
//             <Button    color="primary"></Button>LogOut

//             <hr></hr>
//         </div>
//         </div>

//     )
// }
// export default Header
import React from "react";
import { Button } from "reactstrap";
import "./NavBar.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const NavBar = () => {
  const location = useLocation();

  return (
    location.pathname !== "/" && (
      <div className="navbar" style={{}}>
        <div className="text-right">
        </div>
        <Button  className="logoutbtn" color="danger mb-5">Logout</Button>
      </div>
    )
  );
};
export default NavBar;
