import { mostrarAlerta } from "../../../alertas/alertas.js";

const KEY_CARRITO = "carritoActivo";

export let TIPO_ALERTA = {
    COMPRAR: 1,
    CARRITO: 0
};

export function validarPedido(producto, cantidad, stockDisponible , tipoAlerta = TIPO_ALERTA.COMPRAR) {
    let carrito = JSON.parse(localStorage.getItem("carritoActivo")) || [];
    const index = carrito.findIndex(p => p.id_producto === producto.id_producto);
    const cantidadActual = index !== -1 ? carrito[index].cantidad : 0;

    if (cantidadActual + cantidad > stockDisponible) {
        mostrarAlerta(`Solo quedan ${stockDisponible - cantidadActual} unidades disponibles`, "error");
        return;
    }
    guardarProductoEnCarrito(producto, cantidad, tipoAlerta );
}



export function guardarProductoEnCarrito(producto, cantidad , tipoAlerta) {
  if (!producto || !producto.id_producto) return; // evita errores si no hay producto
  let carrito = JSON.parse(localStorage.getItem(KEY_CARRITO)) || [];
  const index = carrito.findIndex(p => p.id_producto === producto.id_producto);
  if (index  !==-1) {
    carrito[index].cantidad += cantidad;
    carrito[index].subtotal = carrito[index].cantidad * Number(carrito[index].costo_promedio);
  } else {
    carrito.push({
      ...producto,
      cantidad,
      subtotal: cantidad * Number(producto.costo_promedio),
    });
  }

  localStorage.setItem(KEY_CARRITO, JSON.stringify(carrito));
  if (tipoAlerta == 1){
    mostrarAlerta("Producto agregado al carrito 🛒", "exito");
  }


}
