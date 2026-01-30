//import { Producto } from "../modelo/producto.js";
import { listaDeProductos } from "../services/productoService.js";

//export function agregarProducto(datosProducto) {
//  const producto = new Producto(datosProducto);
//  return guardarProductoService(producto);
//}

export function obtenerProductos() {
  return listaDeProductos;
}

export function obtenerProductoPorId(id) {
  return listaDeProductos.find(p => p.id === id);
}

