// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"

const resolveString = (text, numLetters) => {
  let textFinal = text.substring(0, numLetters);
  console.log(textFinal);
};

resolveString("Polombia", 4);
