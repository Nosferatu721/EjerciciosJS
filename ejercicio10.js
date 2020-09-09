// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un
// sentido que en otro), pe. miFuncion(2002) devolverá true.

const functionN = (number = 0) => {
  let vtt = false;
  let numberToString = number.toString();
  let reversoNum = number.toString().split("").reverse().join("");
  numberToString === reversoNum ? (vtt = true) : (vtt = false);
  return vtt;
};

console.log(functionN(2502));
