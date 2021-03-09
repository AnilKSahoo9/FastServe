let parcelSchema = require("../models/parcelModel");
const { v4: uuidv4 } = require("uuid");
const parcelController = (req,res) => {
    let {items,totalAmount,billerName} = req.body;
    let idP = uuidv4();
    new parcelSchema({_id:idP,items:items,totalAmount:totalAmount,billerName:billerName}).save();
    res.status(200).json({msg:'successfully added the parcel details'});
}
module.exports = parcelController;