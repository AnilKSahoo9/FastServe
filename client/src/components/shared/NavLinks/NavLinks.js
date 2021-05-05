import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import HomeIcon from "@material-ui/icons/Home";
import KitchenTwoToneIcon from "@material-ui/icons/KitchenTwoTone";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ChatIcon from "@material-ui/icons/Chat";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import VisibilityIcon from "@material-ui/icons/Visibility";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import { getUserType } from "../utils/common";
const NavLinks = (props) => {
  const userType = getUserType();
  console.log(userType);
  return (
    <div className="Nav-bar">
      <ul className="nav-links">
        {userType === "admin" && (
          <div>
            <li>
              <NavLink to="/home" className="home">
                <HomeIcon className="icons" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/total-orders" className="Order">
                <RoomServiceIcon className="icons" />
                Total Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/tables" className="table">
                <AirlineSeatReclineNormalIcon className="icons" />
                Tables
              </NavLink>
            </li>
            <li>
              <NavLink to="/waiters" className="waiter">
                <EmojiPeopleIcon className="icons" />
                Waiters
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-items" className="additem">
                <PostAddIcon className="icons" />
                Add Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-employee" className="adduser">
                <PersonAddIcon className="icons" />
                Add Employees
              </NavLink>
            </li>
            <li>
              <NavLink to="/show-employees" className="showuser">
                <GroupIcon className="icons" />
                Show Employees
              </NavLink>
            </li>
          </div>
        )}
        {userType === "biller" && (
          <div>
            <li>
              <NavLink to="/biller-home" className="billerHome">
                <HomeIcon className="icons" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/biller-waiters" className="billerWaiter">
                <EmojiPeopleIcon className="icons" />
                Waiter
              </NavLink>
            </li>
            <li>
              <NavLink to="/biller-chat" className="billerKitchen">
                <ChatIcon className="icons" />
                Chat
              </NavLink>
            </li>
            <li>
              <NavLink to="/biller-report" className="billerReport">
                <AssessmentIcon className="icons" />
                Report
              </NavLink>
            </li>
          </div>
        )}
        {userType === "chef" && (
          <div>
            <li>
              <NavLink to="/kitchen-home" className="kitchenpage">
                <KitchenTwoToneIcon className="icons" />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/kitchen-notification" className="notification">
                <NotificationsActiveIcon className="icons" />
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/kitchen-chat" className="kitchen_chat">
                <ChatIcon className="icons" />
                Chat
              </NavLink>
            </li>
          </div>
        )}
        {userType === "waiter" && (
          <div>
            <li>
              <NavLink to="/waiter-place-order" className="place_order">
                <RoomServiceIcon className="icons" />
                Place Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/waiter-notification" className="waiter_notification">
                <NotificationsActiveIcon className="icons" />
                Notification
              </NavLink>
            </li>
            <li>
              <NavLink to="/waiter-chat" className="waiter_chat">
                <ChatIcon className="icons" />
                Chat
              </NavLink>
            </li>
          </div>
        )}
        {/* <li>
          <NavLink to="/logout" className="logout">
            <ExitToAppIcon className="icons" />
            LogOut
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/customer" className="customer">
            <PersonIcon className="icons" />
            Customer
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default NavLinks;
// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./NavLinks.css";

// const NavLinks = (props) => {
//   return (

//     <div className="Nav-bar">
//       <ul className="nav-links">
//         <li>
//           <NavLink to="/" exact className="home">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/totalorder" className="table">
//             Total Order
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/table" className="Order">
//             Table
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/waiter" className="waiter">
//             Waiters
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/additems" className="kitchen">
//             Add Items
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/addemployee" className="biller">
//             Add Employee
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/showemployee" className="adduser">
//             Show Employee
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerHome" className="billerHome">
//             Biller Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerWaiter" className="billerWaiter">
//             Biller Waiter
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerKichen" className="billerKichen">
//             Biller Kichen
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerReport" className="billerReport">
//             Biller Report
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/logout" className="logout">
//             LogOut
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/customer" className="customer">
//             Customer
//           </NavLink>
//         </li>
//         <li>

// <li>
//   <NavLink to="/Tablepage"className="Tablepage">Tablepage</NavLink>
// </li>
// <li>
//   <NavLink to="/Catagorypage"className="Catagorypage">Catagorypage</NavLink>
// </li>
// <li>
//   <NavLink to="/Listmenu"className="Listmenu">Listmenu</NavLink>
// </li>

//         {/* <li>
//       <NavLink to="/showuser"className="showuser">ShowUser</NavLink>
//     </li> */}

//       <li>
//           <NavLink to="/billerHome" className="billerHome">
//             Biller Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerWaiter" className="billerWaiter">
//           Biller Waiter
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerKichen" className="billerKichen">
//             Biller Kichen
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/billerReport" className="billerReport">
//             Biller Report
//           </NavLink>
//         </li>

//         <li>
//       <NavLink to="/logout"className="logout">LogOut</NavLink>
//     </li>
//     <li>
//       <NavLink to="/customer"className="customer">Customer</NavLink>
//     </li><li>
//           <NavLink to="/kitchenDashboard" className="kitchenpage">
//             Kitchen Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/notification" className="notification">
//             Notification
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NavLinks;
