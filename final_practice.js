const { Board, Proximity, Servo } = require("johnny-five");
const board = new Board();

board.on("ready", function () {

  const servo = new Servo(6); // Conectamos el servo en el pin 6


  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 3 // Pin del sensor 
  });

  // Inicializa el servo en 180 o 0 grados, depende de la papelera
  servo.to(180);

  function medirDistancia() {
    // proximity.once  (se ejecuta solo una vez) devuelve el evento "data"
    // en este caso el evento es recibir datos de un sensor 
    // y ejecuta la función que le pasamos
    proximity.once("data", function () {
        // cuando el evento se emite, podemos acceder a this.cm y this.inches
      const distancia = this.cm; // Obtener la distancia en cm

      console.log(`Distancia: ${distancia} cm`);

      // Si la distancia es menor a 5 cm, mover el servo 
      if (distancia < 5) {
        console.log("Distancia menor a 3 cm, moviendo el servo 180 grados...");
        servo.to(0); // Mueve el servo 180 grados

        // Espera 3 segundos antes de volver el servo a su posición inicial
        setTimeout(() => {
          console.log("Esperando 3 segundos para volver el servo a 0 grados...");
          servo.to(180); 
        }, 3000);
      }

      // llamamos a la función cuando haya pasado un segundo
      console.log("Esperando 1 segundo antes de volver a medir...");
      setTimeout(medirDistancia, 1000); 
    });
  }

  // Iniciar la primera medición
  medirDistancia();
});

