let employeeSchema = require("../models/employeeModel");
const bcrypt = require("bcrypt");
const employeeLoginController = (req,res) => {
    let {Username,Password} = req.body;
    employeeSchema.findOne({Username:Username}).then((user) => {
      bcrypt.compare(Password,user.Password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({ msg: "incorrect password" });
        } else {
          return res.status(200).json({ msg: "successfully logged in" ,type:'employee'});
        }
      })
    })
}
module.exports = employeeLoginController;