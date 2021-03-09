let menuSchema = require("../models/menuModel");
const menuController = (req,res) => {
    let { breakfast, dessert, rice, dal, nonveg, veg } = req.body;
    new menuSchema(req.body).save();
    res.status(200).json({msg: "successfully added to database" });
}
module.exports = menuController;