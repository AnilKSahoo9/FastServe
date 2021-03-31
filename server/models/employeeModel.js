const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name:  {
    type: String
  },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    type: {
      type: String,
    },
    doj: {
      type: String,
    },
    mobile: {
      type: String,
    },
    gender:{
      type:String
    },
    documents:{
      type:Array
    },
    status:{type:String},
    created_at:{type:String},
    login_time:{type:Array},
    logout_time:{type:Array}
  });
  module.exports = mongoose.model("employees", employeeSchema);