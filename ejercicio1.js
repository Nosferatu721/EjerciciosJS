// Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// Variables posibles
let variable1 = "Elkin Torres Poveda";
let variable2 = ["Elkin", "Kilian", "Ana", "Nestor"];

// Function
const showSize = (param) => {
  try {
    if (typeof(param) !== 'string') throw "Not is Text";
    size = param.length;
    console.log(`El texto: "${param}" tiene un tamaño de ${size}`);
  } catch (err) {
    console.error("Error " + err);
  }
};

showSize(variable1);
