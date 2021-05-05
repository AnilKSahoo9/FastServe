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
//import  BillerReport  from "./components/BillerPages/BillerReport";
// import { BillerWaiter } from "./components/BillerPages/BillerWaiter";
// import BillerKitchen from "./components/BillerPages/BillerKitchen";
// import BillerHome from "./components/BillerPages/BillerHome";
// import Customer from "./components/BillerPages/Customer";
// import Login from "./components/login/Login";
const Login = React.lazy(() => import("./components/login/Login"));
//admin dashboard
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
const AdminTotalOrder = React.lazy(() =>
  import("./components/AdminPages/AdminTotalOrder")
);
//biller dashboard
const BillerReport = React.lazy(() =>
  import("./components/BillerPages/BillerReport")
);
const BillerHome = React.lazy(() =>
  import("./components/BillerPages/BillerHome")
);
const BillerChat = React.lazy(() =>
  import("./components/BillerPages/BillerKitchen")
);
const BillerWaiter = React.lazy(() =>
  import("./components/BillerPages/BillerWaiter")
);
//kitchen dashboard
const KitchenHome = React.lazy(() =>
  import("./components/KitchenPages/KitchenHome.js")
);
const KitchenNotification = React.lazy(() =>
  import("./components/KitchenPages/notification")
);
//waiter dashboard
const Waiter_Place_Order = React.lazy(() =>
  import("./components/Waiterpages/PlaceOrder")
);
const Waiter_Notification = React.lazy(() =>
  import("./components/Waiterpages/Waiternotification")
);
//customer dashboard
const Customer = React.lazy(() => import("./components/Customer/Customer"));

// import Notification from "./components/KitchenPages/notification";


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
                    color="#1f305e"
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
                <Route path="/add-employee" component={AddEmployee} />
                <Route path="/show-employees" component={ShowEmployee} />
                <Route path="/waiters" component={AdminWaiter} />
                <Route path="/total-orders" component={AdminTotalOrder} />
                <Route path="/tables" component={AdminTable} />
                <Route path="/add-items" component={AddItem} />
                <Route path="/biller-home" component={BillerHome} />
                <Route path="/biller-waiters" component={BillerWaiter} />
                <Route path="/biller-chat" component={BillerChat} />
                <Route path="/biller-report" component={BillerReport} />
                <Route path="/kitchen-home" component={KitchenHome} />
                <Route
                  path="/kitchen-notification"
                  component={KitchenNotification}
                />
                <Route
                  path="/waiter-place-order"
                  component={Waiter_Place_Order}
                />
                <Route
                  path="/waiter-notification"
                  component={Waiter_Notification}
                />
                <Route path="/customer" component={Customer} />
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
