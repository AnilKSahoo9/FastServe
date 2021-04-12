let sessionSchema = require("../models/sessionModel");
const Home = {
    ActiveTables: 10,
    Tables:10,
    Parcels: 9,
    Kitchens: 10,
    Waiters: 14,
    Billers: 10,
    // Customers: 30,
  };
const homepagedata = (req,res) => {
  let queryObj = {};
  const startOfTheDay = new Date(new Date().setUTCHours(0,0,0,0)).toISOString();
  const endOfTheDay = new Date(new Date().setUTCHours(23,59,59,999)).toISOString();
  queryObj.createdAt = {
    $gte: startOfTheDay,
    $lt:endOfTheDay
  }
  //console.log(startOfTheDay);
  //console.log(endOfTheDay);
  let dateStr = "Mon Apr 12 2021 11:08:58 GMT+0530"
  sessionSchema.find({billStatus:"unpaid",created_at: new Date(dateStr)},(err,doc) => {
    if(err){
      res.status(500).json({msg:"failed"});
    }
    if(doc){
      console.log(doc);
      res.send("hi sweta");
    }
  }
  )
//res.send(Home);
}
module.exports = homepagedata;