import { mostrarAlerta } from "../../alertas/alertas.js";
import { renderCarrito } from "./renderProductosCarrito.js"; 
import { validarPedido , TIPO_ALERTA } from "../../sesionProductos/JS/guardarProducto/guardarProductoCarrito.js";

const KEY_CARRITO = "carritoActivo";

export function obtenerPedidos() {
    const carrito = JSON.parse(localStorage.getItem("carritoActivo")) || [];
    return carrito;
}


export function eliminarProducto(idProducto) {
    const id = Number(idProducto); // <-- convertir a número
    let carrito = JSON.parse(localStorage.getItem(KEY_CARRITO)) || [];
    carrito = carrito.filter(p => p.id_producto !== id); // ahora sí coincide
    localStorage.setItem(KEY_CARRITO, JSON.stringify(carrito));
    renderCarrito();
    mostrarAlerta("Producto eliminado del carrito 🛒", "advertencia");
}



export function restarCantidadProducto(idProducto) {
    const cantidad = 1;
    const id = Number(idProducto);
    let carrito = JSON.parse(localStorage.getItem(KEY_CARRITO)) || [];
    const index = carrito.findIndex(p => p.id_producto === id);

    if (index !== -1) {
        carrito[index].cantidad -= cantidad;
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1); // elimina el producto si llega a 0
        } else {
            carrito[index].subtotal =
                carrito[index].cantidad * Number(carrito[index].costo_promedio);
        }
    }
    localStorage.setItem(KEY_CARRITO, JSON.stringify(carrito));
    renderCarrito();
}



export function sumarCantidadProducto(idProducto) {
    const cantidad = 1;
    const id = Number(idProducto);
    let carrito = JSON.parse(localStorage.getItem(KEY_CARRITO)) || [];
    const index = carrito.findIndex(p => p.id_producto === id);
    
    if (index !== -1) {
        const producto = carrito[index];
        const stockDisponible = Number(producto.stock_actual);
        validarPedido(producto, cantidad, stockDisponible, TIPO_ALERTA.CARRITO);
        renderCarrito();

    }

}



export function guardarFecha(fecha) {
    localStorage.setItem("fechaEntrega", fecha);
}




export function obtenerFecha() {
    return localStorage.getItem("fechaEntrega");
}



export function guardarMetodoPago(metodo) {
    localStorage.setItem("metodoPagoSeleccionado", metodo);
}




export function obtenerMetodoPago() {
    return localStorage.getItem("metodoPagoSeleccionado");
}


//export function obtenerPedidosID() {
//    const carrito = JSON.parse(localStorage.getItem("carritoActivo")) || [];
//    return carrito.map(producto => `${producto.codigo_barra}:${producto.cantidad}`).join(","); //id_producto , codigo_barra
//}


export function obtenerPedidosID() {
    const carrito = JSON.parse(localStorage.getItem("carritoActivo")) || [];
    return carrito;
}


export function obtenerClienteParaBarra() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    return usuario ? usuario.cedula : null; 
}


export function obtenerMetodoPagoNumber() {
    const metodo = localStorage.getItem("metodoPagoSeleccionado");
    return metodo ? Number(metodo) : null;
}