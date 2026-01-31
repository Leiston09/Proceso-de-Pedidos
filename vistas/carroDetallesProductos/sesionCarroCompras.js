import { 
  obtenerDetallesPedidos, 
  modificarCantidadProducto,
  eliminarProducto
} from "../../controlador/detallePedidoController.js";

// Referencias al DOM
const tbodyCarrito = document.getElementById("productos-carrito");
const divTotalCarrito = document.getElementById("total-carrito");

function renderCarrito() {
  const carrito = obtenerDetallesPedidos();
  tbodyCarrito.innerHTML = "";
  let totalGeneral = 0;

  if (carrito.length === 0) {
    tbodyCarrito.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;">El carrito está vacío</td>
      </tr>
    `;
    divTotalCarrito.innerHTML = "<strong>Total: $0.00</strong>";
    return;
  }

  carrito.forEach((producto, index) => {
    // Calculamos subtotal
    const subtotalProducto = producto.precioUnitario * producto.cantidad;
    totalGeneral += subtotalProducto;

    tbodyCarrito.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precioUnitario.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${producto.cantidad}" 
            data-id="${producto.idProducto}" class="input-cantidad-producto">
        </td>
        <td>$${subtotalProducto.toFixed(2)}</td>
        <td>
          <button class="btn-eliminar-producto" data-id="${producto.idProducto}">❌</button>
        </td>
      </tr>
    `;
  });

  divTotalCarrito.innerHTML = `<strong>Total: $${totalGeneral.toFixed(2)}</strong>`;
}



// Evento para modificar cantidad
tbodyCarrito.addEventListener("change", (e) => {
  if (e.target.classList.contains("input-cantidad-producto")) {
    const idProducto = e.target.dataset.id;
    const nuevaCantidad = parseInt(e.target.value);

    if (nuevaCantidad >= 1) {
      modificarCantidadProducto(idProducto, nuevaCantidad);
      renderCarrito(); // Recargamos la tabla para actualizar el total
    }
  }
});

// Evento para eliminar producto
tbodyCarrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar-producto")) {
    const idProducto = e.target.dataset.id;
    eliminarProducto(idProducto);
    renderCarrito();
  }
});




// Inicializar la tabla al cargar
renderCarrito();
