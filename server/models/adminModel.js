const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    created_at:{type:String}
  });
  module.exports = mongoose.model("admins", adminSchema);