const preguntas = [
    {
        id: 1,
        pregunta: "¿Con qué se pincha el dedo la princesa Aurora en la Bella Durmiente?",
        respuestas: {
            a: "Con una Rueca",
            b: "Con una aguja de costura",
            c: "Con la espina de una rosa"
        },
        respuestaCorrecta: "a",
        contenido: "Con una Rueca",
        puntaje: 10
    },
    {
        id: 2,
        pregunta: "¿Cómo se llama la empresa en dónde trabajaba Mr.Increíble?",
        respuestas: {
            a: "Sanitas",
            b: "Seguritas",
            c: "Síndrome"
        },
        respuestaCorrecta: "b",
        contenido: "Seguritas",
        puntaje: 10
    },
    {
        id: 3,
        pregunta: "¿Cuál de las siguientes películas no es de Disney?",
        respuestas: {
            a: "Ralph el Demoledor",
            b: "Intensamente",
            c: "Shrek"
        },
        respuestaCorrecta: "c",
        contenido:"Shrek",
        puntaje: 10
    },
    {
        id: 4,
        pregunta: "¿Qué película se considera el primer largometraje animado de la historia?",
        respuestas: {
            a: "Cenicienta",
            b: "Steamboat Willie",
            c: "Blancanieves y los siete enanos"
        },
        respuestaCorrecta: "c",
        contenido:"Blancanieves y los siete enanos",
        puntaje: 10
    },
    {
        id: 5,
        pregunta: "¿Qué animal piensa Lilo que es Stitch cuando lo adopta?",
        respuestas: {
            a: "Gato",
            b: "Perro",
            c: "Panda"
        },
        respuestaCorrecta: "b",
        contenido:"Perro",
        puntaje: 10
    },
    {
        id: 6,
        pregunta: "¿Quién es el personaje de la imágen?",
        respuestas: {
            a: "Milo Tatch",
            b: "Moliére",
            c: "Jumba"
        },
        respuestaCorrecta: "a",
        contenido:"Milo Tatch",
        puntaje: 10
    },
    {
        id: 7,
        pregunta: "¿Cómo se llaman los Ayudantes de Hades?",
        respuestas: {
            a: "Ira y Miedo",
            b: "Tristeza y Enojo",
            c: "Pánico y Pena"
        },
        respuestaCorrecta: "c",
        contenido:"Pánico y Pena",
        puntaje: 10
    },
    {
        id: 8,
        pregunta: "¿Porqué Mulán se alistó en el ejército imperial?",
        respuestas: {
            a: "Para evitar que fuera su padre enfermo",
            b: "Por que estaba enamorada de Li Sang",
            c: "Para vengar la muerte de su abuelo"
        },
        respuestaCorrecta: "a",
        contenido:"Para evitar que fuera su padre enfermo",
        puntaje: 10
    },
    {
        id: 9,
        pregunta: "En la Bella y la Bestia,¿Quién es el amigo de Gastón?",
        respuestas: {
            a: "Lumiere",
            b: "Lefou",
            c: "Maurice"
        },
        respuestaCorrecta: "b",
        contenido: "Lefou",
        puntaje: 10
    },
    {
        id: 10,
        pregunta: "¿Quién hace la voz original de Elsa en Frozen?",
        respuestas: {
            a: "Lea Michelle",
            b: "Eva Noblezada",
            c: "Idina Menzel"
        },
        respuestaCorrecta: "c",
        contenido:"Idina Menzel",
        puntaje: 10
    }
];

const jugar = confirm("Escribe la letra de la respuesta correcta, ¿Estás Listo?");
let puntaje = 0;

if (jugar) {
  preguntas.forEach((pregunta) => {
    const respuestaUsuario = prompt(
      `${pregunta.pregunta}\n` +
      `a) ${pregunta.respuestas.a}\n` +
      `b) ${pregunta.respuestas.b}\n` +
      `c) ${pregunta.respuestas.c}\n`
    ).toLowerCase();

    if (respuestaUsuario === pregunta.respuestaCorrecta.toLowerCase()) { 
      puntaje += pregunta.puntaje;
      alert("¡Respuesta correcta!");
    } else {
      alert(`Incorrecto, la respuesta correcta es: ${pregunta.respuestaCorrecta} ${pregunta.contenido}`);
    }

    alert(`¡Sigue adelante! Tu puntaje actual es: ${puntaje}`);
  });

  alert(`¡Felicidades terminaste el juego! Tu puntaje final es: ${puntaje}`);

  if (puntaje > 90) {
    alert("¡Felicidades! Eres un experto en Disney.");
} else if (puntaje >= 50) {
    alert("¡Bien hecho! Un poco más y serás todo un conocedor de Disney");
}
else if (puntaje < 50) {
    alert("¡Oops! Te hace falta ver más Disney");
}
}