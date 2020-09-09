// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
// se define como el producto de todos los números enteros positivos desde 1 hasta n),
// pe. miFuncion(5) devolverá 120.

const factorial = (num = 0) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
};

factorial(5);
