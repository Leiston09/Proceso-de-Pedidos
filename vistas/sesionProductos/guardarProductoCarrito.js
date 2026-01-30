
import { guardarPedidoCarro } from "../../controlador/detallePedidoController.js";
import { mostrarAlerta } from "../alertas/alertas.js";

export function guardarProductoEnCarrito(producto, cantidadOId) {
  // Si cantidadOId es un número, lo usa; si es un string (ID), busca el elemento
  const cantidad = typeof cantidadOId === "number" 
    ? cantidadOId 
    : parseInt(document.getElementById(cantidadOId)?.value || 1);

  guardarPedidoCarro({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: cantidad
  });
  mostrarAlerta("Producto agregado al carrito 🛒" , "exito");
}