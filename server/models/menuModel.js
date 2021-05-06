const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  Breakfast: { type: Array },
  Desserts: { type: Array },
  // Chinese: { type: Array },
  Rice: { type: Array },
  Dal: { type: Array },
  NonVeg: { type: Object },
  Veg: { type: Object },
  created_at: { type: String }
});
module.exports = mongoose.model("menus", menuSchema);