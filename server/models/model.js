const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const DataSchema = new Schema({
  Tables: {
    type: Number
  },
  Parcels: {
    type: Number
  },
  Waiters: {
    type: Number
  },
  Kitchens: {
      type:Number
  },
  Billers: {
      type: Number
  },
  Customers: {
      type:Number
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('HomePageData', DataSchema);