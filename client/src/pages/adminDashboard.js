import React from "react";
import "../css/admin.css";
import AdminWaiterPage from "../component/adminWaiterPage";
import AdminTotalOrder from "../component/adminTotalOrder";

const AdminDashboard = () => {
  return (
    <>
      {/* navbar */}
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Smart-Beanery
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </nav>
      {/* sidebar */}
      <div class="wrapper">
        <nav class="sidebar">
          <ul class="list-unstyled components">
            <li class="active">
              <a href="#homeSubmenu">
                <i class="fas fa-home"></i>
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-briefcase"></i>
                About
              </a>
            </li>
            <li>
              <a href="#pageSubmenu">
                <i class="fas fa-copy"></i>
                Pages
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* pagecontent */}
      <div class="main">
        <AdminTotalOrder />
      </div>
    </>
  );
};

export default AdminDashboard;
