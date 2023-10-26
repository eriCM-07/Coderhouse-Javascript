
let preguntaactualIndex = 0;
let puntaje = parseInt(localStorage.getItem("puntaje")) || 0;

const preguntaimagen = document.getElementById("pregunta-imagen");
const preguntaTexto = document.getElementById("pregunta-texto");
const listaOpciones = document.getElementById("lista-opciones");
const mostrarPuntaje = document.getElementById("puntaje");
const puntajeContainer = document.getElementById("puntajeContainer");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnIniciar = document.getElementById("btn-iniciar");
const imgIniciar = document.getElementById("img-iniciar");
const preguntaContainer = document.getElementById("pregunta-container");
const resultadoContainer = document.getElementById("resultado-container");
const mensajeResultado = document.getElementById("mensaje-resultado");
const puntajeFinal = document.getElementById("puntaje-final");
const btnReiniciar = document.getElementById("btn-reiniciar");

async function iniciarJuego() {
    localStorage.removeItem("puntaje");
    const respuesta = await fetch("./preguntas.json");
    const preguntas = await respuesta.json()
    btnIniciar.style.display = "none";
    imgIniciar.style.display = "none";
    preguntaContainer.style.display = "block";
    mostrarPuntaje.textContent = puntaje;
    mostrarPregunta(preguntas);
    mostrarPuntajeContainer();
    btnSiguiente.addEventListener("click",() => {
        preguntaactualIndex++;
        if (preguntaactualIndex < preguntas.length) {
            mostrarPregunta(preguntas);
            listaOpciones.style.pointerEvents = "auto";
            btnSiguiente.style.display = "none";
        } else {
            mostrarResultadoFinal();
        }
    });
}

btnIniciar.addEventListener("click", iniciarJuego);
btnReiniciar.addEventListener("click", reiniciarJuego);

async function reiniciarJuego() {
    preguntaactualIndex = 0;
    puntaje = 0;
    localStorage.removeItem("puntaje");
    mostrarPuntaje.textContent = puntaje;
    resultadoContainer.style.display = "none";
    btnIniciar.style.display = "block";
    imgIniciar.style.display = "block";
    btnReiniciar.style.display = "none";

    mostrarPregunta(preguntas);
    listaOpciones.style.pointerEvents = "auto";
}

function mostrarPuntajeContainer() {
    puntajeContainer.style.display = "block";
    btnSiguiente.style.display = "block"; 
}

function mostrarPregunta(preguntas) {
    const preguntaActual = preguntas[preguntaactualIndex];
    preguntaimagen.src = preguntaActual.imagen;
    preguntaTexto.textContent = preguntaActual.pregunta;

    listaOpciones.innerHTML = "";
    preguntaActual.opciones.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkrespuesta(option, preguntaActual));
        listaOpciones.appendChild(li);
    });
}

function checkrespuesta(selectedOption, preguntaActual) {
    const respuestacorrecta = preguntaActual.respuesta;
    const selectedLi = Array.from(listaOpciones.children).find((li) => li.textContent === selectedOption);

    if (selectedOption === respuestacorrecta) {
        selectedLi.style.backgroundColor = "#6df3a0";
        puntaje += 10;
    } else {
        selectedLi.style.backgroundColor = "#f36d6d";
        const correctLi = Array.from(listaOpciones.children).find((li) => li.textContent === respuestacorrecta);
        correctLi.style.backgroundColor = "#6df3a0";
    }

    listaOpciones.style.pointerEvents = "none";
    btnSiguiente.style.display = "block";
    mostrarPuntaje.textContent = puntaje;
    localStorage.setItem("puntaje", puntaje);
}

function mostrarResultadoFinal() {
    preguntaContainer.style.display = "none";
    puntajeContainer.style.display = "none";
    btnSiguiente.style.display = "none";

    resultadoContainer.style.display = "block";
    puntajeFinal.textContent = "Puntuación final: " + puntaje;

    let mensaje;

    if (puntaje >= 80) {
        mensaje = "¡Felicidades! Eres un experto en Disney.";
    } else if (puntaje >= 50) {
        mensaje = "¡Bien hecho! Un poco más y serás todo un conocedor de Disney";
    } else {
        mensaje = "¡Oops! Te hace falta ver más Disney";
    }

    mensajeResultado.textContent = mensaje;

    btnReiniciar.style.display = "block";
    listaOpciones.style.pointerEvents = "none";
}