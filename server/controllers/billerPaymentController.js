let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
let billerSchema = require("../models/billerModel");
const { v4: uuidv4 } = require("uuid");

const billerPaymentController =  (req, res) => {
  let { billStatus, orderType, orderId ,billerName} = req.body;
  let idM = uuidv4();
  orderType === "parcel"
    ?  parcelSchema.updateOne(
        { _id: orderId },
        { billStatus: billStatus },
        (err, doc) => {
          // if (err) {
          //   res.status(500).json({ msg: "error occured" });
          // }
          if (doc) {
            billerSchema.findOne({name:billerName},(err2,doc2) => {
              if(doc2){
                //console.log(doc2)
                billerSchema.updateOne({name:billerName},{ $push:{paid:orderId}},(err3,doc3) => {
                  //if(doc3){
                    //console.log(doc3)
                     res.status(200).json({ msg: "successful" });
                  //}
                });
              }
              else{
                new billerSchema({_id:idM,name:billerName,paid:orderId}).save();
                 res.status(200).json({msg:"ok"});
              }
            });
          }
        }
      )
    : null;

  orderType === "table"
    ?  sessionSchema.updateOne(
        { _id: orderId },
        { billStatus: billStatus },
        (err, doc) => {
          // if (err) {
          //   res.status(500).json({ msg: "error occured" });
          // }
          if (doc) {
            billerSchema.findOne({name:billerName},(err2,doc2) => {
              if(doc2){
                billerSchema.updateOne({name:billerName},{ $push:{paid:orderId}},(err3,doc3) => {
                     res.status(200).json({ msg: "successful" });
                });
              }
              else{
                new billerSchema({_id:idM,name:billerName,paid:orderId}).save();
                 res.status(200).json({msg:"ok"});
              }
            });
            //res.status(200).json({ msg: "successful" });
          }
        }
      )
    : null;
};
module.exports = billerPaymentController;
