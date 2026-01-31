import { DetallePedido } from "../modelo/detallePedido.js";
import { guardarPedido, obtenerPedidos, editarCantidadPedido, eliminarPedido } from "../services/PedidoServices.js";

export function guardarPedidoCarro(producto, cantidad) {
  const detalle = new DetallePedido({
    idProducto: producto.id,          
    nombre: producto.nombre,
    cantidad: cantidad, 
    precioUnitario: producto.precio   
  });

  return guardarPedido(detalle);
}


export function obtenerDetallesPedidos() {
    return obtenerPedidos();
}

export function modificarCantidadProducto(idProducto, nuevaCantidad){
  editarCantidadPedido(idProducto, nuevaCantidad)
}

export function eliminarProducto(idProducto) {
    eliminarPedido(idProducto); 
}
