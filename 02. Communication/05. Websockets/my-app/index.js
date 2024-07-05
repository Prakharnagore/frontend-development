const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const path = require("path");
// socket.io
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);

// socket io
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Connection established");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", (msg) => {
    console.log("User disconnected!");
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log(`Server running at port ${3000}`);
});
