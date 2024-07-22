const express = require("express");
const app = express();
const PORT = process.env.PORT || 5010;

const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwareded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  next();
};

app.use(redirectToHttps);

app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  res.removeHeader("X-Powered-By");
  next();
});

app.get("/list", (req, res) => {
  res.send({
    id: 1,
    title: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT 5010");
});
