const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema({
    _id: { type: String },
    items: { type: Array },
    totalAmount: { type: Number },
    tableNo: { type: Number },
    waiterName: { type: String },
    billStatus:{type:String}
  });
  module.exports = mongoose.model("sessions", sessionSchema);