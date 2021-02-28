const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

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

const menuSchema = new mongoose.Schema({
  breakfast: { type: Array },
  dessert: { type: Array },
  rice: { type: Array },
  dal: { type: Array },
  nonveg: { type: Object },
  veg: { type: Object },
});

// const tableSchema = new mongoose.Schema({
//   tableNo:{type:Number},
//   session:{type:Array},
//   tableStatus:{type:String}
// });

const adminSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

const sessionSchema = new mongoose.Schema({
  _id: { type: String },
  items: { type: Array },
  totalAmount: { type: Number },
  tableNo: { type: Number },
  waiterName: { type: String },
});

module.exports = mongoose.model("employees", employeeSchema);

module.exports = mongoose.model("menus", menuSchema);

// module.exports = mongoose.model('tables',tableSchema);

module.exports = mongoose.model("admins", adminSchema);

module.exports = mongoose.model("sessions", sessionSchema);
