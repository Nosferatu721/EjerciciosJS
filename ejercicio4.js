// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
// Hola Mundo Hola Mundo Hola Mundo.

const repeatString = (txt, numRepeat) => {
  while (numRepeat) {
    console.log(txt);
    numRepeat--;
  }
};

repeatString("Buenas", 5);
