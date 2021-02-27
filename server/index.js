const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const cors = require("cors");
require('dotenv').config();
const app = express();
//const PORT = 4000;

// mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/antiracismdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

//for checking whether localhost:4000/ is working in chrome tab or not
app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

mongoose
  .connect(
    process.env.DB,
    //"mongodb+srv://Devdatabase:GetDevconnection@cluster0.b9nxv.mongodb.net/restaurant?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // app.listen(4000);
    console.log("db connected...!");

const port = process.env.PORT;

    app.listen(port, () =>
      console.log(`Your server is running on port ${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
