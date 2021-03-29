let sessionSchema = require('../models/sessionModel');
let parcelSchema = require('../models/parcelModel');
let kitchenSchema = require('../models/kitchenModel');

const kitchenOrderGetController = async(req,res) => {
    await sessionSchema.find({orderStatus:"pending"},(err,doc) => {
         parcelSchema.find({orderStatus:"pending"},(err2,doc2) => {
            if(err2 || err){
                res.status(500).json({msg:'data not found'});
            }
            if(doc || doc2){
                res.status(200).json({tableOrder:doc,parcelOrder:doc2})
            }
        });
    });
};

const kitchenOrderPostController = (req,res) => {
    let {_id,orderStatus} = req.body;
    //console.log(req.body)
    orderStatus === "accept" ?  kitchenSchema.updateOne({},{ $push:{accept:_id} } ,(err,doc) => {
        if(err){
            res.status(500).json({msg:'Error occured'});
        }
        if(doc){
            res.status(200).json({msg:'successfully updated'});
        }
    })
    : null;


    orderStatus === "reject" ?  kitchenSchema.updateOne({ $push:{reject:_id} },(err,doc) => {
        if(err){
            res.status(500).json({msg:'Error occured'});
        }
        if(doc){
            res.status(200).json({msg:'successfully updated'});
        }
    }) : null;
};

exports.kitchenOrderGetController = kitchenOrderGetController;
exports.kitchenOrderPostController = kitchenOrderPostController;
