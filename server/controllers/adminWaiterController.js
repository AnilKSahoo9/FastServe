let employeeSchema = require("../models/employeeModel");
let sessionSchema = require("../models/sessionModel");

const adminWaiterController = async(req,res) => {
    var z = [];
    var waitersData = [];
    var num;
    await employeeSchema.find({type:"waiter",status:"present"},(err,doc) => {
        if(doc){
            //console.log(doc);
            z = doc.map(m => m.name);
            num = z.length;
            // for(let i = 0;i < doc.length;i++){
            // sessionSchema.find({waiterName:String(z[i])},(err2,doc2) =>{
            //     if(doc2) {
            //         //console.log(doc2)
            //         waitersData = doc2;
            //     }
            // });
            // }
        }
    });

    for(let i = 0;i <num ;i++){
        await sessionSchema.find({waiterName:String(z[i])},(err2,doc2) =>{
            if(doc2) {
                //console.log(doc2)
                waitersData = doc2;
            }
        });
    }
     //console.log(waitersData);
     res.status(200).json({waitersData})
}
module.exports = adminWaiterController;