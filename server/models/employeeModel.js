const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    Username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
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
  });
  module.exports = mongoose.model("employees", employeeSchema);