"use strict";

const express = require("express");

const PORT = 85;
const HOST = "0.0.0.0";

var charcount = require("./charcount");

const app = express();
app.get("/", (req, res) => {
  var output = {
    error: false,
    string: "",
    errorMessage: "",
    answer: 0,
  };

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  if (input == "") {
    output.error = true;
    output.errorMessage = "no value entered";
  } else {
    var answer = charcount.counter(input);
    output.answer = answer;
    output.string = "Contains " + answer + " characters";
  }
  res.end(JSON.stringify(output));
});
app.listen(PORT, HOST);
module.exports = app;
