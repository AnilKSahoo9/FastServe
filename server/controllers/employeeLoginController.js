let employeeSchema = require("../models/employeeModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createJWT } = require("../utils/auth");
require("dotenv").config();
const employeeLoginController = (req,res) => {
    let {username,password} = req.body;
    // employeeSchema.findOne({username:username}).then((user) => {
    //   bcrypt.compare(password,user.password).then((isMatch) => {
    //     if (!isMatch) {
    //       return res.status(400).json({ msg: "incorrect password" });
    //     } else {
    //       employeeSchema.updateOne({username:username},{status:"present"},(err,doc) => {
    //         if(doc){
    //         return res.status(200).json({ msg: "successfully logged in" ,type:user.type});
    //         }
    //       });
          
    //     }
    //   })
    // })

    employeeSchema.findOne({username:username}).then((user) => {
      if(user){
        bcrypt.compare(password,user.password).then((isMatch) => {
          if(!isMatch){
            return res.status(400).json({ msg: "incorrect password" });
          }
          else{
            employeeSchema.updateOne({username:username},{status:"present"},(err,doc) => {
              if(doc){
                let access_token = createJWT(user.username, user._id, 3600);
                jwt.verify(
                  access_token,
                  process.env.TOKEN_SECRET,
                  (err, decoded) => {
                    if (err) {
                      return res.status(500);
                    }
    
                    if (decoded) {
                      return res.status(200).json({
                        msg: "successfully logged in",
                        type: user.type,
                        token: access_token,
                        // message: user,
                      });
                    }
                  }
                );
                //return res.status(200).json({ msg: "successfully logged in" ,type:user.type,username:user.username});
              }
            });
          }
        });
      }
      else{
        return res.status(500).json({msg:"invalid username"})
      }
    });
}
module.exports = employeeLoginController;