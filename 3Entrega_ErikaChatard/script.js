const preguntas = [
    {
        id: 1,
        imagen: "img/pregunta1.jpg",
        pregunta: "¿Con qué se pincha el dedo la princesa Aurora en la Bella Durmiente?",
        opciones: ["Con una Rueca", "Con una aguja de costura", "Con la espina de una rosa"],
        respuesta: "Con una Rueca",
    },
    {
        id: 2,
        imagen: "img/pregunta2.jpg",
        pregunta: "¿Cómo se llama la empresa en dónde trabajaba Mr.Increíble?",
        opciones: ["Sanitas", "Seguritas", "Síndrome"],
        respuesta: "Seguritas",
    },
    {
        id: 3,
        imagen: "img/pregunta3.jpg",
        pregunta: "¿Cuál de las siguientes películas no es de Disney?",
        opciones: ["Ralph el Demoledor", "Intensamente", "Shrek"],
        respuesta:"Shrek",
    },
    {
        id: 4,
        imagen: "img/pregunta4.jpg",
        pregunta: "¿Qué película se considera el primer largometraje animado de la historia?",
        opciones: ["Cenicienta", "Steamboat Willie", "Blancanieves y los siete enanos"],
        respuesta:"Blancanieves y los siete enanos",
    },
    {
        id: 5,
        imagen: "img/pregunta5.jpg",
        pregunta: "¿Qué animal piensa Lilo que es Stitch cuando lo adopta?",
        opciones: ["Gato", "Perro", "Panda"],
        respuesta:"Perro",
    },
    {
        id: 6,
        imagen: "img/pregunta6.jpg",
        pregunta: "¿Quién es el personaje de la imágen?",
        opciones: ["Milo Tatch", "Moliére", "Jumba"],
        respuesta:"Milo Tatch",
    },
    {
        id: 7,
        imagen: "img/pregunta7.jpg",
        pregunta: "¿Cómo se llaman los Ayudantes de Hades?",
        opciones: ["Ira y Miedo", "Tristeza y Enojo", "Pánico y Pena"],
        respuesta:"Pánico y Pena",
    },
    {
        id: 8,
        imagen: "img/pregunta8.jpg",
        pregunta: "¿Porqué Mulán se alistó en el ejército imperial?",
        opciones: ["Para evitar que fuera su padre enfermo", "Por que estaba enamorada de Li Sang", "Para vengar la muerte de su abuelo"],
        respuesta:"Para evitar que fuera su padre enfermo",
    },
    {
        id: 9,
        imagen: "img/pregunta9.jpg",
        pregunta: "En la Bella y la Bestia,¿Quién es el amigo de Gastón?",
        opciones: ["Lumiere", "Lefou", "Maurice"],
        respuesta: "Lefou",
    },
    {
        id: 10,
        imagen: "img/pregunta10.jpg",
        pregunta: "¿Quién hace la voz original de Elsa en Frozen?",
        opciones: ["Lea Michelle", "Eva Noblezada", "Idina Menzel"],
        respuesta:"Idina Menzel",
    }
];

let preguntaactualIndex = 0;
let puntaje = localStorage.getItem("puntaje") || 0;

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

function iniciarJuego() {
    btnIniciar.style.display = "none";
    imgIniciar.style.display = "none";
    preguntaContainer.style.display = "block";
    mostrarPuntaje.textContent = puntaje;
    mostrarPregunta();

    mostrarPuntajeContainer();
}

function mostrarPuntajeContainer() {
    puntajeContainer.style.display = "block";
    btnSiguiente.style.display = "block"; 
}

btnIniciar.addEventListener("click", iniciarJuego);

function mostrarPregunta() {
    const preguntaActual = preguntas[preguntaactualIndex];
    preguntaimagen.src = preguntaActual.imagen;
    preguntaTexto.textContent = preguntaActual.pregunta;

    listaOpciones.innerHTML = "";
    preguntaActual.opciones.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkrespuesta(option));
        listaOpciones.appendChild(li);
    });
}

function checkrespuesta(selectedOption) {
    const preguntaActual = preguntas[preguntaactualIndex];
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

btnSiguiente.addEventListener("click", () => {
    preguntaactualIndex++;
    if (preguntaactualIndex < preguntas.length) {
        mostrarPregunta();
        listaOpciones.style.pointerEvents = "auto";
        btnSiguiente.style.display = "none";
    } else {
        mostrarResultadoFinal();
    }
});

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
    localStorage.removeItem("puntaje");
}