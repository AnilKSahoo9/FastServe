let sessionSchema = require("../models/sessionModel");
let tableSchema = require("../models/tableModel");
const adminTableController = async (req, res) => {
    let x = await tableSchema.find().exec();

    res.status(200).json(x)
    // console.log(x)
    // tableSchema.find({ tableStatus: "active" }, (err, doc) => {
    //     if (doc) {
    //         var TN, SID, TS;
    //         doc.map((item, index) => {
    //             (TN = item.tableNo),
    //                 (SID = item.session),
    //                 (TS = item.tableStatus);
    //         });
    //         console.log(doc, TN, SID, TS)
    //         sessionSchema.find({ _id: SID, tableNo: TN }, (err2, doc2) => {
    //             if (doc2) {
    //                 //console.log(doc2);
    //                 res.status(200).json(
    //                     doc2.map((z, index) => ({
    //                         tableNo: z.tableNo,
    //                         tableStatus: TS,
    //                         sessionId: z._id,
    //                         currentOrder: z.items,
    //                     }))
    //                 );
    //             }
    //         });
    //     } else {
    //         res.status(500).json({ msg: "error occured" });
    //     }
    // });
};
module.exports = adminTableController;

// [{100},{102}]
