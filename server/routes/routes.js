const Home = {"Tables": 10,"Parcels":9,"Kitchens": 10,"Waiters": 14,"Billers":10,"Customers":30};
//const employeeData = {"Type": "Waiters","Name": "abc","Email": "abc@gmail.com", "Mobile" : "8280116464","Username": "abc","Password": "abc","DOJ": "20.11.15","status": 200,"msg":"employee added successfully"}
const Loginmsg = {"status" : 200 ,"msg": "login successful"}
const employeemsg = {"msg": "employee added", "status": 200}
//const dummyData = {"Email": "abc@gmail.com", "password": "abc"}

const routes = (app) => {
    app.route('/homepagedata').get((req,res) => res.send(Home)).post((req, res) =>
    res.send('POST request successful!'));

  // app.route('/login').post((req,res) => 
  // res.send(msg))
  //similar to above syntax
  // app.post('/login',(req,res) => 
  // res.send(msg))

  app.route('/login').post((req,res) => {
    //  let Email = req.body.email;
    //  let password = req.body.password;
    let {email,password} = req.body;
    res.send(Loginmsg);
    //console.log("Email is = "+email+", password is  "+password);
    //console.log(req.body);
  })

  app.route('/addemployee').post((req,res) => {
    //let data = employeeData;
    //console.log("all employee data = "+data+"");
    let {Type,Name,Email,Mobile,Username,Password,DOJ} = req.body;
    //console.log(req.body)
  res.send(employeemsg)
  })
}

module.exports = routes;