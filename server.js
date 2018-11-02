const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("<p>hello world</p>");
});
