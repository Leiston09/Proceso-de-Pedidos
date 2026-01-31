import { obtenerClienteParaBarra } from "../../controlador/clienteController.js"; 

const nombreUsuarioSpan = document.getElementById("nombre-usuario");

export function actualizarUsuarioBarra() {
    const cliente = obtenerClienteParaBarra();

    if (cliente) {
        nombreUsuarioSpan.textContent = `${cliente.nombre} ${cliente.apellido}`;
    } else {
        nombreUsuarioSpan.textContent = "Invitado";
    }
}

actualizarUsuarioBarra();
