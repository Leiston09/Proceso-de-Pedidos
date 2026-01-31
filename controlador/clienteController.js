import { Cliente } from "../modelo/cliente.js";
import { guardarCliente, obtenerClientePorCorreo, guardarElClienteParaBarra, obtenerElClienteParaBarra  } from "../services/clienteServices.js";   

export function registrarCliente({ cedula, correo, nombre, apellido, direccion, edad, telefono, clave }) {
    const cliente = new Cliente({ cedula, correo, nombre, apellido, direccion, edad, telefono, clave });
    return guardarCliente(cliente);
}

export function buscarClientePorCorreo(correo) {
    return obtenerClientePorCorreo(correo);
}

export function guardarClienteParaBarra(clienteBarra){
    return guardarElClienteParaBarra (clienteBarra)
}

export function obtenerClienteParaBarra (){
    return obtenerElClienteParaBarra()
}