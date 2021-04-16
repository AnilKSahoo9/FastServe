const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
let sessionSchema = require("./models/sessionModel");
let parcelSchema = require("./models/parcelModel");

const PORT = 4000;

const socketio = require("socket.io");
const http = require("http");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const server = http.createServer(app);
const io = socketio(server);

io.of("/api/socket").on("connection", (socket) => {
  //console.log("we'va a new connection!!!!");

  const parcelChangeStream = parcelSchema.watch();
  parcelChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        //let parcelOrder = [];
        //.push({_id:change.fullDocument._id,totalAmount:change.fullDocument.totalAmount,orderDetails:change.fullDocument.items,billerName:change.fullDocument.billerName,parcelNo:123456})
        socket.emit("parcelData", change.fullDocument);
        socket.on("my", (data) => {
          //console.log(data);
        });

        //for kitchen
        socket.emit("kitchenData",change.fullDocument);
        socket.on("forkitchen",(data) => {});
    }
  });
  const sessionChangeStream = sessionSchema.watch();
  sessionChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        socket.emit("sessionData", {
          _id: change.fullDocument._id,
          tableNo: change.fullDocument.tableNo,
          sessions: [
            {
              orderDetails: change.fullDocument.items,
              totalAmount: change.fullDocument.totalAmount,
              waiterName: change.fullDocument.waiterName,
            },
          ],
        });
      //console.log(change.fullDocument);
    }
  });

  socket.on("disconnect", () => {
    //console.log("user had left!!!!");
  });
});

routes(app);
server.listen(PORT, () => console.log(`server listening in port ${PORT}`));

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
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

// socket.removeAllListeners('parcelData');
// socket.removeAllListeners('disconnection');
// io.removeAllListeners('connection'); inside socket.disconnect()

// socket.emit('news',{hello:'world'});
// socket.on('my other event',(data) => {
//   console.log(data);
// }); inside io.of()

// socket.on('news',(data) => {
//   console.log(data);
//   socket.emit('my other event',{my:'data'});
// }); this has to be written inside useeffect of client where socket conn is established
