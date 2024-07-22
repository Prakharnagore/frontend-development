const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

let data = "Initial Data";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/getdata", (req, res) => {
  res.send({ data });
});

app.get("/updateddata", (req, res) => {
  data = "updatedData";
  res.send({ data });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
