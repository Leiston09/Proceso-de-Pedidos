import { productos } from "../services/productoService.js";

export function obtenerProductos() {
  return productos;
}

export function obtenerProductoPorId(id) {
  return productos.find(p => p.id === id);
}

