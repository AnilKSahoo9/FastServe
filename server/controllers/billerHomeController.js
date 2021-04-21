let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
const billerHomeController = async(req,res) => {
let tableDetails = [];
let parcelDetails = [];
   
   await sessionSchema.find({billStatus:'unpaid'},(err,doc) => {
       if(err){
           res.status(500).json({msg:'error occurred'})
       }
       if(doc){
           tableDetails = doc;
       }
   });
   
   await parcelSchema.find({billStatus:'unpaid'},(err,doc) => {
    if(err){
        res.status(500).json({msg:'error occurred'})
    }
    if(doc){
        parcelDetails = doc;
    }
});
    
    res.status(200).json({
        tableOrders:tableDetails.map((elem,index) => ({
            sessionNo:elem._id,
            tableNo:elem.tableNo,
            waiterName:elem.waiterName,
            totalAmount:elem.totalAmount,
            status:elem.billStatus,
            items:elem.items.map((z) => ({
                name:z.name,
                price:z.price
            }))
        })),
        parcelOrders:parcelDetails.map((elem,index) => ({
            parcelNo:elem._id,
            billerName:elem.billerName,
            totalAmount:elem.totalAmount,
            status:elem.billStatus,
            items:elem.items.map((z) => ({
                name:z.name,
                price:z.price
            }))
        }))
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