import {
    obtenerFecha,
    obtenerMetodoPagoNumber,
    obtenerPedidosID,
    obtenerClienteParaBarra
} from "../comportamientoCarrito.js";

export function recopilarTodosLosDatos() {
    const cliente = obtenerClienteParaBarra();
    const carrito = obtenerPedidosID(); 
    const fechaEntrega = obtenerFecha();
    const metodoPago = obtenerMetodoPagoNumber();
    const fechaActual = new Date().toISOString().split("T")[0];

    const pedidosFormateados = carrito.map(p => ({
        id_producto: p.id_producto,
        cantidad: p.cantidad,
        precio_unitario: Number(p.costo_promedio),
        subtotal: Number(p.costo_promedio) * p.cantidad
    }));

    const datosPedido = {
        cliente: cliente || null,
        pedidos: pedidosFormateados,
        fechaActual,
        fechaEntrega: fechaEntrega || null,
        metodoPago: metodoPago || null
    };

    // console.table(datosPedido);
    return datosPedido;
}
