let sessionSchema = require("../models/sessionModel");
let tableSchema = require("../models/tableModel");
const adminTableController = (req,res) => {
    tableSchema.find({tableStatus: "active"},(err,doc) => {
        if(doc){
            var TN,SID,TS;
            doc.map((item,index) => {
                TN = item.tableNo,
                SID = item.session[index],
                TS = item.tableStatus
            });
            sessionSchema.find({_id:SID,tableNo:TN},(err2,doc2) => {
                if(doc2){
                    //console.log(doc2);
                    res.status(200).json(doc2.map((z,index) => ({
                        tableNo:z.tableNo,
                        tableStatus:TS,
                        sessionId:z._id,
                        currentOrder:z.items
                    })))
                }
            });
        }
        else{
            res.status(500).json({msg:"error occured"});
        }
    });
}
module.exports = adminTableController;