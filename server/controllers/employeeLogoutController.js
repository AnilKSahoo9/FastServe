let employeeSchema = require("../models/employeeModel");

const employeeLogoutController = (req,res) => {
let {name} = req.body;
employeeSchema.updateOne({name:name},{status:"absent"},(err,doc) =>{
    if(err){
        return res.status(500).json({msg:"error occured"});
    }
    if(doc){
    return res.status(200).json({msg:"successfully logged out"});
    }
});
};
module.exports = employeeLogoutController