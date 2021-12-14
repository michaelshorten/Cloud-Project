"use strict";

const express = require("express");
var Request = require("request");

const PORT = 100;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  var welcome = {
    "Welcome Message": "WELCOME TO QUB EDITOR PROXY",
    "AVAILABLE URLS": {
      wordcount: "http://editor-wordcount.40266686.qpc.hal.davecutting.uk",
      charcount: "http://editor-charcount.40266686.qpc.hal.davecutting.uk",
      vowelcount: "http://function3.40266686.qpc.hal.davecutting.uk",
      constcount: "http://function4.40266686.qpc.hal.davecutting.uk",
      commacount: "http://function5-java.40266686.qpc.hal.davecutting.uk",
      fullstopcount: "http://function6.40266686.qpc.hal.davecutting.uk",
    },
  };

  res.send(JSON.stringify(welcome));
});
app.get("/wordcount", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  var url =
    "http://editor-wordcount.40266686.qpc.hal.davecutting.uk/?input=" + input;
  try {
    Request.get(url, (error, response, body) => {
      res.end(response.body);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/charcount", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  var url =
    "http://editor-charcount.40266686.qpc.hal.davecutting.uk/?input=" + input;
  try {
    Request.get(url, (error, response, body) => {
      res.end(response.body);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/vowelcount", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  var url = "http://function3.40266686.qpc.hal.davecutting.uk/?input=" + input;
  try {
    Request.get(url, (error, response, body) => {
      res.end(response.body);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/constcount", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  var url = "http://function4.40266686.qpc.hal.davecutting.uk/?input=" + input;
  try {
    Request.get(url, (error, response, body) => {
      res.end(response.body);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/commacount", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  var url =
    "http://function5-java.40266686.qpc.hal.davecutting.uk/?input=" + input;
  try {
    Request.get(url, (error, response, body) => {
      res.end(response.body);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/fullstop", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  var input = req.query.input;
  var url = "http://function6.40266686.qpc.hal.davecutting.uk/?input=" + input;
  try {
    Request.get(url, (error, response, body) => {
      res.end(response.body);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, HOST);
