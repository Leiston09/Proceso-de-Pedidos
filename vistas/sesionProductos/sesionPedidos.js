import { obtenerProductos, obtenerProductoPorId } from "../../controlador/productoController.js";
import { mostrarAlerta }  from "../alertas/alertas.js";

// ---------- ELEMENTOS DOM ----------
const contenedor = document.getElementById("lista-productos");
const verDetalles = document.getElementById("detalle-producto");

// ---------- RENDERIZAR PRODUCTOS ----------
export function renderProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(p => {
    contenedor.innerHTML += `
      <article class="producto" data-categoria="${p.categoria}" id="${p.id}">
        <div class="imagen-producto">
          <img src="../assets/img/${p.imagen}" alt="${p.nombre}">
        </div>
        <div class="info-producto">
          <h3>${p.nombre}</h3>
          <p>${p.descripcion}</p>
          <p class="precio">$${p.precio}</p>
          <div class="acciones">
            <button  class="btn-comprar">🛒 Carrito</button>
            <a href="#detalle-producto" class="btn-detalle" data-id="${p.id}">Ver detalles</a>
          </div>
        </div>
      </article>
    `;
  });
}

// Mostrar todos los productos al inicio
renderProductos(obtenerProductos());


// ---------- MODAL DETALLES ----------
document.addEventListener("click", e => {
  if (!e.target.classList.contains("btn-detalle")) return;

  const id = e.target.dataset.id;
  const p = obtenerProductoPorId(id);

  verDetalles.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h2 class="producto-nombre">${p.nombre}</h2>
        <span class="producto-categoria">${p.categoria}</span>
      </div>
      <div class="modal-body">
        <p class="producto-descripcion">${p.descripcion}</p>
        <div class="producto-info">
          <div><span class="label">Código</span><span class="valor">${p.id}</span></div>
          <div><span class="label">Precio</span><span class="valor precio">$${p.precio}</span></div>
          <div><span class="label">Stock</span><span class="valor stock">${p.stock} unidades</span></div>
          <div><span class="label">Estado</span><span class="valor estado">${p.estado}</span></div>
          <div><span class="label">Impuesto</span><span class="valor impuesto">${p.impuesto}%</span></div>
          <div><span class="label">Descuento</span><span class="valor descuento">${p.descuento}%</span></div>
        </div>
        <div class="producto-cantidad">
          <label>Cantidad</label>
          <input type="number" value="1">
        </div>
      </div>
      <div class="modal-footer">
        <a href="javascript:history.go(-1)" class="btn-secundario">Regresar</a>
        <a href="#" class="btn-primario">Comprar</a>
      </div>
    </div>
  `;

  
  // ---------- VALIDACIÓN DEL INPUT PARA NO SUPERAR EL STOCK ----------
  const inputCantidad = verDetalles.querySelector(".producto-cantidad input");
  const stock = p.stock;

  // Ajustar automáticamente si el usuario escribe más que el stock
  inputCantidad.addEventListener("input", () => {
    let cantidad = parseInt(inputCantidad.value);

    if (isNaN(cantidad) || cantidad < 1) {
      cantidad = 1;
      inputCantidad.value = cantidad;
    }

    if (cantidad > stock) {
      cantidad = stock;
      inputCantidad.value = cantidad;
      mostrarAlerta(`No puedes comprar más de ${stock} unidades.`, "error");
    }
  });

  // Validar al hacer clic en Comprar
  const btnComprar = verDetalles.querySelector(".btn-primario");
  btnComprar.addEventListener("click", () => {
    let cantidad = parseInt(inputCantidad.value);

    if (cantidad > stock) {
      mostrarAlerta(`No puedes comprar más de ${stock} unidades.`, "error");
      inputCantidad.value = stock;
      return;
    }
  });
});
