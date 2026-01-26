import { Cliente } from "../modelo/cliente.js";
import { guardarCliente, obtenerClientePorCorreo } from "../services/clienteServices.js";   

// Registrar cliente
export function registrarCliente({ nombre, apellido, correo, clave }) {
    const cliente = new Cliente({ nombre, apellido, correo, clave });
    return guardarCliente(cliente);
}

// Solicitar cliente (login)
export function solicitarCliente(correo) {
    return obtenerClientePorCorreo(correo);
}
