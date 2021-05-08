let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
const billerHomeController = async (req, res) => {
    let tableDetails = [];
    let parcelDetails = [];
    let totalTableOrdersPlaced, totalParcelOrdersPlaced;
    await sessionSchema.find({ billStatus: 'unpaid', orderStatus: { $in: ["complete"] } }, (err, doc) => {
        if (err) {
            res.status(500).json({ msg: 'error occurred' })
        }
        if (doc) {
            tableDetails = doc;
        }
    });
    await parcelSchema.find({ billStatus: 'unpaid', orderStatus: { $in: ["complete"] } }, (err, doc) => {
        if (err) {
            res.status(500).json({ msg: 'error occurred' })
        }
        if (doc) {
            parcelDetails = doc;
        }
    });
    //for chart
    await sessionSchema.find({}, (err, doc) => {
        if (err) {
            res.status(500).json({ msg: 'error occurred' })
        }
        if (doc) {
            totalTableOrdersPlaced = doc.length;
        }
    });
    await parcelSchema.find({}, (err, doc) => {
        if (err) {
            res.status(500).json({ msg: 'error occurred' })
        }
        if (doc) {
            totalParcelOrdersPlaced = doc.length;
        }
    });
    res.status(200).json({
        tableOrders: tableDetails.map((elem, index) => ({
            sessionNo: elem._id,
            tableNo: elem.tableNo,
            waiterName: elem.waiterName,
            totalAmount: elem.totalAmount,
            status: elem.billStatus,
            orderStatus: elem.orderStatus,
            items: elem.items.map((z) => ({
                name: z.itemName,
                quantity: z.quantity,
                price: z.price
            }))
        })),
        parcelOrders: parcelDetails.map((elem, index) => ({
            parcelNo: elem._id,
            billerName: elem.billerName,
            totalAmount: elem.totalAmount,
            status: elem.billStatus,
            orderStatus: elem.orderStatus,
            items: elem.items.map((z) => ({
                name: z.itemName,
                quantity: z.quantity,
                price: z.price
            }))
        })),
        totalTableOrdersPlaced: totalTableOrdersPlaced,
        totalParcelOrdersPlaced: totalParcelOrdersPlaced
    });

    // await parcelSchema.aggregate([
    //     {$match:{billStatus:"unpaid"}},
    //     {
    //         $lookup:{
    //             from:"sessions",
    //             localField:"billStatus",
    //             foreignField:"billStatus",
    //             as:"output"
    //         }
    //     }
    // ],(err,data) => {
    //     return res.json({data})
    // }
    // )

}
module.exports = billerHomeController;