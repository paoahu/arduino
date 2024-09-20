var five = require("johnny-five");
var keypress = require("keypress");  //  keypress para detectar las teclas
var board = new five.Board();

board.on("ready", function() {
  // Definir los LEDs 
  var ledRed = new five.Led(9);   
  var ledYellow = new five.Led(10); 
  var ledGreen = new five.Led(11); 

  // Configurar para escuchar teclas
  keypress(process.stdin);

  process.stdin.on("keypress", function (ch, key) {
    if (key) {
      // Apagamos los leds así cuando cambiamos de tecla, se apaga el led anterior
      ledRed.off();
      ledYellow.off();
      ledGreen.off();


      if (key.name === 'r') {
        ledRed.on();
      } else if (key.name === 'y') {
        ledYellow.on();
      } else if (key.name === 'g') {
        ledGreen.on();
      } else if (key.name === 'o'){
        ledRed.off();
        ledYellow.off();
        ledGreen.off();

      }

      // Presionamos q para salir
      if (key.name === 'q') {
        ledRed.off();
        ledYellow.off();
        ledGreen.off();
        process.exit();
      }
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
});
