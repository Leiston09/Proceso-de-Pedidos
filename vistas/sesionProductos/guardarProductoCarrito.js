import { guardarPedidoCarro } from "../../controlador/detallePedidoController.js";
import { mostrarAlerta } from "../alertas/alertas.js";

export function guardarProductoEnCarrito(producto, cantidad) {
  guardarPedidoCarro(producto, cantidad);

  mostrarAlerta("Producto agregado al carrito 🛒", "exito");

}
