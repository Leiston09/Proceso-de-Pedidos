export function guardarCliente(cliente) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    if (clientes.some(c => c.cedula === cliente.cedula))
        return { ok: false, error: "CEDULA" };
    

    if (clientes.some(c => c.correo.toLowerCase() === cliente.correo.toLowerCase()))
        return { ok: false, error: "CORREO" };

    localStorage.setItem("clientes", JSON.stringify([...clientes, cliente]));
    return { ok: true };
}


export function obtenerClientePorCorreo(correo) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    return clientes.find(c => c.correo.toLowerCase() === correo.toLowerCase()) || null; //Verifico Correo Existente
}
