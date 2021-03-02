import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <div className="Nav-bar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact className="home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/totalorder" className="table">
            Total Order
          </NavLink>
        </li>
        <li>
          <NavLink to="/table" className="Order">
            Table
          </NavLink>
        </li>
        <li>
          <NavLink to="/waiter" className="waiter">
            Waiters
          </NavLink>
        </li>
        <li>
          <NavLink to="/additems" className="kitchen">
            Add Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/addemployee" className="biller">
            Add Employee
          </NavLink>
        </li>
        <li>
          <NavLink to="/showemployee" className="adduser">
            Show Employee
          </NavLink>
        </li>
        {/* <li>
      <NavLink to="/showuser"className="showuser">ShowUser</NavLink>
    </li> */}
      </ul>
    </div>
  );
};

export default NavLinks;
