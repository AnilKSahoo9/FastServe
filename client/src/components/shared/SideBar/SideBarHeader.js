import React from "react";

import "./SideBarHeader.css";

const SideBarHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default SideBarHeader;
