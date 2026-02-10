import { validarStock } from "./validacionesProducto.js";
import { validarPedido } from "./guardarProducto/guardarProductoCarrito.js"; 

const MODAL_CLASE_MOSTRAR = "mostrar";

export function abrirModalProducto(producto, contenedorModal) {
    if (!producto) return;

    contenedorModal.innerHTML = crearHTMLModal(producto);
    contenedorModal.classList.add(MODAL_CLASE_MOSTRAR);
 
    // Validar stock
    validarStock(producto.stock_actual, contenedorModal);

    // Configurar botones
    configurarBotones(producto, contenedorModal);
}


function crearHTMLModal(p) {
    return `
        <div class="modal-card">
            <div class="modal-header">
                <h2 class="producto-nombre">${p.nombre}</h2>
                <span class="producto-categoria">Categoría ${p.id_categoria}</span>
            </div>
            <div class="modal-body">
                <p class="producto-descripcion">${p.descripcion}</p>
                <div class="producto-info">
                    <div><span class="label">Código</span><span class="valor">${p.codigo_barra}</span></div>
                    <div><span class="label">Precio</span><span class="valor precio">$${p.costo_promedio}</span></div>
                    <div><span class="label">Stock</span><span class="valor stock">${p.stock_actual} unidades</span></div>
                    <div><span class="label">Estado</span><span class="valor estado">${p.estado}</span></div>
                </div>
                <div class="producto-cantidad">
                    <label for="cantidad-${p.id_producto}">Cantidad</label>
                    <input type="number" id="cantidad-${p.id_producto}" value="1" min="0" max="${p.stock_actual} - 1">
                </div>
            </div>
            <div class="modal-footer">
                <button id="btn-regresar" class="btn-secundario">Regresar</button>
                <button id="btn-comprar" class="btn-primario">Comprar</button>
            </div>
        </div>
    `;
}


function configurarBotones(producto, contenedorModal) {
    const btnRegresar = contenedorModal.querySelector("#btn-regresar");
    const btnComprar = contenedorModal.querySelector("#btn-comprar");
    const cantidadInput = contenedorModal.querySelector(`#cantidad-${producto.id_producto}`);

    if (!btnRegresar || !btnComprar || !cantidadInput) {
        console.error("No se encontró un elemento del modal");
        return;
    }

    btnRegresar.onclick = () => contenedorModal.classList.remove(MODAL_CLASE_MOSTRAR);

    btnComprar.onclick = () => {
        const cantidad = parseInt(cantidadInput.value, 10);
        validarPedido(producto, cantidad , producto.stock_actual);
        setTimeout(() => contenedorModal.classList.remove(MODAL_CLASE_MOSTRAR), 800);
    };
}
