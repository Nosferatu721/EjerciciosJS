// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
// devolverá "odnuM aloH".

const invertirPalabra = (palabra = "") => {
  if (!palabra) return console.error("Introduzca una palabra");
  // Tomar string y pasarlo a Array
  let arrNew = palabra.split("");
  // Invertir valores del array y unir el nuevo string
  console.log(arrNew.reverse().join(""));
};
