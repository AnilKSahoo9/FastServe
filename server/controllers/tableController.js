let tableSchema = require("../models/tableModel");
const tableController = (req,res) => {
    let { tableNo, noOfTables } = req.body;
    for (i = 0; i < noOfTables; i++) {
      let tables = new tableSchema({
        tableNo: Number(tableNo) + i,
        session: [],
        tableStatus: "inactive",
        created_at:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/')
      });
      tables.save();
    }
    res.status(200).json({ status: 200, msg: "successfully created tableschema and data" });
}
module.exports = tableController;