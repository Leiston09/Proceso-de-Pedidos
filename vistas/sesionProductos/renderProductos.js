import { obtenerProductos } from "../../controlador/productoController.js";
import { abrirModalProducto } from "./verDetallesProducto.js";

const contenedor = document.getElementById("lista-productos");
const verDetalles = document.getElementById("detalle-producto");

export function renderProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `
      <article class="producto" data-categoria="${p.categoria}" id="${p.id}">
        <div class="imagen-producto">
        </div>
        <div class="info-producto">
          <h3>${p.nombre}</h3>
          <p>${p.descripcion}</p>
          <p class="precio">$${p.precio}</p>
          <div class="acciones">
            <button class="btn-comprar">🛒 Carrito</button>
            <button class="btn-detalle" data-id="${p.id}">Ver detalles</button>
          </div>
        </div>
      </article>
    `;
  });

  // Delegación de eventos: Escuchar clicks dentro del contenedor
  configurarEventosDetalle();
}

function configurarEventosDetalle() {
  const botonesDetalle = document.querySelectorAll(".btn-detalle");
  botonesDetalle.forEach(boton => {
    boton.onclick = () => {
      const id = boton.dataset.id;
      console.log(id)
      abrirModalProducto(id, verDetalles);
    };
  });
}

// Inicializar
renderProductos(obtenerProductos());