const mongoose = require("mongoose");
const billerSchema = new mongoose.Schema({
  _id: { type: String },
  // billers:{type:Array},
  name: { type: String },
  paid: { type: Array },
  created_at: { type: String },
});
module.exports = mongoose.model("billers", billerSchema);
