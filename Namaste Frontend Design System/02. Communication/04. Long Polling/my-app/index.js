const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

let data = "Initial Data";
const watingClients = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/getdata", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    watingClients.push(res);
  }
});

app.get("/updateddata", (req, res) => {
  data = req.query.data;
  while (watingClients.length > 0) {
    const client = watingClients.pop();
    client.json({ data });
  }
  res.send({ Success: "Data updated successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
