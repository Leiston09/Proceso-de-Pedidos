<<<<<<< HEAD
import { buscarClientePorCorreo } from "../../controlador/clienteController.js";
=======
import { solicitarCliente } from "../../controlador/clienteController.js";
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c
import { mostrarAlerta } from "../alertas/alertas.js";

const btnLogin = document.querySelector("button");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const clave = document.getElementById("clave").value;
    const cliente = buscarClientePorCorreo(correo);

    if (!correo || !clave)
        return mostrarAlerta("Completa todos los campos", "error");

    if (!cliente)
        return mostrarAlerta("El usuario no existe", "error");

    if (cliente.clave !== clave)
        return mostrarAlerta("Contraseña incorrecta", "error");
=======
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
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c

    mostrarAlerta("Inicio de sesión exitoso", "exito");

    setTimeout(() => {
<<<<<<< HEAD
        window.location.href = "../../../DesarrolloPedido/vistas/sesionProductos/sesionPedidos.html";
=======
        window.location.href = "../../vistas/sesionProductos/sesionPedidos.html";
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c
    }, 1200);
});
