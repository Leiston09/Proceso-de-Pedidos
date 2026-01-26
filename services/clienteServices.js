export function guardarCliente(cliente) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    if (clientes.some(c => c.correo === cliente.correo)) return false;

    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    return true;
}

// Buscar cliente por correo
export function obtenerClientePorCorreo(correo) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    return clientes.find(c => c.correo === correo) || null;
}
