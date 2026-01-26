import { obtenerProductos } from "../../controlador/productoController.js";
import { renderProductos } from "./sesionPedidos.js";

const selectorCategorias = document.getElementById("selector-categorias");
const enlacesCategorias = document.querySelectorAll("aside.categorias ul li a");

// FILTRO POR ENLACES Y SCROLL SUAVE
enlacesCategorias.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();

    const categoria = enlace.dataset.categoria; // Usamos data-categoria correctamente

    // Scroll suave hacia el primer producto de esa categoría
    const targetProducto = document.querySelector(`.producto[data-categoria="${categoria}"]`);
    if (targetProducto) {
      targetProducto.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Filtrar si selector está en modo "individual"
    if (selectorCategorias.value === "individual") {
      const listaFiltrada = obtenerProductos().filter(p => p.categoria === categoria);
      renderProductos(listaFiltrada);
    } else {
      renderProductos(obtenerProductos());
    }

    // Actualizar clase activo
    enlacesCategorias.forEach(a => a.classList.remove("activo"));
    enlace.classList.add("activo");
  });
});

