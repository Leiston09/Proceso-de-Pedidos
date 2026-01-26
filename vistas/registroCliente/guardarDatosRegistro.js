import { registrarCliente } from "../../controlador/clienteController.js";
import { mostrarAlerta } from "../alertas/alertas.js";

export function guardarDatosCliente() {

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const clave = document.getElementById("clave").value;

    const resultado = registrarCliente({ //falso: Alerta True:Ignora
        nombre,
        apellido,
        correo,
        clave
    });

    if (!resultado) {
        mostrarAlerta("El correo ya está registrado", "advertencia");
        return;
    }

    mostrarAlerta("Registro exitoso", "exito");
    document.getElementById("formRegistro").reset();

    setTimeout(() => {
        window.location.href = "../../login.html";
    }, 1200);
}
