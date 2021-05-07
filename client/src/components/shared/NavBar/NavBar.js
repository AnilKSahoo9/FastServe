import React from "react";
import { Button } from "reactstrap";
import "./NavBar.css";
import { useLocation, useHistory } from "react-router-dom";
import { getUserType } from "../utils/common";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const NavBar = (props) => {
  const userType = getUserType();
  console.log(userType);
  const location = useLocation();
  const history = useHistory();
  return (
    location.pathname !== "/" && (
      <div className="navbar">
      {userType === "admin" && (<> 
      <div className="dashboard_name">
      <strong>Admin DashBoard</strong> 
      </div>
      
        <Button
          className="logoutbtn"
          color="danger mb-0"
          onClick={() => history.push("/")}
        >
          Logout
        </Button>
       </>
      )}
      {userType === "biller" && (<> 
      <div className="dashboard_name">
      <strong>Biller DashBoard</strong> 
      </div>
      
        <Button
          className="logoutbtn"
          color="danger mb-0"
          onClick={() => history.push("/")}
        >
          Logout
        </Button>
       </>
      )}
      {userType === "chef" && (<> 
      <div className="dashboard_name">
      <strong>Kitchen DashBoard</strong> 
      </div>
      
        <Button
          className="logoutbtn"
          color="danger mb-0"
          onClick={() => history.push("/")}
        >
          Logout
        </Button>
       </>
      )}
      {userType === "waiter" && (<> 
      <div className="dashboard_name">
      <strong>Waiter DashBoard</strong> 
      </div>
      
        <Button
          className="logoutbtn"
          color="danger mb-0"
          onClick={() => history.push("/")}
        >
          Logout
        </Button>
       </>
      )}
      
      </div>
    )
  );
};
export default NavBar;
