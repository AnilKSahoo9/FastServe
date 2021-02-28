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
      <NavLink to="/Tables"className="table">Tables</NavLink>
    </li>
    <li>
      <NavLink to="/parcels"className="Order">Order</NavLink>
    </li>
    <li>
      <NavLink to="/waiter"className="waiter">Waiters</NavLink>
    </li>
    <li>
      <NavLink to="/kichens"className="kitchen">Kitchens</NavLink>
    </li>
    <li>
      <NavLink to="/billers"className="biller">Billers</NavLink>
    </li>
    <li>
      <NavLink to="/adduser"className="adduser">Adduser</NavLink>
    </li>
    <li>
      <NavLink to="/showuser"className="showuser">ShowUser</NavLink>
    </li>
  </ul>
  </div>
};

export default NavLinks;