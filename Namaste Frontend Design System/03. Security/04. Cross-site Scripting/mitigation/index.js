const express = require("express");
const path = require("path");
const app = express();
const PORT = 3010;

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
1;
