let billerSchema = require("../models/billerModel");
let parcelSchema = require("../models/parcelModel");
let sessionSchema = require("../models/sessionModel");
const { v4: uuidv4 } = require("uuid");

const billerController = (req,res) => {
    let {billers} = req.body;
    let id = uuidv4();
    new billerSchema({_id:id,billers:billers,created_at:new Date()}).save();
    return res.status(200).json({msg:"ok"});
};
exports.billerController = billerController;
 
const billerPaidController = (req,res) => {
    parcelSchema.find({billStatus:"paid"},(err,doc) => {
        if(err){
            return res.status(500).json({msg:"no data"});
        }
        if(doc){
            //let newo = doc.map((z) => ({billerName:z.billerName,paid:[z._id]}));
            //console.log(newo);
            billerSchema.updateOne({},{ $set:{ billers:doc.map((z) => ({billerName:z.billerName,paid:[z._id]})) } },(err2,doc2) => {
                if(err2){
                    return res.status(500).json({msg:"no data"});
                }
                else{
                    
                    return res.status(200).json({msg:"success"});
                }
            });
        }
    })
};
exports.billerPaidController = billerPaidController;