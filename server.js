const express = require("express");
let app = express();

const teams = require("./teams.json");

const axios = require("axios");

app.get("/", (req, res) => {
  res.send("<p>hello</p>");
});

app.get("/api", (req, res) => {
  res.json(teams);
});

app.listen(3000);
