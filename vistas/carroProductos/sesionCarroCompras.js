import { mostrarAlerta } from '../alertas/alertas.js';
// ---------- VALIDACIÓN DE CANTIDAD EN EL CARRITO ----------
document.addEventListener("DOMContentLoaded", () => {
    // Aquí defines el stock máximo de cada producto (puedes ajustar según tu inventario)
    const stockProductos = {
        "Zapatos color café": 5,
        'Laptop 15.6" con Windows 10': 2,
        "Smartphone Negro 32gb Dual Sim 3gb Ram": 10,
        "Punto de Venta CDP 3.0": 3
    };

    // Seleccionamos todos los inputs de cantidad
    const inputsCantidad = document.querySelectorAll(".tabla-carrito input[type='number']");

    inputsCantidad.forEach(input => {
        const fila = input.closest("tr");
        const nombreProducto = fila.querySelector("td").textContent.trim();
        const stock = stockProductos[nombreProducto];

        // Ajustar automáticamente si el usuario escribe más que el stock
        input.addEventListener("input", () => {
            let cantidad = parseInt(input.value);

            if (isNaN(cantidad) || cantidad < 1) {
                cantidad = 1;
                input.value = cantidad;
            }

            if (cantidad > stock) {
                cantidad = stock;
                input.value = cantidad;
                mostrarAlerta(`No puedes comprar más de ${stock} unidades de "${nombreProducto}".`, "error");
            }

            // Actualizar subtotal de la fila
            const precioTexto = fila.querySelector("td:nth-child(3)").textContent.replace("$","").replace(",","").trim();
            const precio = parseFloat(precioTexto);
            fila.querySelector("td:nth-child(5)").textContent = `$${(precio * cantidad).toFixed(2)}`;
            
            // Actualizar total general
            actualizarTotal();
        });
    });

    // Función para recalcular el total general
    function actualizarTotal() {
        let total = 0;
        document.querySelectorAll(".tabla-carrito tbody tr").forEach(fila => {
            const subtotalTexto = fila.querySelector("td:nth-child(5)").textContent.replace("$","").replace(",","").trim();
            const subtotal = parseFloat(subtotalTexto);
            total += subtotal;
        });
        document.querySelector(".totales strong").textContent = `$${total.toFixed(2)}`;
    }

    // Inicializamos el total al cargar la página
    actualizarTotal();

    // ---------- VALIDACIÓN FECHA DE ENTREGA (AGREGADO) ----------
    const inputFecha = document.getElementById("fecha-entrega");

    if (inputFecha) {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        inputFecha.addEventListener("change", () => {
            const hoyStr = new Date().toISOString().split("T")[0];
            const fechaSeleccionada = inputFecha.value;

            if (fechaSeleccionada <= hoyStr) {
                mostrarAlerta("La fecha de entrega debe ser mayor al día de hoy.", "error");
                inputFecha.value = "";
            }
        });

    }
});
