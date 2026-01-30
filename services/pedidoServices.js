
const KEY = "pedidos";

export function obtenerPedidos() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}


export function guardarPedido(nuevoPedido) {
    const pedidos = obtenerPedidos();
    const pedidoExistente = pedidos.find(p => p.idProducto === nuevoPedido.idProducto);
    if (pedidoExistente) {
        pedidoExistente.cantidad += nuevoPedido.cantidad;
        pedidoExistente.subtotal = pedidoExistente.cantidad * pedidoExistente.precioUnitario;
    } else {
        pedidos.push(nuevoPedido);
    }
    localStorage.setItem(KEY, JSON.stringify(pedidos));
}

export function editarCantidadPedido(idProducto, nuevaCantidad) {
    const pedidos = obtenerPedidos();

    const pedido = pedidos.find(p => p.idProducto === idProducto);
    if (pedido) {
        pedido.cantidad = nuevaCantidad;
        localStorage.setItem(KEY, JSON.stringify(pedidos));
    }
}

export function eliminarPedido(idProducto) {
    let pedidos = obtenerPedidos();
    // Filtra para dejar fuera el producto que coincide con el ID
    pedidos = pedidos.filter(p => p.idProducto !== idProducto);
    localStorage.setItem(KEY, JSON.stringify(pedidos));
}

export function vaciarPedidos() {
    localStorage.removeItem(KEY);
}
