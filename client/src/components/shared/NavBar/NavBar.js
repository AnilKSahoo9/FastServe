import React from "react";
import axios from "axios"
import { Button } from "reactstrap";
import "./NavBar.css";
import { useLocation, useHistory } from "react-router-dom";
import { getUserType, getUserName, removeUserSession } from "../utils/common";
import Swal from "sweetalert2";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const NavBar = (props) => {
  const userType = getUserType();
  const userName = getUserName();
  console.log(userName);
  const location = useLocation();
  const history = useHistory();
  const handleLogout = () => {
    if (userType === "admin") {
      removeUserSession();
      history.push("/")
    } else {
      Swal.fire({
        title: "Loging Out........",
        showDenyButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        icon: "info",
        // confirmButtonText: `Save`,
        // denyButtonText: `Don't save`,
        timer: 5000,
      });
      axios.post("http://localhost:4000/employee-logout/", { username: userName }).then(res => {
        if (res.status === 200) {
          console.log(res)
          removeUserSession();
          history.push("/")
        }

      }).catch(err => console.log(err))
    }

  }
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
            onClick={handleLogout}
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
            onClick={handleLogout}
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
            onClick={handleLogout}
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
            onClick={handleLogout}
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
