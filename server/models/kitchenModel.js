const mongoose = require("mongoose");
const kitchenSchema = new mongoose.Schema({
     _id:{type:String},
    orders:{type:Array},
   pending:{type:Array},
   accept:{type:Array},
   reject:{type:Array}
});
module.exports = mongoose.model("kitchens", kitchenSchema);