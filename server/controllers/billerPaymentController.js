let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
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
};
module.exports = billerPaymentController;
