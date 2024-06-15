// Array con las opciones de jugada
const opciones = ["piedra", "papel", "tijera"];
let puntosUsuario = 0;
let puntosOrdenador = 0;

let botones = document.querySelectorAll(".boton-jugada");
let resultados = document.getElementById("resultados");
let contadorUsuario = document.getElementById("contador-usuario");
let contadorOrdenador = document.getElementById("contador-ordenador");

function manejarClickBoton() {
  let eleccionUsuario = this.dataset.jugada;
  let eleccionOrdenador = generarJugadaOrdenador();
  let resultado = obtenerResultado(eleccionUsuario, eleccionOrdenador);
  mostrarResultado(eleccionUsuario, eleccionOrdenador, resultado);
  actualizarPuntuacion(resultado);
}

botones.forEach(function (boton) {
  boton.addEventListener("click", manejarClickBoton);
});

function generarJugadaOrdenador() {
  let indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

function obtenerResultado(usuario, ordenador) {
  if (usuario === ordenador) {
    return "empate";
  } else if (
    (usuario === "piedra" && ordenador === "tijera") ||
    (usuario === "papel" && ordenador === "piedra") ||
    (usuario === "tijera" && ordenador === "papel")
  ) {
    return "ganaUsuario";
  } else {
    return "ganaOrdenador";
  }
}

function mostrarResultado(usuario, ordenador, resultado) {
  let mensaje =
    "Tú elegiste " + usuario + ", el ordenador eligió " + ordenador + ". ";
  if (resultado === "empate") {
    mensaje += "¡Es un empate!";
  } else if (resultado === "ganaUsuario") {
    mensaje += "¡Tú ganas! ";
  } else {
    mensaje += "¡El ordenador gana!";
  }
  resultados.textContent = mensaje;
}

function actualizarPuntuacion(resultado) {
  if (resultado === "ganaUsuario") {
    puntosUsuario++;
    contadorUsuario.textContent = "Tus puntos: " + puntosUsuario;
  } else if (resultado === "ganaOrdenador") {
    puntosOrdenador++;
    contadorOrdenador.textContent = "Puntos de la máquina: " + puntosOrdenador;
  }
}
