import { registrarCliente } from "../../controlador/clienteController.js";
import { mostrarAlerta } from "../alertas/alertas.js";

export function guardarDatosCliente() {
<<<<<<< HEAD
    const cedula = document.getElementById("cedula").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const edad = document.getElementById("fecha").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const clave = document.getElementById("clave").value;

    const resultado = registrarCliente({ cedula, correo, nombre, apellido, direccion, edad, telefono, clave });

    if (!resultado.ok) {
        if (resultado.error === "CEDULA") return mostrarAlerta("La cédula ya está registrada", "advertencia");
        if (resultado.error === "CORREO") return mostrarAlerta("El correo ya está registrado", "advertencia");
    }

    mostrarAlerta("Registro exitoso", "exito");

    document.getElementById("formRegistro").reset();

    setTimeout(() => window.location.href = "../../login.html", 1200);
=======

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
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c
}
