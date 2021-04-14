import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import React, { Suspense } from "react";
import NavBar from "./components/shared/NavBar/NavBar";
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
// const BillerReport = React.lazy(() => import("./components/BillerPages/BillerReport"));
const AdminTotalOrder = React.lazy(() =>
  import("./components/AdminPages/AdminTotalOrder")
);
const Customer = React.lazy(() => import("./components/Customer/Customer"));
const CustomerData = React.lazy(() => import("./components/Customer/CustomerData"));


const KitchenDashbard = React.lazy(() =>
  import("./components/KitchenPages/KitchenDashbard.js")
);
const Tablepage = React.lazy(() =>
  import("./components/Waiterpages/Tablepage")
);
const Catagorypage = React.lazy(() =>
  import("./components/Waiterpages/Catagorypage")
);
const Listmenu = React.lazy(() =>
  import("./components/Waiterpages/Listmenu")
);
const App = () => {
  return (
    <div>
      <div className="gap" style={{width:"100% !important",height:"100% !important"}}>
      <BrowserRouter>
      <Switch>
      
      <Route path="/" exact component={Login} />
      
      </Switch>
      </BrowserRouter>
      </div>
    <div className="App">
    
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
              {/* <Route path="/" exact component={Login} /> */}
              <Route path="/home" component={AdminHome} exact />
              <Route path="/addemployee" component={AddEmployee} exact />
              <Route path="/showemployee" component={ShowEmployee} exact />
              <Route path="/waiter" component={AdminWaiter} exact />
              <Route path="/totalorder" component={AdminTotalOrder} exact />
              <Route path="/table" component={AdminTable} exact />
              <Route path="/additems" component={AddItem} exact />
              <Route path="/billerHome" component={BillerHome} exact />
              <Route path="/billerWaiter" component={BillerWaiter} exact />
              <Route path="/billerKitchen" component={BillerKitchen} exact />
              <Route path="/billerReport" component={BillerReport} exact />
              <Route path="/customer" component={Customer} exact />
              <Route path="/kitchenDashboard" component={KitchenDashbard} />
              <Route path="/notification" component={Notification} />
              <Route path="/Tablepage" component={Tablepage} />
              <Route path="/Catagorypage" component={Catagorypage} />
              <Route path="/Listmenu" component={Listmenu} />
              

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