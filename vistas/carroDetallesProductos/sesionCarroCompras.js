import { 
  obtenerDetallesPedidos, 
  modificarCantidadProducto,
  eliminarProducto
} from "../../controlador/detallePedidoController.js";

const tbody = document.getElementById("productos-carrito");
const totalDiv = document.getElementById("total-carrito");

function renderCarrito() {
  const carrito = obtenerDetallesPedidos();
  tbody.innerHTML = "";
  let totalGeneral = 0;

  if (carrito.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">El carrito está vacío</td></tr>`;
    totalDiv.innerHTML = "<strong>Total: $0.00</strong>";
    return;
  }

  carrito.forEach((item, index) => {
    // Calculamos subtotal basado en los nombres de tu modelo
    const subtotal = item.precioUnitario * item.cantidad;
    totalGeneral += subtotal;

    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nombre}</td>
        <td>$${item.precioUnitario.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${item.cantidad}" 
            data-id="${item.idProducto}" class="input-cantidad">
        </td>
        <td>$${subtotal.toFixed(2)}</td>
        <td>
          <button class="btn-eliminar" data-id="${item.idProducto}">❌</button>
        </td>
      </tr>
    `;
  });

  totalDiv.innerHTML = `<strong>Total: $${totalGeneral.toFixed(2)}</strong>`;
}

// Evento para modificar cantidad
tbody.addEventListener("change", (e) => {
  if (e.target.classList.contains("input-cantidad")) {
    const id = e.target.dataset.id;
    const nuevaCantidad = parseInt(e.target.value);
    
    if (nuevaCantidad >= 1) {
      modificarCantidadProducto(id, nuevaCantidad);
      renderCarrito(); // Recargamos la tabla para actualizar el total
    }
  }
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar")) {
    const id = e.target.dataset.id;
    eliminarProducto(id); // Llama al controller
    renderCarrito();      // Refresca la tabla
  }
});

// Inicializar la tabla al cargar
renderCarrito();