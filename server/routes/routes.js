let employeeSchema = require("../models/model");
let menuSchema = require("../models/model");
let tableSchema = require("../models/tableModel");
let adminSchema = require("../models/model");
let sessionSchema = require("../models/model");
const table = require("../models/model");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectID;
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const mongoose = require("mongoose");

const Home = {
  Tables: 10,
  Parcels: 9,
  Kitchens: 10,
  Waiters: 14,
  Billers: 10,
  Customers: 30,
};

//const Loginmsg = { status: 200, msg: "login successful" };
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

    let errors = [];
    if (!email) {
      errors.push({ email: "required" });
    }

    if (!emailRegexp.test(email)) {
      errors.push({ email: "invalid email" });
    }

    if (!password) {
      errors.push({ password: "required" });
    }

    if (errors.length > 0) {
      return res.status(422).json({ errors: errors });
    }

    adminSchema
      .findOne({ email: email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ msg: "user not found" });
        } else {
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (!isMatch) {
                res.status(400).json({ msg: "incorrect password" });
              } else {
                return res.send({ msg: "successfully logged in" });
              }

              let access_token = createJWT(user.email, user._id, 3600);
              console.log(access_token);
              //let access_token = jwt.sign({email:user.email,id:user._id},process.env.TOKEN_SECRET,{expiresIn:3600});
              //console.log(access_token);
              jwt.verify(
                access_token,
                process.env.TOKEN_SECRET,
                (err, decoded) => {
                  if (err) {
                    return res.status(500);
                  }

                  if (decoded) {
                    return res.status(200).json({
                      success: true,
                      token: access_token,
                      message: user,
                    });
                  }
                }
              );
            })
            .catch((err) => {
              return res.status(500).json({ errors: err });
            });
        }
      })
      .catch((err) => {
        return res.status(500).json({ errors: err });
      });
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

  app.route("/menu").post((req, res) => {
    let { breakfast, dessert, rice, dal, nonveg, veg } = req.body;
    new menuSchema(req.body).save();
    res.send({ status: 200, msg: "successfully added to database" });
    //console.log(req.body);
  });

  app.route("/table").post((req, res) => {
    console.log(req.body);
    // var query = tableSchema.find({});
    // console.log(query);
    let { tableNo, noOfTables } = req.body;
    for (i = 0; i < noOfTables; i++) {
      let tables = new tableSchema({
        tableNo: Number(tableNo) + i,
        session: [],
        tableStatus: null,
      });
      tables.save();
    }
    res.send({ status: 200, msg: "successfully created tableschema and data" });
  });
  // const User = mongoose.model("tables", {
  //   // name: { type: String },
  //   // age: { type: Number },
  //   tableNo: { type: Number },
  //   session: { type: Array },
  //   tableStatus: { type: String },
  // });
  app.route("/sessions").post(async (req, res) => {
    let { items, totalAmount, tableNo, waiterName } = req.body;
    console.log(req.body);
    // let idB = uuidv4();
    tableSchema.updateOne(
      { tableNo: tableNo },
      { tableStatus: "active" },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );
    // try {
    //   user = await new Promise((resolve, reject) => {
    //     tableSchema.updateOne(
    //       { tableNo: tableNo },
    //       { tableStatus: "active" },
    //       { upsert: true, new: true },
    //       (error, obj) => {
    //         if (error) {
    //           console.error(JSON.stringify(error));
    //           return reject(error);
    //         }

    //         resolve(obj);
    //       }
    //     );
    //   });
    // } catch (error) {
    //   /* set the world on fire */
    // }
    // console.log(user);
    // // tableSchema.updateOne(
    // //   { tableNo: tableNo },
    // //   { tableStatus: "active" },
    // //   // { new: true },
    // //   { returnOriginal: false },
    // //   function (err, docs) {
    // //     if (err) {
    // //       console.log(err);
    // //     } else {
    // //       console.log("Updated Docs : ", docs);
    // //     }
    // //   }
    // // );

    res.send("success");
  });
};

// app.route("/signup").post((req,res) => {
//   let {email,password} = req.body;
//   adminSchema.findOne({email:email}).then(user => {
//     if(user){
//       return res.status(422).json({ errors: [{ user: "email already exists" }] });
//    }
//    else{
//     const user = new adminSchema({
//       email: email,
//       password: password,
//     });
//     bcrypt.genSalt(10,(err,salt) => {
//       bcrypt.hash(password,salt,(err,hash) => {
//         if(err){throw err}
//         user.password = hash;
//         user.save().then(response => {
//           res.status(200).json({
//             success: true,
//             result: response})
//         }).catch(err => {
//           res.status(500).json({errors: [{ error: err }]});
//         });
//       });
//     });
//    }
//   }).catch(err => {
//     res.status(500).json({errors: [{ error: 'Something went wrong' }]});
//   })
// })

// const query = {"tableNo":tableNo};
// const projection = {"tableStatus":null};
// return tableSchema.findOne(query,projection).then(result => {
//   if(result){
//     console.log(`success: ${result}`)
//   }
//   else{
//     console.log(`fail`)
//   }
//   return result;
// }).catch(err => console.error(`failed to find doc: ${err}`));

// tableSchema.find().forEach(element => {
//   var z = sessionSchema.findOne({tableNo:element.tableNo});
//   if(z != null){
//     element.session = z.ID;
//     tableSchema.save(element);
//   }
// });

// tableSchema.find().then((item) => {
//   item.forEach((element) => {
//     var z = sessionSchema.findOne({tableNo:element.tableNo});
//     if(z != null){
//       element.session = z.ID;
//       tableSchema.save();
//     }
//     else{
//       throw console.error();
//     }
//   })
// });

module.exports = routes;
