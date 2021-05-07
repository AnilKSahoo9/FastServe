let menuSchema = require("../models/menuModel");
const showItemController = async (req, res) => {
  // let breakfast = [];
  // let dessert = [];
  // let rice = [];
  // let dal = [];
  // let nonveg = {};
  // let veg = {};

  await menuSchema.find({}).then((elem) => {
    //   elem.map((element) => {
    //     breakfast = element.breakfast;
    //     dessert = element.dessert;
    //     rice = element.rice;
    //     dal = element.dal;
    //     veg = element.veg;
    //     nonveg = element.nonveg;
    //     // veg.push(element.veg);
    //     // nonveg.push(element.nonveg);
    //   });
    // });
    // console.log(elem)
    res.status(200).json({
      Breakfast: elem[0].Breakfast,
      Rice: elem[0].Rice,
      Dal: elem[0].Dal,
      Desserts: elem[0].Desserts
    });
  })
};
module.exports = showItemController;
