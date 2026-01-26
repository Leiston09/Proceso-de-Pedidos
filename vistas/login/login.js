import { solicitarCliente } from "../../controlador/clienteController.js";
import { mostrarAlerta } from "../alertas/alertas.js";

const btnLogin = document.querySelector("button");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value;

    const cliente = solicitarCliente(correo);


    if (!correo || !clave) {
        mostrarAlerta("Completa todos los campos", "error");
        return;
    }


    if (!cliente) {
        mostrarAlerta("El usuario no existe", "error");
        return;
    }

    if (cliente.clave !== clave) {
        mostrarAlerta("Contraseña incorrecta", "error");
        return;
    }

    mostrarAlerta("Inicio de sesión exitoso", "exito");

    setTimeout(() => {
        window.location.href = "../../vistas/sesionProductos/sesionPedidos.html";
    }, 1200);
});
