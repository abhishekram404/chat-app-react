const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

var onlineUsers = [];

io.on("connection", (socket) => {
  onlineUsers = [
    ...onlineUsers,
    { id: socket.id, name: socket.handshake.query.name },
  ];
  console.log(onlineUsers);
  // console.log(socket.handshake.query.name, socket.id);
  // socket.broadcast.emit("online_users", onlineUsers);
  socket.on("message", (text) => {
    console.log(text);
    io.emit("message", text);
  });

  // socket.on("get_online_users", () => {
  //   socket.emit("online_users", onlineUsers);
  // });

  // socket.on("disconnect", () => {
  //   console.log(onlineUsers);
  //   onlineUsers = onlineUsers.filter((user) => user.id == socket.id);
  // });
});

httpServer.listen(port);
