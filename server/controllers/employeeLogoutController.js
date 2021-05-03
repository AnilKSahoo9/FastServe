let employeeSchema = require("../models/employeeModel");

const employeeLogoutController = (req,res) => {
let {username} = req.body;
employeeSchema.updateOne({username:username},{status:"absent"},(err,doc) =>{
    if(err){
        return res.status(500).json({msg:"error occured"});
    }
    if(doc){
    return res.status(200).json({msg:"successfully logged out"});
    }
});
};
module.exports = employeeLogoutController;