export class Cliente {
    constructor({
        cedula,
        nombre,
        apellido,
        correo,
        direccion,
        edad,
        telefono,
        clave,
        tipo_cliente = "NORMAL",
        estado_cliente = "ACTIVO"
    }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
        this.edad = edad;
        this.telefono = telefono;
        this.clave = clave;
        this.tipo_cliente = tipo_cliente;
        this.estado_cliente = estado_cliente;
    }
}
