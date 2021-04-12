const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema({
    _id: { type: String },
    items: { type: Array },
    totalAmount: { type: Number },
    tableNo: { type: Number },
    waiterName: { type: String },
    billStatus:{type:String},
    orderStatus:{type:String},
    required_time:{type:String},
    created_at:{type:String}
  },
  {
    timestamps:true
  }
  );
  module.exports = mongoose.model("sessions", sessionSchema);