// VARIABLES

var jugador1 = [0, 1, 2];
var jugador2 = [0, 1, 2];
var suma = jugador1 + jugador2;

  // INSTRUCCIONES
console.log("Instrucciones: Piedra = 0, Papel = 1, Tijera = 2");

// FUNCIONES

function juego(jugador1, jugador2) {
    if (jugador1 == 0) {
        switch (jugador2) {
            case 0:
                console.log("Empate");
                break;
            case 1:
                console.log("Gana el jugador 2");
                break;
            case 2:
                console.log("Gana el jugador 1");
                break;
    }
  }
  if (jugador1 == 1) {
    switch (jugador2) {
        case 0:
            console.log("Gana el jugador 1");
            break;
        case 1:
            console.log("Empate");
            break;
        case 2:
            console.log("Gana el jugador 2");
            break;
}
}
if (jugador1 == 2) {
    switch (jugador2) {
        case 0:
            console.log("Gana el jugador 2");
            break;
        case 1:
            console.log("Gana el jugador 1");
            break;
        case 2:
            console.log("Empate");
            break;
}
}
}