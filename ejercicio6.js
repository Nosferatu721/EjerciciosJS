// Programa una función para contar el número de veces que se repite una palabra en un texto largo,
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (texto = "", palabra = "") => {
  let count = 0;
  if (!texto) return console.error("Introduzca el texto");
  if (!palabra) return console.error("Introduzca la palabra");

  let arr = texto.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === palabra) count++;
  }
  console.log(count);
};
