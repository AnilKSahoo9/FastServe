let tableSchema = require("../models/tableModel");
let sessionSchema = require("../models/sessionModel");
const totalOrderController = (req,res) => {
    let arraytables = [];
    tableSchema.find({}, function (err, tables) {
      tables.map((eachTable) => {
        arraytables.push({
          tableNo: eachTable.tableNo,
          sessions: eachTable.session
            ? eachTable.session.map((eachSession) => {
                console.log(eachSession);
                // eachSession;
                sessionSchema.findById(
                  { _id: eachSession },
                  function (err, result) {
                    //console.log(result);
                    return {
                      totalAmount: result.totalAmount,
                    };
                  }
                );
              })
            : null,
        });
        // res.send(item);
      });
      console.log(arraytables);
      res.send(arraytables);
      // return users;
      // console.log(users);
    });
    // tableSchema.find();
    // console.log(totalorder);
    // res.send("success");
}
module.exports = totalOrderController;