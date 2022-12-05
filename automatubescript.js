function adicionarTrailer() {
  trailer = document.querySelector("#filme").value;
  arrayFilme = [trailer.substring(0, 24), trailer.substring(32, 43)];
  validarTrailer(trailer);
  filme.value = "";
}

function validarTrailer(trailer) {
  if (trailer.includes("https://www.youtube.com/watch?v=")) {
    exibirTrailer(trailer);
  } else {
    alert("Deve ser um video do youtube!");
    trailer = "";
  }
}
function exibirTrailer() {
  listaFilmes = document.querySelector("#video");
  elementoFilme =
    "<iframe src=" +
    arrayFilme[0] +
    "embed/" +
    arrayFilme[1] +
    "frameborder='0'; allowfullscreen;></inframe>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}
