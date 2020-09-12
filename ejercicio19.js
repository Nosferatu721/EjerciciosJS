// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
// primero almacena los números pares y en el segundo los impares,
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objParImpar = (arr = []) => {
  let arrPar = [];
  let arrImpar = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? arrPar.push(arr[i]) : arrImpar.push(arr[i]);
  }
  console.log(arrPar);
  console.log(arrImpar);
  obj = {
    pares: arrPar,
    impares: arrImpar,
  };
  console.log(obj);
};

objParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
