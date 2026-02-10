import { mostrarAlerta } from "../../../alertas/alertas.js";
import { recopilarTodosLosDatos } from "./guardarPedio.js";
import {borrarCarrito} from "./borrarCarrito.js"
export function inicializarGuardarPedido() {
    const contenedor = document.getElementById("guardar-pedido");
    if (!contenedor) return;

    const btn = document.createElement("button");
    btn.id = "btn-confirmar-pago";
    btn.classList.add("btn-pago");
    btn.textContent = "Confirmar y pagar";

    contenedor.appendChild(btn);

    btn.addEventListener("click", () => {
        pedido_detallePedido()
    });
}







export async function pedido_detallePedido() {
    const datosPedido = recopilarTodosLosDatos();

    // Validaciones


    if (!datosPedido.cliente) {
        mostrarAlerta("No se pudo identificar al cliente", "error");
        return;
    }

    if (!datosPedido.pedidos || datosPedido.pedidos.length === 0) {
        mostrarAlerta("No hay productos en el pedido", "error");
        return;
    }

    if (datosPedido.metodoPago === null) {
        mostrarAlerta("Selecciona un método de pago", "error");
        return;
    }

    if (datosPedido.fechaEntrega === null) {
        mostrarAlerta("Debes seleccionar una fecha de entrega", "error");
        return;
    }

    try {
        const resp = await fetch(
            "../../Controller/PedidoController.php?accion=crear",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosPedido)
            }
        );

        const resultado = await resp.json();


        if (!resultado.ok) {
            console.error(resultado.detalle); 
            mostrarAlerta(resultado.error || "Error al registrar el pedido", "error");
            return;
        }

        mostrarAlerta("Pedido registrado correctamente", "exito");

        borrarCarrito()

        setTimeout(() => {
            window.location.href = "../../../../../pedido/View/sesionProductos/sesionProductos.html";
        }, 1200);

    } catch (error) {
        console.error(error);
        mostrarAlerta("Error de conexión con el servidor", "error");
    }
}
