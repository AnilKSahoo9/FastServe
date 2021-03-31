const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
    breakfast: { type: Array },
    dessert: { type: Array },
    rice: { type: Array },
    dal: { type: Array },
    nonveg: { type: Object },
    veg: { type: Object },
    created_at:{type:String}
  });
  module.exports = mongoose.model("menus", menuSchema);