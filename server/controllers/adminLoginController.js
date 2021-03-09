let adminSchema = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");
require("dotenv").config();
//const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const adminLoginController = (req,res) => {

    let { email, password } = req.body;

    // let errors = [];
    // if (!email) {
    //   errors.push({ email: "required" });
    // }

    // if (!emailRegexp.test(email)) {
    //   errors.push({ email: "invalid email" });
    // }

    // if (!password) {
    //   errors.push({ password: "required" });
    // }

    // if (errors.length > 0) {
    //   return res.status(422).json({ errors: errors });
    // }

    adminSchema
      .findOne({ email: email })
      .then((user) => {
        if (!user) {
           return res.status(404).json({ msg: "user not found" });
        } else {
         return bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (!isMatch) {
               return res.status(400).json({ msg: "incorrect password" });
              } else {
                let access_token = createJWT(user.email, user._id, 3600);
                //console.log(access_token);
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
                      return res.status(200).json({msg: "successfully logged in" ,type:"admin"
                        // success: true,
                        // token: access_token,
                        // message: user,
                      });
                    }
                  }
                );
              }
            });
        }
      }).catch((err) => {
        return res.status(500).json({msg:"authentication failed"})
      })
}

module.exports = adminLoginController;

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