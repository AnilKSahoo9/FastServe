import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { ListGroup, ListGroupItem } from "reactstrap";

export default props => {
   return (
         <Menu>
    <div style={{width:'100%'}}>
    <ListGroup style={{width:'100%'}}>
      <ListGroupItem
      
        color="warning"
        tag="a"
        href="/"
        action
      >
        Home
      </ListGroupItem>

      <ListGroupItem 
        color="warning"
        tag="a"
        href="/TotalOrder"
        action
      >
        Order
      </ListGroupItem>
      <ListGroupItem 
        color="warning"
        tag="a"
        href="/Table"
        action
      >
        Table
      </ListGroupItem>

      <ListGroupItem 
        color="warning"
        tag="a"
        href="/Waiters"
        action
      >
        Waiter
      </ListGroupItem>
      <ListGroupItem 
        color="warning"
        tag="a"
        href="/AddUser"
        action
      >
        AddUser
      </ListGroupItem>
      <ListGroupItem 
        color="warning"
        tag="a"
        href="/Showuser"
        action
      >
        ShowUser
      </ListGroupItem>
    </ListGroup>
    </div>
    </Menu>
  );
};
// export default Menu;





// import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
// import { ListGroup, ListGroupItem } from "reactstrap";

// export default props => {
//   return (
//     <Menu>
    
//     <ListGroupItems 
//          color="warning"
//          tag="a"
//          href="/"
//          action
//        >
//          Home
//        </ListGroupItems>
//       <a className="menu-item" href="/">
//         Home
//       </a>
//       <a className="menu-item" href="/Order">
//         Order
//       </a>
//       <a className="menu-item" href="/Waiter">
//         Waiter
//       </a>
//       <a className="menu-item" href="/Adduser">
//         AddUser
//       </a>
//       <a className="menu-item" href="/Showuser">
//         ShowUser
//       </a>
//     </Menu>
//   );
// };