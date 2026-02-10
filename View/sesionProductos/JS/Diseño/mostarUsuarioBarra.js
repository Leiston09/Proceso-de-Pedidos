const contenedorUsuario = document.getElementById("usuario-barra") 

function obtenerClienteParaBarra() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    return usuario;
}

//Barra de usuario
export function actualizarUsuarioBarra() {
    const cliente = obtenerClienteParaBarra();

    if (cliente) {
        contenedorUsuario.innerHTML = `
            <img src="../Imagenes/imagenBarraOpciones/Usuario.png" alt="Usuario">
            <span id="nombre-usuario">${cliente.nombre} ${cliente.apellido}</span>
        `;
    } else {
        contenedorUsuario.innerHTML = `
            <img src="../Imagenes/imagenBarraOpciones/Usuario.png" alt="Usuario">
            <span id="nombre-usuario">Invitado</span>
        `;
    }
}

