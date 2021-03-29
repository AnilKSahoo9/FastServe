let kitchenSchema = require('../models/kitchenModel');
const { v4: uuidv4 } = require("uuid");

const kitchenController = (req,res) => {
    let {orders,accept,reject,pending} = req.body;
    let id = uuidv4();
    new kitchenSchema({_id:id,orders:orders,accept:accept,reject:reject}).save();
    res.status(200).json({msg:"success"});
}
module.exports = kitchenController;