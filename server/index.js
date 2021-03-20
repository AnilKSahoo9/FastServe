const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 4000;

//establish socket.io connection
//const app = express.init();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.of("/socket").on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

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

// //for checking whether localhost:4000/ is working in chrome tab or not
// app.get("/", (req, res) =>
//   res.send(`Node and express server running on port ${PORT}`)
// );

//start the server
server.listen(PORT, () => console.log(`Server now running on port ${PORT}!`));

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
  // .then(() => {
  //   console.log("db connected...!");

  //   const port = PORT;

  //   app.listen(port, () =>
  //     console.log(`Your server is running on port ${port}`)
  //   );
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("MongoDB database connected");
  
    console.log("Setting change streams");
    const thoughtChangeStream = connection.collection("thoughts").watch();
  
    thoughtChangeStream.on("change", (change) => {
      switch (change.operationType) {
        case "insert":
          const thought = {
            _id: change.fullDocument._id,
            name: change.fullDocument.name,
            description: change.fullDocument.description,
          };
  
          io.of("/socket").emit("newThought", thought);
          break;
  
        case "delete":
          io.of("/socket").emit("deletedThought", change.documentKey._id);
          break;
      }
    });
  });