let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
const kitchenNotificationController = async(req,res) => {
    var sessionOrdersPending = [];
    var parcelOrdersPending = [];
    await sessionSchema.find({orderStatus:"pending"},(err,doc) => {
        if(doc){
            sessionOrdersPending = doc;
        }
        else{
            console.log("NO ORDER PENDING IN SESSION,,for kitchenNotf");
        }
    });
    await parcelSchema.find({orderStatus:"pending"},(err,doc) => {
        if(doc){
            parcelOrdersPending = doc;
        }
        else{
            console.log("NO ORDER PENDING IN SESSION,,for kitchenNotf");
        }
        res.status(200).json({sessionOrdersPending,parcelOrdersPending})
    });
}
module.exports = kitchenNotificationController;