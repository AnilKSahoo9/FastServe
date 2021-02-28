const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
    breakfast: { type: Array },
    dessert: { type: Array },
    rice: { type: Array },
    dal: { type: Array },
    nonveg: { type: Object },
    veg: { type: Object },
  });
  module.exports = mongoose.model("menus", menuSchema);