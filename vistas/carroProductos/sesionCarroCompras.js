import { 
    obtenerProductosCarrito, 
    eliminarDelCarrito, 
    actualizarCantidadCarrito,
    obtenerTotalesCarrito,
    vaciarCarrito,
    obtenerCantidadTotalCarrito
} from '../../controlador/';
import { mostrarAlerta } from '../alertas/alertas.js';

document.addEventListener("DOMContentLoaded", () => {
    inicializarCarrito();
    renderizarCarrito();
    configurarEventos();
    actualizarContadorNavbar();
});

function inicializarCarrito() {
    const carrito = obtenerProductosCarrito();
    console.log('Carrito inicializado:', carrito);
}

function renderizarCarrito() {
    const carrito = obtenerProductosCarrito();
    const mensajeVacio = document.getElementById('mensaje-carrito-vacio');
    const contenidoCarrito = document.getElementById('contenido-carrito');
    const tablaBody = document.getElementById('tabla-carrito-body');
    const seccionTotales = document.getElementById('seccion-totales');
    const botonesAccion = document.getElementById('botones-accion');

    if (carrito.length === 0) {
        mensajeVacio.style.display = 'block';
        contenidoCarrito.style.display = 'none';
        seccionTotales.style.display = 'none';
        botonesAccion.style.display = 'none';
        return;
    }

    mensajeVacio.style.display = 'none';
    contenidoCarrito.style.display = 'block';
    seccionTotales.style.display = 'block';
    botonesAccion.style.display = 'flex';

    tablaBody.innerHTML = carrito.map((producto, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>
                <div class="producto-info">
                    <img src="../Imagenes/${producto.imagen}" 
                         alt="${producto.nombre}" 
                         class="producto-imagen"
                         onerror="this.src='../Imagenes/imagenBarraOpciones/Usuario.png'">
                    <div class="producto-detalles">
                        <strong>${producto.nombre}</strong>
                        <span class="producto-categoria">${producto.categoria}</span>
                    </div>
                </div>
            </td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <input type="number" 
                       value="${producto.cantidad}" 
                       min="1" 
                       max="${producto.stock}"
                       data-id="${producto.idPedido}"
                       class="input-cantidad">
            </td>
            <td>$${producto.subtotal.toFixed(2)}</td>
            <td>
                <button class="btn-eliminar" data-id="${producto.idPedido}">
                    Eliminar
                </button>
            </td>
        </tr>
    `).join('');

    actualizarTotales();
    actualizarContadorNavbar();
}

function actualizarTotales() {
    const totales = obtenerTotalesCarrito();
    
    document.getElementById('subtotal').textContent = `$${parseFloat(totales.subtotal).toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
    
    document.getElementById('descuentos').textContent = `-$${parseFloat(totales.descuentos).toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
    
    document.getElementById('impuestos').textContent = `+$${parseFloat(totales.impuestos).toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
    
    document.getElementById('total-pagar').textContent = `$${parseFloat(totales.total).toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

function configurarEventos() {
    const tablaBody = document.getElementById('tabla-carrito-body');
    
    tablaBody.addEventListener('input', (e) => {
        if (e.target.classList.contains('input-cantidad')) {
            const idPedido = parseInt(e.target.dataset.id);
            let nuevaCantidad = parseInt(e.target.value);
            
            if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
                nuevaCantidad = 1;
                e.target.value = nuevaCantidad;
            }
            
            const resultado = actualizarCantidadCarrito(idPedido, nuevaCantidad);
            
            if (!resultado.success && resultado.message) {
                mostrarAlerta(resultado.message, "error");
            }
            
            renderizarCarrito();
        }
    });
    
    tablaBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const idPedido = parseInt(e.target.dataset.id);
            
            if (confirm('¿Estás seguro de eliminar este producto del carrito?')) {
                const resultado = eliminarDelCarrito(idPedido);
                
                if (resultado.success) {
                    mostrarAlerta('Producto eliminado del carrito', 'exito');
                    renderizarCarrito();
                } else {
                    mostrarAlerta(resultado.message || 'Error al eliminar producto', 'error');
                }
            }
        }
    });
    
    const btnVaciar = document.getElementById('btn-vaciar-carrito');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de vaciar todo el carrito? Esta acción no se puede deshacer.')) {
                const resultado = vaciarCarrito();
                
                if (resultado.success) {
                    mostrarAlerta('Carrito vaciado correctamente', 'exito');
                    renderizarCarrito();
                } else {
                    mostrarAlerta(resultado.message || 'Error al vaciar carrito', 'error');
                }
            }
        });
    }
    
    const btnConfirmarPago = document.getElementById('btn-confirmar-pago');
    if (btnConfirmarPago) {
        btnConfirmarPago.addEventListener('click', (e) => {
            e.preventDefault();
            
            const carrito = obtenerProductosCarrito();
            if (carrito.length === 0) {
                mostrarAlerta('Tu carrito está vacío', 'error');
                return;
            }
            
            const fechaEntrega = document.getElementById('fecha-entrega').value;
            if (!fechaEntrega) {
                mostrarAlerta('Por favor selecciona una fecha de entrega', 'error');
                return;
            }
            
            const hoy = new Date().toISOString().split('T')[0];
            if (fechaEntrega <= hoy) {
                mostrarAlerta('La fecha de entrega debe ser mayor al día de hoy', 'error');
                return;
            }
            
            const metodoPago = document.querySelector('input[name="metodo-pago"]:checked').value;
            
            mostrarAlerta('Pedido confirmado correctamente. ¡Gracias por tu compra!', 'exito');
            
            setTimeout(() => {
                vaciarCarrito();
                window.location.href = '../sesionProductos/sesionPedidos.html';
            }, 2000);
        });
    }
    
    const inputFecha = document.getElementById('fecha-entrega');
    if (inputFecha) {
        const hoy = new Date();
        const manana = new Date(hoy);
        manana.setDate(hoy.getDate() + 1);
        const fechaMinima = manana.toISOString().split('T')[0];
        inputFecha.setAttribute('min', fechaMinima);
        
        inputFecha.addEventListener('change', () => {
            const fechaSeleccionada = inputFecha.value;
            
            if (fechaSeleccionada < fechaMinima) {
                mostrarAlerta(`La fecha de entrega debe ser a partir del ${manana.toLocaleDateString('es-ES')}`, 'error');
                inputFecha.value = fechaMinima;
            }
        });
    }
}

function actualizarContadorNavbar() {
    const contadores = document.querySelectorAll('.contador-carrito');
    const cantidadTotal = obtenerCantidadTotalCarrito();
    
    contadores.forEach(contador => {
        contador.textContent = cantidadTotal;
        contador.style.display = cantidadTotal > 0 ? 'inline-block' : 'none';
    });
}

export { renderizarCarrito, actualizarContadorNavbar };