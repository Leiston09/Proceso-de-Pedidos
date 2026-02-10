import { actualizarUsuarioBarra } from "../../sesionProductos/JS/Diseño/mostarUsuarioBarra.js";
import { renderCarrito } from "./renderProductosCarrito.js";
import {configurarRangoFecha , mostrarFechaActual} from "./validarFecha.js"
import { cargarMetodosPago } from "./metodoPago.js";
import { inicializarGuardarPedido } from "./PEDIDO/pedido_detallePedido.js";

actualizarUsuarioBarra()
renderCarrito()
configurarRangoFecha()
cargarMetodosPago()
mostrarFechaActual(); 
inicializarGuardarPedido()
