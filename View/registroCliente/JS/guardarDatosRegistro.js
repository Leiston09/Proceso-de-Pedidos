import { mostrarAlerta } from "../../alertas/alertas.js";

export async function guardarDatosCliente() {
    const cliente = {
        cedula: document.getElementById("cedula").value.trim(),
        correo: document.getElementById("correo").value.trim(),
        nombre: document.getElementById("nombre").value.trim(),
        apellido: document.getElementById("apellido").value.trim(),
        direccion: document.getElementById("direccion").value.trim(),
        edad: document.getElementById("fecha").value,
        telefono: document.getElementById("telefono").value.trim(),
        clave: document.getElementById("clave").value
    };

    const resp = await fetch(
        "../../Controller/ClienteController.php?accion=guardarCliente",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)
        }
    );

    const resultado = await resp.json();

    if (!resultado.ok) {
        if (resultado.error === "CEDULA_DUPLICADA") {
            mostrarAlerta("La cédula ya está registrada", "advertencia");
            return;
        }
        if (resultado.error === "CORREO_DUPLICADO") {
            mostrarAlerta("El correo ya está registrado", "advertencia");
            return;
        }

    }


    mostrarAlerta("Registro exitoso", "exito");
    document.getElementById("formRegistro").reset();
    setTimeout(() => window.location.href = "../../login.html", 1200);
}
