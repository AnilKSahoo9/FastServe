let menuSchema = require("../models/menuModel");
const menuController = async (req, res) => {
    let itemsArray = req.body;
    console.log(itemsArray)
    let menuList = await menuSchema.find({}).exec()
    console.log(menuList)
    // itemsArray.map(item => {
    //     if (item.category !== Veg || item.category != NonVeg) {
    //         // new menuSchema({ item.category:"j" }).save()
    //     }
    // })
    // new menuSchema({ breakfast: breakfast, dessert: dessert, rice: rice, dal: dal, nonveg: nonveg, veg: veg, created_at: new Date() }).save();
    // new menuSchema({breakfast:breakfast,dessert:dessert,rice:rice,dal:dal,nonveg:nonveg,veg:veg,created_at:new Date()}).save();
    res.status(200).json({ msg: "successfully added to database" });
}
module.exports = menuController;