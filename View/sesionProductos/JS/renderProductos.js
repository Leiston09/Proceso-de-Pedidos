import { abrirModalProducto } from "./verDetallesProducto.js";
import { validarPedido} from "./guardarProducto/guardarProductoCarrito.js";

const contenedor = document.getElementById("lista-productos");
const modalDetalle = document.getElementById("detalle-producto");

export async function inicializarRenderProductos() {
    try {
        const resp = await fetch("../../Controller/ProductoController.php?accion=obtenerProductos");
        const lista = await resp.json();

        renderProductos(lista);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        contenedor.innerHTML = "<p>No se pudieron cargar los productos.</p>";
    }
}

export function renderProductos(lista) {
    contenedor.innerHTML = "";

    if (!Array.isArray(lista)) return;

    lista.forEach(producto => {
        const articulo = document.createElement("article");
        articulo.className = "producto";
        articulo.id = producto.id_producto;
        articulo.dataset.categoria = producto.id_categoria;

        articulo.innerHTML = `
            <div class="imagen-producto"></div>
            <div class="info-producto">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.costo_promedio}</p>
                <div class="acciones">
                    <button class="btn-comprar" id="btn-comprar-${producto.id_producto}">
                        🛒 Carrito
                    </button>
                    <button class="btn-detalle" data-id="${producto.id_producto}">
                        Ver detalles
                    </button>
                </div>
            </div>
        `;

        contenedor.appendChild(articulo);
    });

    configurarEventos(lista);
}


function configurarEventos(lista) {
    lista.forEach(producto => {
        const btnDetalle = document.querySelector(`.btn-detalle[data-id="${producto.id_producto}"]`);
        if (btnDetalle) btnDetalle.onclick = () => abrirModalProducto(producto, modalDetalle);

        const btnComprar = document.getElementById(`btn-comprar-${producto.id_producto}`);
        if (btnComprar) btnComprar.onclick = () => validarPedido(producto, 1 , producto.stock_actual); 

    });
}