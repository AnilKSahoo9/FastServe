let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
let employeeSchema = require("../models/employeeModel");

const homepagedata = async(req,res) => {
  let tablesActive = [];
  let tableOrdersTillNow = [];
  let parcelOrdersTillNow = [];
  let totalWaitersWorking = [];
  let acceptedTableOrders = [];

  await sessionSchema.find({billStatus:"unpaid",created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
    if(err){
      res.status(500).json({msg:"failed"});
    }
    if(doc){
      tablesActive = doc;
      //res.status(200).json({"tables active":tablesActive.length});
    }
  }
  );

  await sessionSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
    if(err){
      res.status(500).json({msg:"failed"});
    }
    if(doc){
      tableOrdersTillNow = doc;
      //res.status(200).json({"tables active":tablesActive.length,"tableorderstillnow":tableOrdersTillNow.length});
    }
  });

await parcelSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
  if(err){
    res.status(500).json({msg:"failed"});
  }
  if(doc){
    parcelOrdersTillNow = doc;
    // res.status(200).json({"tables active":tablesActive.length,"tableorderstillnow":tableOrdersTillNow.length,"parcelorderstillnow":parcelOrdersTillNow.length});
  }
});

await employeeSchema.find({status:"present"},(err,doc) => {
  if(err){
    res.status(500).json({msg:"failed"});
  }
  if(doc){
    totalWaitersWorking = doc;
    // res.status(200).json({"tables active":tablesActive.length,"tableorderstillnow":tableOrdersTillNow.length,"parcelorderstillnow":parcelOrdersTillNow.length,"totalwaitersworking":totalWaitersWorking.length});
  }
});

await sessionSchema.find({orderStatus:"accept",created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
  if(doc){
    acceptedTableOrders = doc;
    let totalAmountTable = doc.map((item) => item.totalAmount);
    let TAT = totalAmountTable.reduce((a,b) => {return a + b});
    parcelSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/'),orderStatus:"accept"},(err2,doc2) => {
      if(doc2){
        let totalAmountParcel = doc2.map((item) => item.totalAmount);
        let TAP = totalAmountParcel.reduce((a,b) => {return a + b ;});
        //console.log(TAP)
        res.status(200).json({"tables active":tablesActive.length,"tableorderstillnow":tableOrdersTillNow.length,"parcelorderstillnow":parcelOrdersTillNow.length,"totalwaitersworking":totalWaitersWorking.length,"totalordersacceptedbykitchen":acceptedTableOrders.length + doc2.length,"totalamountcollected":TAP + TAT});
      }
    });
  }
});
}
module.exports = homepagedata;