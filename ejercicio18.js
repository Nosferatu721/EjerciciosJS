// Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho
// array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const menorYMayor = (arr = []) => {
  let mayorPositivo = 0;
  let mayorNegativo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] > mayorPositivo) mayorPositivo = arr[i];
    } else {
      if (arr[i] < mayorNegativo) mayorNegativo = arr[i];
    }
  }
  console.log(`Mayor: ${mayorPositivo} y Menor: ${mayorNegativo}`);
};

menorYMayor([1, 4,95, 59, -20, -50]);
