import { mostrarAlerta } from "../alertas/alertas.js";
import { guardarDatosCliente } from "./guardarDatosRegistro.js";

const form = document.getElementById("formRegistro");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cedula = document.getElementById("cedula").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const fecha = document.getElementById("fecha").value;
    const clave = document.getElementById("clave").value;
    const clave2 = document.getElementById("clave2").value;
    const telefono = document.getElementById("telefono").value.trim();
    
    const registroNombres = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const registroCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (!cedula || !correo || !nombre || !apellido || !fecha || !clave || !clave2)
        return mostrarAlerta("Todos los campos obligatorios deben completarse", "error");

    if (!/^\d+$/.test(cedula))
        return mostrarAlerta("La cédula no puede contener letras, solo números", "error");

    if (cedula.length !== 10)
        return mostrarAlerta("La cédula debe tener 10 dígitos", "advertencia");

    if (!registroNombres.test(nombre))
        return mostrarAlerta("El nombre solo puede contener letras", "error");

    if (!registroNombres.test(apellido))
        return mostrarAlerta("El apellido solo puede contener letras", "error");

    if (nombre.length < 2)
        return mostrarAlerta("El nombre debe tener al menos 2 letras", "advertencia");

    if (apellido.length < 2)
        return mostrarAlerta("El apellido debe tener al menos 2 letras", "advertencia");

    if (!registroCorreo.test(correo))
        return mostrarAlerta("El correo debe ser válido", "error");

    if (nacimiento > hoy)
        return mostrarAlerta("La fecha de nacimiento no puede ser futura", "error");

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate()))
        edad--;

    if (edad < 18)
        return mostrarAlerta("Debes ser mayor de 18 años para registrarte", "advertencia");

    if (edad > 100)
        return mostrarAlerta("La fecha de nacimiento no es válida", "error");

    if (!/^\d+$/.test(telefono))
        return mostrarAlerta("El teléfono no puede contener letras, solo números", "error");

    if (telefono.length !== 10)
        return mostrarAlerta("El teléfono debe tener 10 dígitos", "advertencia");

    if (clave.length < 6)
        return mostrarAlerta("La contraseña debe tener mínimo 6 caracteres", "advertencia");

    if (/\s/.test(clave))
        return mostrarAlerta("La contraseña no debe contener espacios", "advertencia");

    if (clave !== clave2)
        return mostrarAlerta("Las contraseñas no coinciden", "error");

    guardarDatosCliente();
});
