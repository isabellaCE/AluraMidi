function tocaSom(idElementoAudio) {
  const element = document.querySelector(idElementoAudio);

  element && element.localName === "audio"
    ? element.play()
    : console.log("Elemento não encontrado");
}

const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas.forEach((element) => {
  const idAudio = `#som_${element.classList[1]}`;
  element.onclick = () => tocaSom(idAudio);

  element.onkeydown = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      element.classList.add("ativa");
    }
  };

  element.onkeyup = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      element.classList.remove("ativa");
    }
  };
});
