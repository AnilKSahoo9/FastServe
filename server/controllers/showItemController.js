let menuSchema = require("../models/menuModel");
const showItemController = async (req, res) => {
  let breakfast = [];
  let dessert = [];
  let rice = [];
  let dal = [];
  let nonveg = {};
  let veg = {};

  await menuSchema.find({}).then((elem) => {
    elem.map((element) => {
      breakfast = element.breakfast;
      dessert = element.dessert;
      rice = element.rice;
      dal = element.dal;
      veg = element.veg;
      nonveg = element.nonveg;
      // veg.push(element.veg);
      // nonveg.push(element.nonveg);
    });
  });

  res.status(200).json({
    breakfasts: breakfast.map((z) => ({
      name: z.name,
      price: z.price,
    })),
    desserts: dessert.map((z) => ({
      name: z.name,
      price: z.price,
    })),
    rice: rice.map((z) => ({
      name: z.name,
      price: z.price,
    })),
    dal: dal.map((z) => ({
      name: z.name,
      price: z.price,
    })),
    veg: veg,
    nonveg: nonveg,
  });
};
module.exports = showItemController;
