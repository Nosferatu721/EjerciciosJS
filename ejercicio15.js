// Programa una función para convertir números de base binaria a decimal y viceversa,
// pe. miFuncion(100,2) devolverá 4 base 10.

const binToDec = (num1 = 0) => {
  let sum = 0;
  let num1Arr = num1.toString().split("").reverse();
  for (let i = 0; i < num1Arr.length; i++) {
    if (parseInt(num1Arr[i])) {
      sum += 2 ** i;
    }
  }
  console.log(sum);
};

binToDec(100);
