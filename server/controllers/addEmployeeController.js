let employeeSchema = require("../models/employeeModel");
const bcrypt = require("bcrypt");
const addEmployeeController = (req, res) => {
  let {
    type,
    name,
    email,
    mobile,
    username,
    password,
    doj,
    gender,
    documents,
  } = req.body;
  const employeeData = new employeeSchema({
    name: name,
    email: email,
    username: username,
    type: type,
    doj: doj,
    mobile: mobile,
    password: password,
    gender: gender,
    documents: documents,
    created_at: new Date(),
    status: "absent",
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      employeeData.password = hash;
      employeeData
        .save()
        .then((response) => {
          res.status(200).json({ status: 200, result: response });
        })
        .catch((err) => {
          res.status(500).json({ errors: [{ error: err }] });
        });
    });
  });
  // new employeeSchema(req.body).save();
  // res.send({status:200,msg:'successfully added employee details'});
};
module.exports = addEmployeeController;
