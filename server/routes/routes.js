const ObjectId = require("mongodb").ObjectID;

const homepageController = require("../controllers/homepagedataController");
//const adminRegisterController = require("../controllers/adminLoginController");
const adminLoginController = require("../controllers/adminLoginController");
const addEmployeeController = require("../controllers/addEmployeeController");
const employeeLoginController = require("../controllers/employeeLoginController");
const employeeLogoutController = require("../controllers/employeeLogoutController");
const menuController = require("../controllers/menuController");
const tableController = require("../controllers/tableController");
const sessionController = require("../controllers/sessionController");
const parcelController = require("../controllers/parcelController");
const totalOrderController = require("../controllers/totalOrderController");
const showEmployeeController = require("../controllers/showEmployeeController");
const showItemController = require("../controllers/showItemController");
const billerHomeController = require("../controllers/billerHomeController");
const billerPaymentController = require("../controllers/billerPaymentController");
const kitchenController = require("../controllers/kitchenController");
const kitchenOrderController = require("../controllers/kitchenOrderController");
//const billerController = require("../controllers/billerController");
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

  //app.post("/admin-register",adminRegisterController);
  app.post("/admin-login", adminLoginController);

  app.post("/addemployee", addEmployeeController);

  app.post("/employee-login", employeeLoginController);
  app.post("/employee-logout",employeeLogoutController);

  app.get("/showemployees", showEmployeeController);

  app.route("/admin-waiters").get((req, res) => {
    res.send(waiters);
  });

  app.get("/admin-totalorders", totalOrderController);

  app.post("/additems", menuController);

  app.get("/showitems", showItemController);

  app.post("/admin-tables", tableController);

  app.post("/sessions", sessionController);

  app.post("/parcels", parcelController);

  app.get("/biller-home", billerHomeController);

  app.post("/biller-payment", billerPaymentController);

  app.post("/kitchens",kitchenController);
  app.get("/getkitchendata",kitchenOrderController.kitchenOrderGetController);
  app.post("/postkitchendata",kitchenOrderController.kitchenOrderPostController);

  app.get("/homepagedata",homepageController);
  //app.post('/billers',billerController.billerController);
  //app.get('/billerpaymentdetails',billerController.billerPaidController);
  
};

module.exports = routes;
