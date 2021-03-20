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
const NavBar = () => {
  return (
    <div className="navbar" style={{}}>
      <div className="text-right">
        {/* <Button color="danger mt-2 mx-2">LogOut</Button> */}
      </div>
    </div>
  );
};
export default NavBar;
