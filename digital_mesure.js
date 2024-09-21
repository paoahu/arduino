
// Hello ISDI Coders

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({
    // controller: "JHD1313M1"
    controller: "PCF8574"
  });


  lcd.cursor(0, 0).print("hello");

  

  lcd.cursor(1, 0).print("ISDI Coders");
});

// ULTRASONIDOS

const { Board, Proximity } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 3
  });

  proximity.on("change", () => {
    const {centimeters, inches} = proximity;
    console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    console.log("  in  : ", inches);
    console.log("-----------------");
  });
});


// BOTH

// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   // Configuración del monitor LCD
//   var lcd = new five.LCD({
//     // controller: "PCF8574"
//     controller: "PCF8574"
//   });

//   // Configuración del sensor de proximidad (ultrasonido)
//   const proximity = new five.Proximity({
//     controller: "HCSR04",
//     pin: 3 // El pin donde está conectado el sensor
//   });

//   // Inicializamos el mensaje en el LCD
//   lcd.cursor(0, 0).print("Distance:");
  
//   // Evento que se ejecuta cuando hay un cambio en la distancia detectada
//   proximity.on("change", () => {
//     const { centimeters } = proximity;

//     // Borrar la segunda línea del LCD antes de imprimir la nueva distancia
//     lcd.clear().cursor(0, 0).print("Distance:");
//     lcd.cursor(1, 0).print(centimeters + " cm"); // Muestra solo en cm
//   });
// });
