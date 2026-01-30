export function guardarCliente(cliente) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

<<<<<<< HEAD
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
=======
    if (clientes.some(c => c.correo === cliente.correo)) return false;

    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    return true;
}

// Buscar cliente por correo
export function obtenerClientePorCorreo(correo) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    return clientes.find(c => c.correo === correo) || null;
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c
}
