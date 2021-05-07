let menuSchema = require("../models/menuModel");
const menuController = async (req, res) => {
    var category = ""
    var subcategory = ""
    // console.log(req.body.length)
    for (let x = 0; x < req.body.length; x++) {
        // console.log(typeof (req.body[x].category))
        let eachItem = { name: req.body[x].name, price: req.body[x].price }
        if (req.body[x].category === "Veg" || req.body[x].category === "NonVeg") {

            category = req.body[x].category;
            subcategory = req.body[x].subcategory;
            // console.log("if", category);
            menuSchema.findOneAndUpdate({}, { $set: { [category]: { $push: { [subcategory]: eachItem } } } }, (err, result) => {
                if (result) {
                    console.log(result)
                    res.status(200).json({ msg: "successfully added to database" });
                } else console.log("subcategory not updated");
            })
        } else {
            category = req.body[x].category;
            console.log("else", category);
            // menuSchema.findOneAndUpdate({}, { $push: { [category]: eachItem } }, (err, result) => {
            //     if (result) {
            //         // console.log(result)
            //         res.status(200).json({ msg: "successfully added to database" });
            //     } else console.log("Have not updated");
            // })
            //     // console.log(x)
            // }


        }
    };
}

// new menuSchema({ Breakfast: [], Desserts: [], Rice: [], Dal: [], NonVeg: { Chicken: [], Mutton: [], Fish: [] }, Veg: { Paneer: [], Mushroom: [] }, created_at: new Date() }).save();
// new menuSchema({breakfast:breakfast,dessert:dessert,rice:rice,dal:dal,nonveg:nonveg,veg:veg,created_at:new Date()}).save();


module.exports = menuController;