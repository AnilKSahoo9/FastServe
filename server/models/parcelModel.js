const mongoose = require("mongoose");
const parcelSchema = new mongoose.Schema({
    _id:{type:String},
    items:{type:Array},
    totalAmount:{type:Number},
    billerName:{type:String},
    billStatus:{type:String},
    orderStatus:{type:String},
    required_time:{type:String}
});
module.exports = mongoose.model("parcels", parcelSchema);