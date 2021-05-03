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
// import NavLinks from "./components/shared/NavLinks/NavLinks";
import SideBar from "./components/shared/SideBar/SideBar";
import { BillerReport } from "./components/BillerPages/BillerReport";
import { BillerWaiter } from "./components/BillerPages/BillerWaiter";
import BillerKitchen from "./components/BillerPages/BillerKitchen";
import BillerHome from "./components/BillerPages/BillerHome";
// import Customer from "./components/BillerPages/Customer";
import Login from "./components/login/Login";
import Notification from "./components/KitchenPages/notification";
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
//const BillerReport = React.lazy(() => import("./components/BillerPages/BillerReport"));
const AdminTotalOrder = React.lazy(() =>
  import("./components/AdminPages/AdminTotalOrder")
);
const Customer = React.lazy(() => import("./components/Customer/Customer"));

const KitchenHome = React.lazy(() =>
  import("./components/KitchenPages/KitchenHome.js")
);
const Waiter_Place_Order = React.lazy(() =>
  import("./components/Waiterpages/PlaceOrder")
);

const App = () => {
  return (
    <div>
      <div className="App">
        <Router>
          <NavBar />
          <SideBar />
          <div className="content">
            <Suspense
              fallback={
                <div style={{ marginTop: "250px" }}>
                  <ClipLoader
                    color="white"
                    loading={true}
                    css={""}
                    size={100}
                  />
                </div>
              }
            >
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={AdminHome} />
                <Route path="/addemployee" component={AddEmployee} />
                <Route path="/showemployee" component={ShowEmployee} />
                <Route path="/waiter" component={AdminWaiter} />
                <Route path="/totalorder" component={AdminTotalOrder} />
                <Route path="/table" component={AdminTable} />
                <Route path="/additems" component={AddItem} />
                <Route path="/billerHome" component={BillerHome} />
                <Route path="/billerWaiter" component={BillerWaiter} />
                <Route path="/billerKitchen" component={BillerKitchen} />
                <Route path="/billerReport" component={BillerReport} />
                <Route path="/customer" component={Customer} />
                <Route path="/kitchenhome" component={KitchenHome} />
                <Route path="/kitchen-notification" component={Notification} />
                <Route path="/placeorder" component={Waiter_Place_Order} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
