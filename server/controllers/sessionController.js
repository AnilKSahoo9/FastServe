let sessionSchema = require("../models/sessionModel");
let tableSchema = require("../models/tableModel");
const { v4: uuidv4 } = require("uuid");
const sessionController = (req,res) => {
    let { items, totalAmount, tableNo, waiterName,billStatus,orderStatus } = req.body;
    //console.log(req.body);
     let idB = uuidv4();
     //console.log(idb);
     new sessionSchema({_id:idB,items:items,totalAmount:totalAmount,tableNo:tableNo,waiterName:waiterName,billStatus:billStatus,orderStatus:orderStatus,required_time:null,created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')}).save();
    tableSchema.updateOne(
      { tableNo: tableNo },
      { $push:{session:idB} },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );
    res.status(200).json({msg:"successfully added and updated"});
}
module.exports = sessionController;