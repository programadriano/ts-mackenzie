var builder = require("botbuilder");
var restify = require("restify");
var five = require("johnny-five");

//board
var led;
var board = new five.Board();
board.on("ready", function() {
  led = new five.Led(13);
});

//Restify
var server = restify.createServer();

var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post("/api/messages", connector.listen());

var bot = new builder.UniversalBot(connector, function(session) {
  if (session.message.text == "ligar") {
    led.on();
  } else if (session.message.text == "desligar") {
    led.off();
  }
});

module.exports = server;
