const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.get("/sse", (req, res) => {
  // setup sse login
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");

  res.write("data: Welcome to Server sent event \n\n");

  const intervalId = setInterval(() => {
    res.write(`data: Server Time ${new Date().toLocaleDateString()} \n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
