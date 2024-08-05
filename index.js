const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "dom",
  },
  {
    tema: "node",
    class: "lenguaje",
  },
  {
    tema: "oop",
    class: "lenguaje",
  },
  {
    tema: "typescript",
    class: "lenguaje",
  },
  {
    tema: "css",
    class: "diseño",
  },
  {
    tema: "dom",
    class: "special",
  },
];

const listaa = document.getElementsByClassName("lista")[0];
const elementosLi = listaa.getElementsByTagName("li");
for (let i = elementosLi.length - 1; i >= 0; i--) {
  if (
    elementosLi[i].textContent === "una opción" ||
    elementosLi[i].textContent === "otra opción" ||
    elementosLi[i].textContent === "otra opción más"
  ) {
    elementosLi[i].remove();
  }
}

const lista = document.getElementsByClassName("lista")[0];
cosasQueAprendimos.forEach((item) => {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = item.tema;
  nuevoElemento.classList.add(item.class);
  lista.appendChild(nuevoElemento);
});
