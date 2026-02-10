import { obtenerMetodoPago , guardarMetodoPago} from "./comportamientoCarrito.js";

export async function cargarMetodosPago() {
    const contenedor = document.getElementById("contenedor-metodos-pago");
    if (!contenedor) return;

    const response = await fetch("../../controller/metodosPagoController.php?accion=listar")
        .catch(error => {
            console.error("Error en fetch:", error);
            contenedor.innerHTML = `<p style="color:red; text-align:center;">Error al cargar métodos de pago</p>`;
            return null;
        });

    if (!response) return;

    const result = await response.json().catch(error => {
        console.error("Error al parsear JSON:", error);
        contenedor.innerHTML = `<p style="color:red; text-align:center;">Error al procesar los métodos de pago</p>`;
        return null;
    });

    if (!result || !Array.isArray(result)) {
        contenedor.innerHTML = `<p style="color:red; text-align:center;">No se pudieron cargar los métodos de pago.</p>`;
        return;
    }

    const disponibles = result.filter(m => m.disponible == 1 || m.disponible === true);
    contenedor.innerHTML = "";

    // Obtener el método guardado
    const metodoGuardado = obtenerMetodoPago();

    // Renderizar
    disponibles.forEach(metodo => {
        const div = document.createElement("div");
        div.classList.add("metodo-pago");
        div.textContent = metodo.tipo;

        // Marcar seleccionado si coincide con lo guardado
        if (String(metodo.id_metodo) === metodoGuardado) {
            div.classList.add("seleccionado");
        }


        // Evento click para seleccionar y guardar
        div.addEventListener("click", () => {
            document.querySelectorAll(".metodo-pago").forEach(el => el.classList.remove("seleccionado"));
            div.classList.add("seleccionado");
            guardarMetodoPago(metodo.id_metodo);
        });

        contenedor.appendChild(div);
    });
}