import { obtenerProductoPorId } from "../../controlador/productoController.js";
import { validarStock } from "./validacionesProducto.js";
import { guardarProductoEnCarrito } from "./guardarProductoCarrito.js";

export function abrirModalProducto(id, contenedorModal) {
  const p = obtenerProductoPorId(id);

  // 2. Agregamos el id="btn-comprar" al botón en el template
  contenedorModal.innerHTML = `
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
          <label for="cantidad-${p.id}">Cantidad</label>
          <input type="number" id="cantidad-${p.id}" name="cantidad_producto" value="1" min="0" max="${p.stock + 1 }">
        </div>
      </div>
      <div class="modal-footer">
        <button id="btn-regresar" class="btn-secundario">Regresar</button>
        <button id="btn-comprar" class="btn-primario">Comprar</button> 
      </div>
    </div>
  `;

  contenedorModal.classList.add("mostrar");

  validarStock(p, contenedorModal);

  // Configurar botón regresar
  contenedorModal.querySelector("#btn-regresar").onclick = () => {
    retroceder()
  };

    // Botón comprar
    const btnComprar = contenedorModal.querySelector("#btn-comprar");
    const cantidadInput = document.getElementById(`cantidad-${p.id}`);
    btnComprar.onclick = () => {
      guardarProductoEnCarrito(p, parseInt(cantidadInput.value));
      setTimeout(() => {
      retroceder()
          }, 1200);
    };

    function retroceder(){
      contenedorModal.classList.remove("mostrar");
    }

  return p;
}