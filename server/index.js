const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
let sessionSchema = require("./models/sessionModel");
let parcelSchema = require("./models/parcelModel");
let employeeSchema = require("../server/models/employeeModel");

const PORT = 4000;
const socketio = require('socket.io');
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
        socket.emit("parcelData", change.fullDocument);
        socket.on("my", (data) => {
          //console.log(data);
        });
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
    }
  });
  socket.on("disconnect", () => {
    //console.log("user had left!!!!");
  });
});

io.of("/api/admin/socket").on("connection", (socket) => {
  var POTN = [];
  var TOTN = [];
  var TA = [];
  var TAP, TAT;
  var acceptedParcelOrders, acceptedTableOrders, waitersWorking;

  const parcelChangeStream = parcelSchema.watch();
  parcelChangeStream.on("change", (change) => {
    //console.log(change);
    switch (change.operationType) {
      case "insert":
        if (change.fullDocument.created_at === new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')) {
          let potn = {};
          potn = change.fullDocument;
          POTN.push(potn);
          socket.emit("adminData", POTN.length);
        }
        else {
          console.log("no data P");
        }

      case "update":
        parcelSchema.find({ _id: change.documentKey._id }, (err, doc) => {
          //console.log(doc);
          acceptedParcelOrders = doc.length;
          let totalAmountParcel = doc.map((item) => item.totalAmount);
          TAP = totalAmountParcel.reduce((a, b) => { return a + b; });
        })
        socket.emit("parcelsAccepted", acceptedParcelOrders);
        socket.emit("totalAmountParcel", TAP);

        socket.on("admin", (data) => { });
        socket.on("PA", () => { });
        socket.on("TAP", () => { });
    }
  });
  const sessionChangeStream = sessionSchema.watch();
  sessionChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        if (change.fullDocument.created_at === new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')) {
          let totn = {};
          totn = change.fullDocument;
          TOTN.push(totn);
          socket.emit("adminDataS", TOTN.length);
        }
        if (change.fullDocument.billStatus === "unpaid" && change.fullDocument.created_at === new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')) {
          let ta = {};
          ta = change.fullDocument;
          TA.push(ta);
          socket.emit("adminDataTA", TA.length);
        }
        else {
          console.log("no data S");
        }

      case "update":
        sessionSchema.find({ _id: change.documentKey._id }, (err, doc) => {
          acceptedTableOrders = doc.length;
          let totalAmountTable = doc.map((item) => item.totalAmount);
          TAT = totalAmountTable.reduce((a, b) => { return a + b });
        });

        socket.emit("sessionsAccepted", acceptedTableOrders);
        socket.emit("totalAmountTable", TAT);
        socket.on("adminS", (data) => { });
        socket.on("adminTA", (data) => { });

        socket.on("SA", (data) => { });
        socket.on("TAT", (data) => { });
    }
  });

  const employeeChangeStream = employeeSchema.watch();
  employeeChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "update":
        employeeSchema.find({ _id: change.documentKey._id }, (err, doc) => {
          waitersWorking = doc.length;
          socket.emit("waitersWorking", waitersWorking);
          socket.on("WW", (data) => { });
        });
    }
  });
  socket.on("disconnect", () => { });
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