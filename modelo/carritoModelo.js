// MODELO/carritoModelo.js

export class Carrito {
    constructor() {
        this.productos = [];
        this.cargarDesdeLocalStorage();
    }

    agregarProducto(producto, cantidad = 1) {
        const existente = this.productos.find(
            item => item.producto.id === producto.id
        );

        if (existente) {
            existente.cantidad += cantidad;
        } else {
            this.productos.push({ producto, cantidad });
        }

        this.guardarEnLocalStorage();
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(
            item => item.producto.id !== id
        );
        this.guardarEnLocalStorage();
    }

    actualizarCantidad(id, nuevaCantidad) {
        if (nuevaCantidad <= 0) {
            this.eliminarProducto(id);
            return;
        }

        const item = this.productos.find(
            item => item.producto.id === id
        );

        if (item) {
            item.cantidad = nuevaCantidad;
            this.guardarEnLocalStorage();
        }
    }

    obtenerProductos() {
        return [...this.productos];
    }

    guardarEnLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    cargarDesdeLocalStorage() {
        const data = localStorage.getItem("carrito");
        if (data) {
            this.productos = JSON.parse(data);
        }
    }
}
