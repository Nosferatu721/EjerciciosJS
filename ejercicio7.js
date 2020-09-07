// Programa una función que valide si una palabra o frase dada, es un palíndromo
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const validarPalindromo = (frase = "") => {
  if (!frase || typeof frase !== "string")
    return console.error("Introduce la frase");
  let fraseUpper = frase.toLowerCase();
  let fraseInversa = fraseUpper.toLowerCase().split("");
  fraseInversa = fraseInversa.reverse().join("");
  console.log(fraseUpper === fraseInversa ? true : false);
};

validarPalindromo("OsO");
