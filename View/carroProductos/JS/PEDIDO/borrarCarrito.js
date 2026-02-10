export function borrarCarrito() {
    localStorage.removeItem("carritoActivo");
    localStorage.removeItem("metodoPagoSeleccionado");
    localStorage.removeItem("fechaEntrega");
}
