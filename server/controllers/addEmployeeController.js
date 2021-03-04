let employeeSchema = require('../models/employeeModel');
const bcrypt = require("bcrypt");
const addEmployeeController = (req,res) => {
    let { Type, Name, Email, Mobile, Username, Password, DOJ } = req.body;
    const employeeData = new employeeSchema({Name:Name,Email:Email,Username:Username,Type:Type,DOJ:DOJ,Mobile:Mobile,Password:Password});
    
    bcrypt.genSalt(10,(err,salt) => {
      bcrypt.hash(Password,salt,(err,hash) => {
        if(err){
          throw err;
        }
        employeeData.Password = hash;
        employeeData.save().then(response => {
          res.status(200).json({success: true,result: response})
        }).catch(err => {
          res.status(500).json({errors: [{ error: err }]});
        })
      })
    })
    // new employeeSchema(req.body).save();
    // res.send({status:200,msg:'successfully added employee details'});
}
module.exports = addEmployeeController;