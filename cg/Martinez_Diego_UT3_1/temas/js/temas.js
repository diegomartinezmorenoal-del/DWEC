const selector = document.querySelector("#selector-tema");
const hojaClara = document.querySelector('link[title="Claro"]');
const hojaOscura = document.querySelector('link[title="Oscuro"]');

function aplicarTema(tema) {
  const oscuro = tema === "oscuro";
  hojaClara.disabled = oscuro;
  hojaOscura.disabled = !oscuro;
}

selector.addEventListener("change", () => aplicarTema(selector.value));
aplicarTema("claro");
