const { Board, Led } = require("johnny-five")

const board = new Board()

board.on("ready", () => {
    const ledYellow = new Led(7)
    const ledGreen = new Led(6)
    const ledRed = new Led(5)

    console.log("Control de LEDs activado. Presiona 'R' para el LED rojo, 'Y' para el LED amarillo, 'G' para el LED verde, 'O' para apagar todos los LEDs.")

    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.setEncoding('utf8')

    process.stdin.on('data', (key) => {
        switch (key.toLowerCase()) {
            case 'r':
                console.log("Encendiendo LED Rojo")
                ledRed.on()
                ledYellow.off()
                ledGreen.off()
                break;
            case 'y':
                console.log("Encendiendo LED Amarillo")
                ledYellow.on()
                ledRed.off()
                ledGreen.off()
                break;
            case 'g':
                console.log("Encendiendo LED Verde")
                ledGreen.on()
                ledRed.off()
                ledYellow.off()
                break;
            case 'o':
                console.log("Apagando todos los LEDs")
                ledRed.off()
                ledYellow.off()
                ledGreen.off()
                break;
            case '\u0003': // Ctrl+C para salir
                console.log("Saliendo...")
                process.exit()
                break;
            default:
                console.log("Entrada inválida.")
                break;
        }
    })
})
