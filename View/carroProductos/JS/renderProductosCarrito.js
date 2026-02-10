import { eliminarProducto , restarCantidadProducto , sumarCantidadProducto } from "./comportamientoCarrito.js"; 

const tablaBody = document.getElementById("tabla-carrito-body");
const totalPagar = document.getElementById("total-pagar");

// Función para obtener los pedidos guardados en localStorage
function obtenerPedidos() {
    const carrito = JSON.parse(localStorage.getItem("carritoActivo")) || [];
    return carrito;
}

// Función para renderizar el carrito
export function renderCarrito() {
    const pedidos = obtenerPedidos();
    tablaBody.innerHTML = "";
    let total = 0;

    if (pedidos.length === 0) {
        tablaBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center;">
                El carrito está vacío 🛒
            </td>
        </tr>`;
        totalPagar.textContent = "$0.00";
        return;
    }

    pedidos.forEach((p, i) => {
        total += p.subtotal;
        tablaBody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${p.nombre}</td>
            <td>$${Number(p.costo_promedio).toFixed(2)}</td>
            <td>${p.cantidad}</td>
            <td>$${Number(p.subtotal).toFixed(2)}</td>
            <td>
                <button id="sumar" class="btn-opcion sumar" data-id="${p.id_producto}">➕</button>
                <button id="restar" class="btn-opcion restar" data-id="${p.id_producto}">➖</button>
                <button id="eliminar" class="btn-opcion eliminar" data-id="${p.id_producto}">❌</button>
            </td>
        </tr>`;
    });

    totalPagar.textContent = `$${total.toFixed(2)}`;


    const botonesEliminar = tablaBody.querySelectorAll("#eliminar");
        botonesEliminar.forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                eliminarProducto(id); 
            };
        });

    const botonSumar = tablaBody.querySelectorAll("#sumar");
    botonSumar.forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            sumarCantidadProducto(id); 
        };
    });    
    
    const botonRestar = tablaBody.querySelectorAll("#restar");
    botonRestar.forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            restarCantidadProducto(id); 
        };
    });



}
