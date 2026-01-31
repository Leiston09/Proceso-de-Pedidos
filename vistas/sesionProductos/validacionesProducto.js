import { mostrarAlerta } from "../alertas/alertas.js";

export function validarStock(producto, contenedorModal) {
  const inputCantidadProducto = contenedorModal.querySelector(".producto-cantidad input");
  const stockDisponible = producto.stock;

  // Validación en tiempo real mientras escriben
  inputCantidadProducto.oninput = () => {
    let cantidadIngresada = parseInt(inputCantidadProducto.value);

    if (cantidadIngresada > stockDisponible) {
      mostrarAlerta(`Solo quedan ${stockDisponible} unidades en stock.`, "error");
      inputCantidadProducto.value = stockDisponible;

    } else if (cantidadIngresada < 1) {
      mostrarAlerta(`La cantidad no puede ser 0.`, "error");
      inputCantidadProducto.value = 1;
    }
  };
}
