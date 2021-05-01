let sessionSchema = require('../models/sessionModel');
let parcelSchema = require('../models/parcelModel');
let kitchenSchema = require('../models/kitchenModel');

const kitchenOrderGetController = async(req,res) => {
    await sessionSchema.find({orderStatus:{$in:["pending","accept"]},created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err,doc) => {
         parcelSchema.find({orderStatus:{$in:["pending","accept"]},created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')},(err2,doc2) => {
            if(err2 || err){
                res.status(500).json({msg:'data not found'});
            }
            if(doc || doc2){
                res.status(200).json([...doc,...doc2]);
            }
        });
    });
};

const kitchenOrderPostController = (req,res) => {

    let {_id,orderStatus,orderType,time} = req.body;
//console.log(req.body)
    orderStatus === "accept" && orderType === "parcel"?  kitchenSchema.updateOne({},{ $push:{accept:_id} } ,(err,doc) => {
        if(err){
            return res.status(500).json({msg:'Error occured'});
        }
        else{
            parcelSchema.updateOne({_id:_id},{orderStatus:orderStatus,required_time:time},(err2,doc2) => {
                if(doc2){
                    return res.status(200).json({msg:'successfully updated inside parcel'});
                }
            });
        }
    })
    : null;

    orderStatus === "accept" && orderType === "table"?  kitchenSchema.updateOne({},{ $push:{accept:_id} } ,(err,doc) => {
        if(err){
            return res.status(500).json({msg:'Error occured'});
        }
        else{
            sessionSchema.updateOne({_id:_id},{orderStatus:orderStatus,required_time:time},(err2,doc2) => {
                if(doc2){
                    return res.status(200).json({msg:'successfully updated inside session'});
                }
            });
        }
    })
    : null;

    orderStatus === "reject" && orderType === "parcel"?  kitchenSchema.updateOne({},{ $push:{reject:_id} } ,(err,doc) => {
        if(err){
            return res.status(500).json({msg:'Error occured'});
        }
        else{
            parcelSchema.updateOne({_id:_id},{orderStatus:orderStatus},(err2,doc2) => {
                if(doc2){
                    return res.status(200).json({msg:'successfully updated inside parcel'});
                }
            });
        }
    })
    : null;

    orderStatus === "reject" && orderType === "table"?  kitchenSchema.updateOne({},{ $push:{reject:_id} } ,(err,doc) => {
        if(err){
            return res.status(500).json({msg:'Error occured'});
        }
        else{
            sessionSchema.updateOne({_id:_id},{orderStatus:orderStatus},(err2,doc2) => {
                if(doc2){
                    return res.status(200).json({msg:'successfully updated inside session'});
                }
            });
        }
    })
    : null;
   
};

exports.kitchenOrderGetController = kitchenOrderGetController;
exports.kitchenOrderPostController = kitchenOrderPostController;
