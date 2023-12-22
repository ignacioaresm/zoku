console.log('Inicio del Programa')

// Declarar función
function preguntar(pregunta) {
    return prompt(pregunta);
}
  
// Preguntar nombre
let nombre = preguntar("¿Cuál es tu nombre?");
 
// Preguntar edad
let edad = parseInt(preguntar("¿Cuántos años tenés?"));
  
// Preguntar sexo
let sexo = preguntar("¿Eres hombre o mujer?");
  
// Resultados
let resultado = "";
  if (edad <= 10) {
    resultado = "Kodomo";
  } else if (edad <= 18 && sexo === "hombre") {
    resultado = "Shōnen";
  } else if (edad <= 18 && sexo === "mujer") {
    resultado = "Shōjo";
  } else if (sexo === "hombre") {
    resultado = "Seinen";
  } else if (sexo === "mujer") {
    resultado = "Josei";
}

// Mostrar mensaje final
alert(`Bienvenid(x) a la Tribu, ${nombre}! Te recomendamos que busques tus mangas favoritos en la sección ${resultado} de nuestra web, Kanpai ;)`);