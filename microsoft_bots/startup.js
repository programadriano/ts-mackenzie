const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//johnny-five
var five = require("johnny-five");
var board = new five.Board();

var led;
var led2;
var led3;
var led4;

board.on("ready", function() {
  led = new five.Led(13);
  led2 = new five.Led(12);
  led3 = new five.Led(11);
  led4 = new five.Led(10);

  this.repl.inject({
    led: led,
    led2: led,
    led3: led,
    led4: led
  });
});
//end johnny-five

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/", function(req, res, next) {
  res.status(200).send({
    title: "Ness -> JavaScript no mundo IOT",
    version: "0.0.1"
  });
});

app.get("/:command/:status", function(req, res, next) {
  var param = req.params.command;
  var status = req.params.status;

  if (status == "ligar") {
    switch (param) {
      case "comodo1":
        led.on();
        break;
      case "comodo2":
        led2.on();
        break;
      case "comodo3":
        led3.on();
        break;
      case "comodo4":
        led4.on();
        break;
    }
  } else if (status == "desligar") {
    switch (param) {
      case "comodo1":
        led.off();
        break;
      case "comodo2":
        led2.off();
        break;
      case "comodo3":
        led3.off();
        break;
      case "comodo4":
        led4.off();
        break;
    }
  }

  res.status(200).send({
    title: param + " - " + status,
    version: "0.0.1"
  });
});

module.exports = app;
