let tableSchema = require("../models/tableModel");
let sessionSchema = require("../models/sessionModel");
let parcelSchema = require("../models/parcelModel");
// const parcelData = async function () {
//   return await parcelSchema.find({}).exec();
// };
const totalOrderController = (req, res) => {
  //   let promise = Promise.all(parcelData());
  //   res.send(promise);
  //   console.log(parcelData());
  tableSchema.aggregate(
    [
      {
        $lookup: {
          from: "sessions",
          localField: "session",
          foreignField: "_id",
          as: "tableOrder",
        },
      },
    ],
    (err, data) => {
      return res.json({
        tableOrder: data.map((eachTable) => ({
          tableNo: eachTable.tableNo,
          tableOrder: eachTable.tableOrder.map((eachSession) => ({
            items: eachSession.items,
            totalAmount: eachSession.totalAmount,
            waiterName: eachSession.waiterName,
          })),
        })),
        //   parcelOrder: parcelSchema.find({}, function (err, data) {
        //     //   return data;
        //   }),
      });
    }
  );
};

//   tableSchema.aggregate(
//     [
//       {
//         $lookup: {
//           from: "sessions",
//           localField: "session",
//           foreignField: "_id",
//           as: "tableOrder",
//         },
//       },
//       {
//         $replaceRoot: {
//           newRoot: {
//             $mergeObjects: [{ $arrayElemAt: ["$tableOrder", 0] }, "$$ROOT"],
//           },
//         }, //here 0 or 1 is the index
//       },
//       // {
//       //     $project:{tableOrder:0}  //comment this project field and check response
//       // }
//     ],
//     (err, data) => {
//       return res.json(data);
//     }
//   );
// };
module.exports = totalOrderController;

// .toArray((err,res) => {
//     if(err) throw err;
//     console.log(JSON.stringify(res));
// })

// let arraytables = [];
// tableSchema.find({}, function (err, tables) {
//   tables.map((eachTable) => {
//     arraytables.push({
//       tableNo: eachTable.tableNo,
//       sessions: eachTable.session
//         ? eachTable.session.map((eachSession) => {
//             console.log(eachSession);
//             // eachSession;
//             sessionSchema.findById(
//               { _id: eachSession },
//               function (err, result) {
//                 //console.log(result);
//                 return {
//                   totalAmount: result.totalAmount,
//                 };
//               }
//             );
//           })
//         : null,
//     });
//     // res.send(item);
//   });
//   console.log(arraytables);
//   res.send(arraytables);
//   // return users;
//   // console.log(users);
// });
// // tableSchema.find();
// // console.log(totalorder);
// // res.send("success");

// const totalOrderController = (req,res) => {
//     let arraytables = [];
// tableSchema.find({},(err,doc) => {
//     doc.map((elem) => {
//         elem.session.map((session_id) => {
//             session_id ? arraytables.push({tableNo:elem.tableNo,sessions:elem.session}) : null;
//             //sessionSchema.findById({_id:session_id},(err,result) => {console.log(result)})
//         })
//     })
//     res.send(arraytables);
// });
