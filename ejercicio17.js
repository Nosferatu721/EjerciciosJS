// Programa una función que dado un array numérico devuelve otro array con los números
// elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarAlCuadrado = (arr = []) => {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    arrNew.push(arr[i] ** 2);
  }
  console.log(arrNew);
};

elevarAlCuadrado([1, 2, 3, 4]);
