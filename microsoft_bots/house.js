var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  var led2 = new five.Led(12);
  var led3 = new five.Led(11);
  var led4 = new five.Led(10);
  var piezo = new five.Piezo(3);

  photoresistor = new five.Sensor({
    pin: "A0",
    freq: 250
  });
  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
    led2: led,
    led3: led,
    led4: led,
    piezo: piezo
  });

  photoresistor.on("data", function() {
    if (this.value <= 200) {
      led4.off();
    } else if (this.value > 200) {
      led4.on();
    }
  });

  led.on();
  led2.on();
  led3.on();

  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["A4", 1 / 4],
      [null, 1 / 4],
      ["A4", 1],
      ["G4", 1],
      [null, 1 / 2],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["G4", 1 / 4],
      [null, 1 / 4],
      ["G4", 1],
      ["F4", 1],
      [null, 1 / 2]
    ],
    tempo: 100
  });

  // Plays the same song with a string representation
  piezo.play({
    // song is composed by a string of notes
    // a default beat is set, and the default octave is used
    // any invalid note is read as "no note"
    song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
    beats: 1 / 4,
    tempo: 100
  });
 
});
