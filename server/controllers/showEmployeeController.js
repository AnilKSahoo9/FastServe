let employeeSchema = require('../models/employeeModel');
const { v4: uuidv4 } = require("uuid");
const showEmployeeController = async(req,res) => {
    let biller = [];
    let waiter = [];
    let chef = [];
    await employeeSchema.find({Type:'biller'}).then((item) => {
        biller = item;
    })
    await employeeSchema.find({Type:'waiter'}).then((item) => {
        waiter = item;
    });
    res.status(200).json({billers:biller.map((item) => ({
                empid:uuidv4(),
                name:item.Name,
                modal:{
                    gender:item.Gender,
                    username:item.Username,
                    email:item.Email,
                    mobile:item.Mobile,
                    documents:item.Documents,
                    doj:item.DOJ
                }
    })),
    waiters:waiter.map((item) => ({
                empid:uuidv4(),
                name:item.Name,
                modal:{
                    gender:item.Gender,
                    username:item.Username,
                    email:item.Email,
                    mobile:item.Mobile,
                    documents:item.Documents,
                    doj:item.DOJ
                }
    }))
})
}
module.exports = showEmployeeController;

