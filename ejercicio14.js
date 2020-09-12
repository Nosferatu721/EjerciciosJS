// Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
// pe. miFuncion(0,"C") devolverá 32°F.

const grados = (numGrados = 0, tipoGrados = "") => {
  tipoGrados === "C"
    ? console.log(numGrados + 32 + "F")
    : tipoGrados === "F"
    ? console.log(numGrados - 32 + "C")
    : console.log("Error");
};

grados(36, "F");
