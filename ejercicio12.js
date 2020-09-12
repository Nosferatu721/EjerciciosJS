// Programa una función que determine si un número es primo (aquel que solo es divisible por sí
// mismo y 1) o no, pe. miFuncion(7) devolverá true.

const defPrimo = (numero = 0) => {
  let count = 0;
  for (let i = 1; i < numero; i++) {
    if (!(numero % i)) count++;
  }
  if (count) return true;
};

console.log(defPrimo(7));
