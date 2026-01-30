import { Cliente } from "../modelo/cliente.js";
import { guardarCliente, obtenerClientePorCorreo } from "../services/clienteServices.js";   

<<<<<<< HEAD
export function registrarCliente({ cedula, correo, nombre, apellido, direccion, edad, telefono, clave }) {
    const cliente = new Cliente({ cedula, correo, nombre, apellido, direccion, edad, telefono, clave });
    return guardarCliente(cliente);
}

export function buscarClientePorCorreo(correo) {
=======
// Registrar cliente
export function registrarCliente({ nombre, apellido, correo, clave }) {
    const cliente = new Cliente({ nombre, apellido, correo, clave });
    return guardarCliente(cliente);
}

// Solicitar cliente (login)
export function solicitarCliente(correo) {
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c
    return obtenerClientePorCorreo(correo);
}
