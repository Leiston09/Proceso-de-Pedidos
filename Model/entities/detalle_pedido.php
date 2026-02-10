<?php

class DetallePedido {
    private $id;
    private $pedido_id;
    private $producto_id;
    private $cantidad;
    private $precio_unitario;
    private $subtotal;

    public function __construct(
        $id,
        $pedido_id,
        $producto_id,
        $cantidad,
        $precio_unitario,
        $subtotal
    ) {
        $this->id = $id;
        $this->pedido_id = $pedido_id;
        $this->producto_id = $producto_id;
        $this->cantidad = $cantidad;
        $this->precio_unitario = $precio_unitario;
        $this->subtotal = $subtotal;
    }

    public function getId() {
        return $this->id;
    }

    public function getPedidoId() {
        return $this->pedido_id;
    }

    public function getProductoId() {
        return $this->producto_id;
    }

    public function getCantidad() {
        return $this->cantidad;
    }

    public function getPrecioUnitario() {
        return $this->precio_unitario;
    }

    public function getSubtotal() {
        return $this->subtotal;
    }
}
