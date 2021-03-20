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
        <li>
          <NavLink to="/billerHome" className="billerHome">
            Biller Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/billerWaiter" className="billerWaiter">
            Biller Waiter
          </NavLink>
        </li>
        <li>
          <NavLink to="/billerKichen" className="billerKichen">
            Biller Kichen
          </NavLink>
        </li>
        <li>
          <NavLink to="/billerReport" className="billerReport">
            Biller Report
          </NavLink>
        </li>

        <li>
          <NavLink to="/logout" className="logout">
            LogOut
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer" className="customer">
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink to="/kitchenDashboard" className="kitchenpage">
            Kitchen Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/notification" className="notification">
            Notification
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
