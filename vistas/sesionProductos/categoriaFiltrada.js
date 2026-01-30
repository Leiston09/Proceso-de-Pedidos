import { obtenerProductos } from "../../controlador/productoController.js";
import { renderProductos } from "./renderProductos.js"; 

const selectorCategorias = document.getElementById("selector-categorias");
const enlacesCategorias = document.querySelectorAll("aside.categorias ul li a");

enlacesCategorias.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();

    const categoriaSeleccionada = enlace.dataset.categoria;
    const todosLosProductos = obtenerProductos();

    if (selectorCategorias.value === "individual") {
      const listaFiltrada = todosLosProductos.filter(p => p.categoria === categoriaSeleccionada);
      renderProductos(listaFiltrada);
    } else {
      renderProductos(todosLosProductos);
      
      setTimeout(() => {
        const target = document.querySelector(`.producto[data-categoria="${categoriaSeleccionada}"]`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }

    enlacesCategorias.forEach(a => a.classList.remove("activo"));
    enlace.classList.add("activo");
  });
});