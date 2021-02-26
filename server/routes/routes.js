let employeeSchema = require("../models/model");
let menuSchema = require("../models/model");

const Home = {
  Tables: 10,
  Parcels: 9,
  Kitchens: 10,
  Waiters: 14,
  Billers: 10,
  Customers: 30,
};

const Loginmsg = { status: 200, msg: "login successful" };
const employeemsg = { msg: "employee added", status: 200 };

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
  app
    .route("/homepagedata")
    .get((req, res) => res.send(Home))
    .post((req, res) => res.send("POST request successful!"));

  // app.route('/login').post((req,res) =>
  // res.send(msg))
  //similar to above syntax
  // app.post('/login',(req,res) =>
  // res.send(msg))

  app.route("/login").post((req, res) => {
    let { email, password } = req.body;
    res.send(Loginmsg);
  });

  app.route("/addemployee").post((req, res) => {
    let { Type, Name, Email, Mobile, Username, Password, DOJ } = req.body;
    new employeeSchema(req.body).save();
    //console.log(req.body);
    res.send(employeemsg);
  });

  app.route("/waiters").get((req, res) => {
    res.send(waiters);
  });

  app.route("/menu").post((req,res) => {
    let {breakfast,dessert,rice,dal,nonveg,veg} = req.body;
    new menuSchema(req.body).save();
    res.send({status:200,msg:"successfully added to database"});
    //console.log(req.body);
  })
};

module.exports = routes;
