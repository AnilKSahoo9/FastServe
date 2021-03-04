let tableSchema = require("../models/tableModel");
const tableController = (req,res) => {
    let { tableNo, noOfTables } = req.body;
    for (i = 0; i < noOfTables; i++) {
      let tables = new tableSchema({
        tableNo: Number(tableNo) + i,
        session: [],
        tableStatus: null,
      });
      tables.save();
    }
    res.status(200).json({ status: 200, msg: "successfully created tableschema and data" });
}
module.exports = tableController;