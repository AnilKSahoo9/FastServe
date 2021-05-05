let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
const customerDBController = async(req,res) => {

    var sessionsActiveTillDate = [];
    var parcelsActiveTillDate = [];

    await sessionSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
        if(doc){
          sessionsActiveTillDate = doc;
        }
        else{
          console.log("no data inside session of current date");
        }
      });

      await parcelSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
        if(doc){
          parcelsActiveTillDate = doc;
        }
        else{
          console.log("no data inside parcel of current date");
        }
      });
      res.status(200).json({sessionsActiveTillDate,parcelsActiveTillDate});
}
module.exports = customerDBController;