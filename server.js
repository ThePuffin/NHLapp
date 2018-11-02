const express = require("express");
let app = express();

const axios = require("axios");

app.get("/", (req, res) => {
  res.send("<p>hello world</p>");
});


app.listen(3000);
