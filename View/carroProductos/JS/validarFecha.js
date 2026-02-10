import { mostrarAlerta } from "../../alertas/alertas.js";
import { obtenerFecha, guardarFecha } from "./comportamientoCarrito.js";

export function configurarRangoFecha() {
    const contenedor = document.getElementById("fecha-entrega");
    if (!contenedor) return;

    const input = document.createElement("input");
    input.type = "date";
    input.id = "input-fecha-entrega";
    input.className = "input-fecha";
    contenedor.appendChild(input);

    const hoy = new Date();
    const min = new Date(hoy);
    min.setDate(hoy.getDate() + 1);

    const max = new Date(min);
    max.setMonth(min.getMonth() + 1);

    const formatear = (fecha) => {
        const y = fecha.getFullYear();
        const m = String(fecha.getMonth() + 1).padStart(2, "0");
        const d = String(fecha.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    };

    input.min = formatear(min);
    input.max = formatear(max);

    // 👉 AQUÍ estaba lo que faltaba
    const fechaGuardada = obtenerFecha();
    if (fechaGuardada) {
        input.value = fechaGuardada;
    }

    input.addEventListener("keydown", e => e.preventDefault());

    input.addEventListener("change", () => {
        if (!input.value) return;

        if (input.value < input.min || input.value > input.max) {
            mostrarAlerta("Fecha fuera de rango", "error");
            input.value = "";
            localStorage.removeItem("fechaEntrega");
            return;
        }

        guardarFecha(input.value);
    });
}


export function mostrarFechaActual() {
    const contenedor = document.getElementById("fecha-entrega-actual");
    if (!contenedor) return;

    // Crear input dinámicamente (igual que el de entrega)
    const fechaInput = document.createElement("input");
    fechaInput.type = "date";
    fechaInput.id = "input-fecha-actual";
    fechaInput.classList.add("input-fecha");
    fechaInput.readOnly = true; // No se puede modificar

    // Obtener fecha de hoy
    const hoy = new Date();
    const formatearFecha = (fecha) => {
        const yyyy = fecha.getFullYear();
        const mm = String(fecha.getMonth() + 1).padStart(2, '0');
        const dd = String(fecha.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    fechaInput.value = formatearFecha(hoy);

    contenedor.appendChild(fechaInput);
}







