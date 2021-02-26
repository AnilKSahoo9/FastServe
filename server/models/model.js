const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
  Username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  Type: {
      type:String
  },
  DOJ: {
      type: String
  },
  Mobile: {
      type:String
  }
});

const menuSchema = new mongoose.Schema({
  breakfast:{type:Array},
  dessert:{type:Array},
  rice:{type:Array},
  dal:{type:Array},
  nonveg:{type:Object},
  veg:{type:Object}
})

module.exports = mongoose.model('employees', employeeSchema);

module.exports = mongoose.model('menus',menuSchema);