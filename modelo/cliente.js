export class Cliente {
    constructor({ nombre, apellido, correo, clave, tipo_cliente = "NORMAL", estado_cliente = "ACTIVO" }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.clave = clave;
        this.tipo_cliente = tipo_cliente;
        this.estado_cliente = estado_cliente;
    }
}
