const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema({
  tableNo: { type: Number },
  session: { type: Array },
  tableStatus: { type: String },
  created_at:{type: String}
});
module.exports = mongoose.model("tables", tableSchema);
