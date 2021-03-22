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
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const server = http.createServer(app);
const io = socketio(server);

//let doc = [];

io.on("connection",(socket) => {
  console.log("we'va a new connection!!!!");

  socket.on("updatedData",(callback) => {
    callback("hi,i am the response from server");
    // await parcelSchema.find({},(err,docu) => {
    //   doc = docu;
    // });
    // callback({parcelOrders: doc.map((eachParcel, index) => ({
    //   parcelNo: index + 1,
    //   billerName: eachParcel.billerName,
    //   totalAmount: eachParcel.totalAmount,
    //   orderDetails: eachParcel.items,
    // }))})
  });
  
socket.on("disconnect",() => {
  console.log('user had left!!!!');
});

});

routes(app);
server.listen(PORT,() => console.log(`server listening in port ${PORT}`));

// //establish socket.io connection
// //const app = express.init();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);

// io.of("/socket").on("connection", (socket) => {
//   console.log("socket.io: User connected: ", socket.id);

//   socket.on("disconnect", () => {
//     console.log("socket.io: User disconnected: ", socket.id);
//   });
// });

//bodyparser setup

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


// //for checking whether localhost:4000/ is working in chrome tab or not
// app.get("/", (req, res) =>
//   res.send(`Node and express server running on port ${PORT}`)
// );

//start the server
//server.listen(PORT, () => console.log(`Server now running on port ${PORT}!`));

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

  // const connection = mongoose.connection;

  // connection.once("open", () => {
  //   console.log("MongoDB database connected");
  
  //   console.log("Setting change streams");
  //   const thoughtChangeStream = connection.collection("thoughts").watch();
  
  //   thoughtChangeStream.on("change", (change) => {
  //     switch (change.operationType) {
  //       case "insert":
  //         const thought = {
  //           _id: change.fullDocument._id,
  //           name: change.fullDocument.name,
  //           description: change.fullDocument.description,
  //         };
  
  //         io.of("/socket").emit("newThought", thought);
  //         break;
  
  //       case "delete":
  //         io.of("/socket").emit("deletedThought", change.documentKey._id);
  //         break;
  //     }
  //   });
  // });