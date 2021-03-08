const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  Name:  {
    type: String
  },
    Username: {
      type: String,
    },
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
    Type: {
      type: String,
    },
    DOJ: {
      type: String,
    },
    Mobile: {
      type: String,
    },
    Gender:{
      type:String
    },
    Documents:{
      type:Array
    }
  });
  module.exports = mongoose.model("employees", employeeSchema);