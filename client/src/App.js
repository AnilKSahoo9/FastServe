import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import React, { Suspense } from "react";
import NavBar from "./components/shared/NavBar/NavBar";
import SideBar from "./components/shared/SideBar/SideBar";
import { BillerReport } from "./components/BillerPages/BillerReport";
import { BillerWaiter } from "./components/BillerPages/BillerWaiter";
import BillerKichen from "./components/BillerPages/BillerKichen";
import BillerHome from "./components/BillerPages/BillerHome";

const AdminHome = React.lazy(() => import("./components/AdminPages/AdminHome"));
const AddEmployee = React.lazy(() =>
  import("./components/AdminPages/AddEmployee")
);
const ShowEmployee = React.lazy(() =>
  import("./components/AdminPages/ShowEmployee")
);
const AdminWaiter = React.lazy(() =>
  import("./components/AdminPages/AdminWaiter")
);
const AdminTable = React.lazy(() =>
  import("./components/AdminPages/AdminTable")
);
const AddItem = React.lazy(() => import("./components/AdminPages/AddItem"));
// const BillerReport = React.lazy(() => import("./components/BillerPages/BillerReport"));
const AdminTotalOrder = React.lazy(() =>
  import("./components/AdminPages/AdminTotalOrder")
);

const App = () => {
  return (
    <div className="App">
      {/* <div style={{ background: "white" }}> */}
      <Router>
        <NavBar />
        <SideBar />
        <div className="content">
          <Suspense
            fallback={
              <div style={{ marginTop: "250px" }}>
                <ClipLoader color="black" loading={true} css={""} size={100} />
              </div>
            }
          >
            <Switch>
              <Route path="/" component={AdminHome} exact />
              <Route path="/addemployee" component={AddEmployee} exact />
              <Route path="/showemployee" component={ShowEmployee} exact />
              <Route path="/waiter" component={AdminWaiter} exact />
              <Route path="/totalorder" component={AdminTotalOrder} exact />
              <Route path="/table" component={AdminTable} exact />
              <Route path="/additems" component={AddItem} exact />
              <Route path="/billerHome" component={BillerHome} exact />
              <Route path="/billerWaiter" component={BillerWaiter} exact />
              <Route path="/billerKichen" component={BillerKichen} exact />
              <Route path="/billerReport" component={BillerReport} exact />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </div>
        {/* <Row>
            <Col md={3} style={{ paddingRight: "0px", paddingLeft: "-10px" }}>
            </Col>
            <Col md={9} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
              <Route path="/" component={Home} exact />
              <Route path="/AddUser" component={AddUser} exact />
              <Route path="/Showuser" component={Showuser} exact />
              <Route path="/Waiters" component={AdminWaiterPage} exact />
              <Route path="/TotalOrder" component={AdminTotalOrder} exact />
              <Route path="/Table" component={AdminTablePage} exact />
              <Route path="/itemDetails" component={AdminItem} exact />
            </Col>
          </Row> */}
      </Router>
      {/* </div> */}
    </div>
  );
};

export default App;
