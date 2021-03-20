import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBarHeader from "./SideBarHeader";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../HamburgerMenu/SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./SideBar.css";
// import logo from "../../../../image/Hotel.png";
const SideBar = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <SideBarHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <div style={{marginLeft:"17px", marginTop: "5px"}}>
            <Link to="/">Hotel </Link>
          </div>
          {/* <div className="logo">
                 { <img
                    variant="top"
                    src={logo}
                    alt="logo"
                    style={{ height: 40, }}
                  /> }
                  </div> */}
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </SideBarHeader>
    </React.Fragment>
  );
};

export default SideBar;
