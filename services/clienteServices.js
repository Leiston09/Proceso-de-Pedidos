// Guardar un cliente nuevo en la lista de clientes
export function guardarCliente(cliente) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    if (clientes.some(c => c.cedula === cliente.cedula))
        return { ok: false, error: "CEDULA" };

    if (clientes.some(c => c.correo.toLowerCase() === cliente.correo.toLowerCase()))
        return { ok: false, error: "CORREO" };

    localStorage.setItem("clientes", JSON.stringify([...clientes, cliente]));
    return { ok: true };
}


// Obtener un cliente por correo
export function obtenerClientePorCorreo(correo) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    return clientes.find(c => c.correo.toLowerCase() === correo.toLowerCase()) || null;
}


// Guardar el cliente actual para la barra (solo uno a la vez)
export function guardarClienteParaBarra(clienteBarra) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    const clienteCompleto = clientes.find(c => c.correo.toLowerCase() === clienteBarra.correo.toLowerCase());
    if (clienteCompleto) localStorage.setItem("clienteActualBarra", JSON.stringify(clienteCompleto));
}


// Obtener el cliente actual de la barra
export const obtenerClienteParaBarra = () => JSON.parse(localStorage.getItem("clienteActualBarra")) || null;
