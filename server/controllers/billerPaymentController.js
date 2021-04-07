let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
// let billerSchema = require("../models/billerModel");
// const { v4: uuidv4 } = require("uuid");

const billerPaymentController = async (req, res) => {
  let { billStatus, orderType, orderId } = req.body;

  orderType === "parcel"
    ? await parcelSchema.updateOne(
        { _id: orderId },
        { billStatus: billStatus },
        (err, doc) => {
          if (err) {
            res.status(500).json({ msg: "error occured" });
          }
          if (doc) {
            //console.log(doc);
            res.status(200).json({ msg: "successful" });
          }
        }
      )
    : null;

  orderType === "table"
    ? await sessionSchema.updateOne(
        { _id: orderId },
        { billStatus: billStatus },
        (err, doc) => {
          if (err) {
            res.status(500).json({ msg: "error occured" });
          }
          if (doc) {
            //console.log(doc);
            res.status(200).json({ msg: "successful" });
          }
        }
      )
    : null;

  // const checkBillerPresent = await billerSchema
  //   .findOne({ name: billerName })
  //   .exec();
  // console.log(checkBillerPresent);
  // if (checkBillerPresent) {
  //   await billerSchema.updateOne(
  //     { name: billerName },
  //     { $push: { paid: orderId } }
  //   );
  //   console.log("inside the if");
  // } else {
  //   new billerSchema({
  //     _id: id,
  //     paid: [orderId],
  //     created_at: new Date(),
  //   }).save();
  //   console.log("inside the else");
  // }
};
module.exports = billerPaymentController;
