import { mostrarAlerta } from "../../alertas/alertas.js";

export function validarStock(stockDisponible, contenedorModal) {
    const inputCantidadProducto = contenedorModal.querySelector(".producto-cantidad input");

    inputCantidadProducto.oninput = () => {
        let cantidadIngresada = parseInt(inputCantidadProducto.value, 10);

        if (cantidadIngresada > stockDisponible) {
            mostrarAlerta(`Solo quedan ${stockDisponible} unidades en stock.`, "error");
            inputCantidadProducto.value = stockDisponible;
        } else if (cantidadIngresada < 1) {
            mostrarAlerta("La cantidad no puede ser 0.", "error");
            inputCantidadProducto.value = 1;
        }
    };
}
