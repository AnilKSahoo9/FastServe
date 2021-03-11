let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
const billerPaymentController = async(req,res) => {
    let {sessionNo,billStatus,orderType,parcelNo} = req.body;
    orderType === 'parcel' ? await parcelSchema.updateOne({_id:parcelNo},{billStatus:'paid'},(err,doc) => {
        if(err){
            res.status(500).json({msg:'error occured'})
        }
        if(doc){
            //console.log(doc);
            res.status(200).json({msg:'successful'});
        }
    }) : null;

    orderType === 'table' ? await sessionSchema.updateOne({_id:sessionNo},{billStatus:'paid'},(err,doc) => {
        if(err){
            res.status(500).json({msg:'error occured'})
        }
        if(doc){
            //console.log(doc);
            res.status(200).json({msg:'successful'});
        }
    }) : null;
}
module.exports = billerPaymentController;
