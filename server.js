const express = require("express");
let app = express();
const port = 4000;
const fs = require("fs");

function exists(path) {
  //Remember file access time will slow your program.
  try {
    fs.accessSync(path);
  } catch (err) {
    return false;
  }
  return true;
}

function createJSON(url, name) {
  console.log(`creation d'un fichier ${name}.json`);
  const axios = require("axios");
  const allTeam = axios.get(url).then(function(response) {
    fs.writeFile(`${name}.json`, JSON.stringify(response.data), function(err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

if (exists("./teams.json") === false) {
  console.log("nope");
  createJSON("https://statsapi.web.nhl.com/api/v1/teams/", "teams");
  // const axios = require("axios");
  // const allTeam = axios
  //   .get("https://statsapi.web.nhl.com/api/v1/teams/")
  //   .then(function(response) {
  //     fs.writeFile("teams.json", JSON.stringify(response.data), function(err) {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   });
} else {
  fs.stat("/mnt/data/dev/NHL app/teams.json", (req, res) => {
    const dateNow = Date.now();
    const dateCreate = res.birthtimeMs;
    console.log(dateNow - res.birthtimeMs);
    if (dateNow - res.birthtimeMs > 1000 * 60 * 60 * 24) {
      console.log("oui");
      createJSON("https://statsapi.web.nhl.com/api/v1/teams/", teams);
    } else {
      console.log("non");
    }
  });
}

app.get("/", (req, res) => {
  res.send("<p>hello</p>");
});

app.get("/api", (req, res) => {
  const teams = require("./teams.json");
  res.json(teams);
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
