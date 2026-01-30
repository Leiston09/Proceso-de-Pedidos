// models/Producto.js
export class Producto {
  constructor({ id, nombre, descripcion, categoria, precio, stock, impuesto, descuento, imagen, estado }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
    this.impuesto = impuesto;
    this.descuento = descuento;
    this.imagen = imagen;
    this.estado = estado;
  }
}
    