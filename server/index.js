const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
let tableSchema = require("./models/tableModel");
let parcelSchema = require("./models/parcelModel");

const PORT = 4000;

const socketio = require('socket.io');
const http = require('http');
const { count, countDocuments } = require("./models/tableModel");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const server = http.createServer(app);
const io = socketio(server);

//let doc = [];

io.of("/api/socket").on("connection",(socket) => {
  console.log("we'va a new connection!!!!");

  // socket.emit('news',{hello:'world'});
  // socket.on('my other event',(data) => {
  //   console.log(data);
  // })
    const parcelChangeStream = parcelSchema.watch();
    parcelChangeStream.on("change",(change) => {
      switch(change.operationType){
        case "insert":
          let parcelOrder = [];
          parcelOrder.push({_id:change.fullDocument._id,totalAmount:change.fullDocument.totalAmount,orderDetails:change.fullDocument.items,billerName:change.fullDocument.billerName,parcelNo:1234})
          socket.emit('parcelData',parcelOrder);
          socket.on('my',(data) => {
            //console.log(data);
          })
      }
    });
  
socket.on("disconnect",() => {
  console.log('user had left!!!!');
});

});

routes(app);
server.listen(PORT,() => console.log(`server listening in port ${PORT}`));

mongoose
  .connect(
    process.env.DB,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("db connected...!");

    // const port = PORT;

    // app.listen(port, () =>
    //   console.log(`Your server is running on port ${port}`)
    // );
  })
  .catch((err) => {
    console.log(err);
  });