const ObjectId = require("mongodb").ObjectID;

const homepageController = require("../controllers/homepagedataController");
const adminLoginController = require("../controllers/adminLoginController");
const addEmployeeController = require("../controllers/addEmployeeController");
const employeeLoginController = require("../controllers/employeeLoginController");
const menuController = require("../controllers/menuController");
const tableController = require("../controllers/tableController");
const sessionController = require("../controllers/sessionController");
const parcelController = require("../controllers/parcelController");
const totalOrderController = require("../controllers/totalOrderController");

const waiters = [
  {
    name: "Ashok kumar",
    status: "Active",
    tableno: "5",
    orderdetails: ["rice", "dal", "tandoor", "coldrink", "dry chana"],
  },
  {
    name: "vinod raj",
    status: "Active",
    tableno: "10",
    orderdetails: ["masala papad", "tandoor chiku", "paneer", "chhole"],
  },
  { name: "Akash sahu", status: "Inactive" },
  {
    name: "Sunil kumar",
    status: "Active",
    tableno: "7",
    orderdetails: ["rice", "dal", "mutton", "egg", "salad"],
  },
  { name: "Laxman hota", status: "Inactive" },
  { name: "Santosh panda", status: "Inactive" },
];

const routes = (app) => {
  // app
  //   .route("/homepagedata")
  //   .get((req, res) => res.send(Home))
  //   .post((req, res) => res.send("POST request successful!"));
  app.get("/admin-home", homepageController);

  // app.route('/login').post((req,res) =>
  // res.send(msg))
  //similar to above syntax
  // app.post('/login',(req,res) =>
  // res.send(msg))

  app.post("/admin-login", adminLoginController);

  app.post("/addemployee", addEmployeeController);

  app.post("/employee-login", employeeLoginController);

  app.route("/admin-waiters").get((req, res) => {
    res.send(waiters);
  });

  app.get("/admin-totalorders", totalOrderController);

  app.post("/additems", menuController);

  app.post("/admin-tables", tableController);

  app.post("/sessions", sessionController);

  app.post("/parcels", parcelController);

  //write showemployees code, end point is /showemployees

  //write showitems code, end point is /showitems
};

module.exports = routes;
