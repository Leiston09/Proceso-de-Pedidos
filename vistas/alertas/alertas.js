export function mostrarAlerta(mensaje, tipo) {

  // Si ya hay una alerta, eliminarla
  const alertaExistente = document.querySelector(".alerta");
  if (alertaExistente) {
    alertaExistente.remove();
  }

  const alerta = document.createElement("div");
  alerta.classList.add("alerta");

  if (tipo === "error") alerta.classList.add("alerta-error");
  if (tipo === "exito") alerta.classList.add("alerta-exito");
  if (tipo === "advertencia") alerta.classList.add("alerta-advertencia");
  if (tipo === "info") alerta.classList.add("alerta-info");

  alerta.textContent = mensaje;
  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 4000);
}
