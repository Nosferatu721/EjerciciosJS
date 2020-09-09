// Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNumber = () => {
  let vtt = true;
  while (vtt) {
    let random = Math.floor(Math.random() * 600);
    random >= 501 ? (vtt = false) : (vtt = true);
    if (!vtt) return console.log(random);
  }
};
randomNumber();
