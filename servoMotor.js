const { Board, Servo } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    const servo = new Servo(7);

    // This will grant access to the led instance
    // from within the REPL that's created when
    // running this program.
    board.repl.inject({
        servo
    });

    servo.sweep();
});