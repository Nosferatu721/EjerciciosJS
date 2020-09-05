// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const string_Array = (text, divider) => {
  let arrNew = text.split(divider);
  console.log(arrNew);
};

string_Array("Hola Que Tal", " ");
