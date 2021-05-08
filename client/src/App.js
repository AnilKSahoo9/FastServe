import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import PrivateRoute from "../src/components/shared/utils/PrivateRoute";

import React, { Suspense } from "react";
import NavBar from "./components/shared/NavBar/NavBar";
// import NavLinks from "./components/shared/NavLinks/NavLinks";
import SideBar from "./components/shared/SideBar/SideBar";
//import  BillerReport  from "./components/BillerPages/BillerReport";
// import { BillerWaiter } from "./components/BillerPages/BillerWaiter";
// import BillerKitchen from "./components/BillerPages/BillerKitchen";
import BillerHome from "./components/BillerPages/BillerHome";
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
// const BillerHome = React.lazy(() =>
//   import("./components/BillerPages/BillerHome")
// );
const BillerChat = React.lazy(() =>
  import("./components/BillerPages/BillerKitchen")
);
const BillerWaiter = React.lazy(() =>
  import("./components/BillerPages/BillerWaiter")
);
const BillerParcelOrder = React.lazy(() =>
  import("./components/BillerPages/BillerParceleOrder")
);
//kitchen dashboard
const KitchenHome = React.lazy(() =>
  import("./components/KitchenPages/KitchenHome.js")
);
const KitchenNotification = React.lazy(() =>
  import("./components/KitchenPages/notification")
);
const Kitchen_Chat = React.lazy(() =>
  import("./components/KitchenPages/KitchenChat")
);
//waiter dashboard
const Waiter_Place_Order = React.lazy(() =>
  import("./components/Waiterpages/PlaceOrder")
);
const Waiter_Notification = React.lazy(() =>
  import("./components/Waiterpages/Waiternotification")
);
const Waiter_Chat = React.lazy(() =>
  import("./components/Waiterpages/WaiterChat")
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
                <PrivateRoute path="/home" component={AdminHome} />
                <PrivateRoute path="/add-employee" component={AddEmployee} />
                <PrivateRoute path="/show-employees" component={ShowEmployee} />
                <PrivateRoute path="/waiters" component={AdminWaiter} />
                <PrivateRoute path="/total-orders" component={AdminTotalOrder} />
                <PrivateRoute path="/tables" component={AdminTable} />
                <PrivateRoute path="/add-items" component={AddItem} />
                <PrivateRoute path="/biller-home" component={BillerHome} />
                <PrivateRoute path="/biller-waiters" component={BillerWaiter} />
                <PrivateRoute path="/biller-parcel-order" component={BillerParcelOrder} />
                {/* <Route path="/biller-chat" component={BillerChat} /> */}
                {/* <Route path="/biller-report" component={BillerReport} /> */}
                <PrivateRoute path="/kitchen-home" component={KitchenHome} />
                <PrivateRoute
                  path="/kitchen-notification"
                  component={KitchenNotification}
                />
                {/* <Route
                  path="/kitchen-chat"
                  component={Kitchen_Chat}
                /> */}
                <PrivateRoute
                  path="/waiter-place-order"
                  component={Waiter_Place_Order}
                />
                <PrivateRoute
                  path="/waiter-notification"
                  component={Waiter_Notification}
                />
                {/* <Route
                  path="/waiter-chat"
                  component={Waiter_Chat}
                /> */}
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
