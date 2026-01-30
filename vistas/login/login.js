import { buscarClientePorCorreo } from "../../controlador/clienteController.js";
import { mostrarAlerta } from "../alertas/alertas.js";

const btnLogin = document.querySelector("button");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const clave = document.getElementById("clave").value;
    const cliente = buscarClientePorCorreo(correo);

    if (!correo || !clave)
        return mostrarAlerta("Completa todos los campos", "error");

    if (!cliente)
        return mostrarAlerta("El usuario no existe", "error");

    if (cliente.clave !== clave)
        return mostrarAlerta("Contraseña incorrecta", "error");

    mostrarAlerta("Inicio de sesión exitoso", "exito");

    setTimeout(() => {
        window.location.href = "../../../DesarrolloPedido/vistas/sesionProductos/sesionPedidos.html";
    }, 1200);
});
