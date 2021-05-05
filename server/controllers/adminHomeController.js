let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
let employeeSchema = require("../models/employeeModel");

const adminHomeController = async(req,res) => {
  let tablesActive = [];
  let tableOrdersTillNow = [];
  let parcelOrdersTillNow = [];
  let totalWaitersWorking = [];
  let acceptedTableOrders = [];
  var TAT,TAP;
  await sessionSchema.find({billStatus:"unpaid",created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
    if(doc){
      tablesActive = doc;
    }
    else{
      console.log("no data having billstatus unpaid in session");
    }
  }
  );

  await sessionSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
    if(doc){
      tableOrdersTillNow = doc;
    }
    else{
      console.log("no data inside session of current date");
    }
  });

await parcelSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
  if(doc){
    parcelOrdersTillNow = doc;
  }
  else{
    console.log("no data inside parcel of current date");
  }
});

await employeeSchema.find({status:"present"},(err,doc) => {
  if(doc){
    totalWaitersWorking = doc;
  }
  else{
    console.log("no waiter status is present now");
  }
});

await sessionSchema.find({orderStatus:"accept",created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
  //console.log(doc.length);
  if(doc.length > 0){
    acceptedTableOrders = doc;
    let totalAmountTable = doc.map((item) => item.totalAmount);
   TAT = totalAmountTable.reduce((a,b) => {return a + b});
   //console.log(TAT)
  }
  else{
    console.log("no tableorder is accepted by kitchen till now");
  }
});
//console.log(TAT);
if(TAT === undefined){
TAT = 0;
}
//console.log(TAT)
await parcelSchema.find({created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/'),orderStatus:"accept"},(err,doc) => {
  if(doc.length > 0){
    let totalAmountParcel = doc.map((item) => item.totalAmount);
     TAP = totalAmountParcel.reduce((a,b) => {return a + b ;});
  }
  else{
    console.log("no parcelorder is accepted by kitchen till now");
  }
  //console.log(TAP);
  if(TAP === undefined){
    TAP = 0;
  }
  return res.status(200).json({"TablesActive":tablesActive.length,"TableOrdersTillNow":tableOrdersTillNow.length,"ParcelOrdersTillNow":parcelOrdersTillNow.length,"TotalWaitersWorking":totalWaitersWorking.length,"TotalOrdersAcceptedByKitchen":acceptedTableOrders.length + doc.length,"TotalAmountCollected": TAT + TAP});
});
}
module.exports = adminHomeController;