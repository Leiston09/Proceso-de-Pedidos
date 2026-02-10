import { renderProductos } from "../renderProductos.js"; 

const selectorCategorias = document.getElementById("selector-categorias");
const enlacesCategorias = document.querySelectorAll("aside.categorias ul li a");

// función para obtener productos desde PHP
async function obtenerProductos() {
    try {
        const resp = await fetch("../../Controller/ProductoController.php?accion=obtenerProductos");
        if (!resp.ok) throw new Error("Error en la respuesta del servidor");
        return await resp.json();
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}

// función que actualiza los productos según la categoría
async function filtrarPorCategoria(categoriaSeleccionada) {
    const todosLosProductos = await obtenerProductos();

    if (!Array.isArray(todosLosProductos)) return;

    if (selectorCategorias.value === "individual") {
        const listaFiltrada = todosLosProductos.filter(p => 
            String(p.id_categoria).toLowerCase() === categoriaSeleccionada.toLowerCase()
        );
        renderProductos(listaFiltrada);
    }

    else {
        renderProductos(todosLosProductos);

        setTimeout(() => {
            const target = document.querySelector(`.producto[data-categoria="${categoriaSeleccionada.toLowerCase()}"]`);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    }

}

// eventos de clic en las categorías
enlacesCategorias.forEach(enlace => {
    enlace.addEventListener("click", e => {
        e.preventDefault();
        filtrarPorCategoria(enlace.dataset.categoria);

        enlacesCategorias.forEach(a => a.classList.remove("activo"));
        enlace.classList.add("activo");
    });
});
