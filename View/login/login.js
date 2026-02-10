import { mostrarAlerta } from "../alertas/alertas.js";

const btnLogin = document.querySelector("button");

btnLogin.addEventListener("click", async (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const clave = document.getElementById("clave").value;

    if (!correo || !clave) {
        mostrarAlerta("Completa todos los campos", "error");
        return;
    }

    const resp = await fetch(
        "./Controller/ClienteController.php?accion=login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo, clave })
        }
    );

    const resultado = await resp.json();

    if (!resultado.ok) {
        mostrarAlerta(resultado.mensaje || "Credenciales incorrectas", "error");
        return;
    }

    const usuario = {
        cedula: resultado.cedula,
        nombre: resultado.nombre, //nombre para mostrar
        apellido : resultado.apellido   //apellido para mostrar
    };

    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));


    mostrarAlerta("Inicio de sesión exitoso", "exito");

    setTimeout(() => {
        window.location.href = "./View/sesionProductos/sesionProductos.html";
    }, 1200);
});
