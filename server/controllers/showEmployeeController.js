let employeeSchema = require('../models/employeeModel');
const { v4: uuidv4 } = require("uuid");
const showEmployeeController = async (req, res) => {
    let biller = [];
    let waiter = [];
    let chef = [];
    await employeeSchema.find({ type: 'biller' }).then((item) => {
        biller = item;
    })
    await employeeSchema.find({ type: 'waiter' }).then((item) => {
        waiter = item;
    });
    await employeeSchema.find({ type: 'chef' }).then((item) => {
        chef = item;
    });
    res.status(200).json({
        billers: biller.map((item) => ({
            empId: item._id,
            name: item.name,
            modal: {
                gender: item.gender,
                username: item.username,
                email: item.email,
                mobile: item.mobile,
                // documents:item.Documents,
                doj: item.doj,
                // mobile:item.mobile,
                status: item.status
            }
        })),
        waiters: waiter.map((item) => ({
            empId: item._id,
            name: item.name,
            modal: {
                gender: item.gender,
                username: item.username,
                email: item.email,
                mobile: item.mobile,
                // documents:item.Documents,
                doj: item.doj,
                // mobile:item.mobile,
                status: item.status
            }
        })),
        chefs: chef.map((item) => ({
            empId: item._id,
            name: item.name,
            modal: {
                gender: item.gender,
                username: item.username,
                email: item.email,
                mobile: item.mobile,
                // documents:item.Documents,
                doj: item.doj,
                // mobile:item.mobile,
                status: item.status
            }
        }))
    })
}
module.exports = showEmployeeController;

