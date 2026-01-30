import { mostrarAlerta } from "../alertas/alertas.js";

export function validarStock(p, verDetalles) {
  const inputCantidad = verDetalles.querySelector(".producto-cantidad input");
  const stock = p.stock;

  // Validación en tiempo real mientras escriben
  inputCantidad.oninput = () => {
    let cantidad = parseInt(inputCantidad.value);
    
    if (cantidad > stock) {      
      mostrarAlerta(`Solo quedan ${stock} unidades en stock.`, "error");
      inputCantidad.value = stock;

    } else if (cantidad < 1) {
      mostrarAlerta(`La cantidad no puede ser 0`, "error");
      inputCantidad.value = 1;
    }
  };
}