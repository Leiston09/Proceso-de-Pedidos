import { obtenerProductos } from "../../controlador/productoController.js";
import { abrirModalProducto } from "./verDetallesProducto.js";
import { guardarProductoEnCarrito } from "./guardarProductoCarrito.js";

const contenedor = document.getElementById("lista-productos");
const verDetalles = document.getElementById("detalle-producto");

export function renderProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `
      <article class="producto" data-categoria="${p.categoria}" id="${p.id}">
        <div class="imagen-producto"></div>
        <div class="info-producto">
          <h3>${p.nombre}</h3>
          <p>${p.descripcion}</p>
          <p class="precio">$${p.precio}</p>
          <div class="acciones">
            <button class="btn-comprar" id="btn-comprar-${p.id}">🛒 Carrito</button>
            <button class="btn-detalle" data-id="${p.id}">Ver detalles</button>
          </div>
        </div>
      </article>
    `;
  });

  configurarEventos(lista);
}

function configurarEventos(lista) {
  lista.forEach(p => {
    // Evento para Ver Detalles
    const btnDetalle = document.querySelector(`.btn-detalle[data-id="${p.id}"]`);
    btnDetalle.onclick = () => abrirModalProducto(p.id, verDetalles);

    // Evento para Guardar en Carrito
    const btnComprar = document.getElementById(`btn-comprar-${p.id}`);
    btnComprar.onclick = () => {
      guardarProductoEnCarrito(p, 1); 
    };
  });
}

// Inicializar
renderProductos(obtenerProductos());