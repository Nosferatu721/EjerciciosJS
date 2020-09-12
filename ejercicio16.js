// Programa una función que devuelva el monto final después de aplicar un descuento a una
// cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto = 0, porcen = 0) => monto - monto * (porcen / 100);

console.log(descuento(1000, 20));
