const express = require("express");
const socket = require("socket.io");

// App Setup
const app = express();
const port = 5000;
const server = app.listen(port, () => {
  console.log(`App is listening at http://127.0.0.1:${port}`);
});

//Static Files
app.use(express.static("public"));

// Socket Setup & Pass Server
const io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data)=>{
    socket.broadcast.emit('typing',data);
  })
});
