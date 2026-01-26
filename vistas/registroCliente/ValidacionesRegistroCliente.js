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
    const telefonoInput = document.getElementById("telefono");
    const telefono = telefonoInput ? telefonoInput.value.trim() : "";

    // 1️⃣ Campos obligatorios
    if (!cedula || !correo || !nombre || !apellido || !fecha || !clave || !clave2) {
        mostrarAlerta("Todos los campos obligatorios deben completarse", "error");
        return;
    }

    // 2️⃣ Cédula (10 dígitos)
    if (!/^\d{10}$/.test(cedula)) {
        mostrarAlerta("La cédula debe tener 10 dígitos", "advertencia");
        return;
    }

    // 3️⃣ Nombre y apellido (solo letras y espacios)
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regexNombre.test(nombre)) {
        mostrarAlerta("El nombre solo puede contener letras", "error");
        return;
    }

    if (!regexNombre.test(apellido)) {
        mostrarAlerta("El apellido solo puede contener letras", "error");
        return;
    }

    if (nombre.length < 2) {
        mostrarAlerta("El nombre debe tener al menos 2 letras", "advertencia");
        return;
    }

    if (apellido.length < 2) {
        mostrarAlerta("El apellido debe tener al menos 2 letras", "advertencia");
        return;
    }

    // 4️⃣ Correo válido
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        mostrarAlerta("El correo debe ser válido", "error");
        return;
    }

    // 5️⃣ Fecha de nacimiento y edad mínima
    const hoy = new Date();
    const nacimiento = new Date(fecha);

    if (nacimiento > hoy) {
        mostrarAlerta("La fecha de nacimiento no puede ser futura", "error");
        return;
    }

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    if (edad < 18) {
        mostrarAlerta("Debes ser mayor de 18 años para registrarte", "advertencia");
        return;
    }
    
    if (edad > 120) {
        mostrarAlerta("La fecha de nacimiento no es válida", "error");
        return;
    }

    // 6️⃣ Teléfono (opcional)
    if (telefono && !/^\d{10}$/.test(telefono)) {
        mostrarAlerta("El teléfono debe tener 10 dígitos", "advertencia");
        return;
    }

    // 7️⃣ Contraseña
    if (clave.length < 6) {
        mostrarAlerta("La contraseña debe tener mínimo 6 caracteres", "advertencia");
        return;
    }

    if (/\s/.test(clave)) {
        mostrarAlerta("La contraseña no debe contener espacios", "advertencia");
        return;
    }

    if (clave !== clave2) {
        mostrarAlerta("Las contraseñas no coinciden", "error");
        return;
    }

    // ✅ Todo correcto
    guardarDatosCliente();

});
