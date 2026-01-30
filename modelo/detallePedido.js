// modelo/DetallePedido.js
export class DetallePedido {
  constructor({ idProducto, nombre, cantidad, precioUnitario }) {
    this.idProducto = idProducto;
    this.nombre = nombre
    this.cantidad = cantidad;
    this.precioUnitario = precioUnitario;
    this.subtotal = cantidad * precioUnitario;
  }
}
