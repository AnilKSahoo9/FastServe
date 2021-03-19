const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("thoughts", thoughtSchema);
