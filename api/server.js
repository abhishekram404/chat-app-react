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

io.on("connection", (socket) => {
  socket.on("message", (text) => {
    console.log(text);
  });
});

httpServer.listen(port);
