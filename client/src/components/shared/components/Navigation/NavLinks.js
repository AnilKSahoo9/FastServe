import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';


const NavLinks = props => {
  return <div className="Nav-bar">
   <ul className="nav-links">
    <li>
      <NavLink to="/" exact className="home">Home</NavLink>
    </li>
    <li>
      <NavLink to="/TotalOrder"className="table">Order</NavLink>
    </li>
    <li>
      <NavLink to="/Table"className="Order">Table</NavLink>
    </li>
    <li>
      <NavLink to="/Waiters"className="waiter">Waiters</NavLink>
    </li>
    <li>
      <NavLink to="/itemDetails"className="kitchen">Add Item</NavLink>
    </li>
    <li>
      <NavLink to="/AddUser"className="biller">AddUser</NavLink>
    </li>
    <li>
      <NavLink to="/Showuser"className="adduser">ShowUser</NavLink>
    </li>
    {/* <li>
      <NavLink to="/showuser"className="showuser">ShowUser</NavLink>
    </li> */}
  </ul>
  </div>
};

export default NavLinks;