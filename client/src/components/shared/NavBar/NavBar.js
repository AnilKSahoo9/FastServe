import React from "react";
import { Button } from "reactstrap";
import "./NavBar.css";
import { useLocation, useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const NavBar = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    location.pathname !== "/" && (
      <div className="navbar">
        <div className="text-right"></div>
        <Button
          className="logoutbtn"
          color="danger mb-5"
          onClick={() => history.push("/")}
        >
          Logout
        </Button>
      </div>
    )
  );
};
export default NavBar;
