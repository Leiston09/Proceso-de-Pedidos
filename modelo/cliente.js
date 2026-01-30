export class Cliente {
<<<<<<< HEAD
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
=======
    constructor({ nombre, apellido, correo, clave, tipo_cliente = "NORMAL", estado_cliente = "ACTIVO" }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
>>>>>>> 2cb608f21ddfde3f7c396724300c234f1242e01c
        this.clave = clave;
        this.tipo_cliente = tipo_cliente;
        this.estado_cliente = estado_cliente;
    }
}
