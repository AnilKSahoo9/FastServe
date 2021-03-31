let employeeSchema = require("../models/employeeModel");
const bcrypt = require("bcrypt");
const employeeLoginController = (req,res) => {
    let {username,password} = req.body;
    employeeSchema.findOne({username:username}).then((user) => {
      bcrypt.compare(password,user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({ msg: "incorrect password" });
        } else {
          employeeSchema.updateOne({username:username},{status:"present"},(err,doc) => {
            if(doc){
            return res.status(200).json({ msg: "successfully logged in" ,type:user.type});
            }
          });
          
        }
      })
    })
}
module.exports = employeeLoginController;