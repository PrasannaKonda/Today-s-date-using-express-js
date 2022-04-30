const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  response.send(`${date}-${month}-${year}`);
});

module.exports = app;
