const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Webhook endpoint
app.get("/webhook", (req, res) => {
  // Extract the payload from the incoming POST request
  const payload = req.body;

  // Log the received payload
  console.log("Received webhook payload:", payload);

  // Optionally, send a response to the sender
  res.status(200).send("Webhook received successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
