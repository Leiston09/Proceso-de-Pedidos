<?php

class Pedido {

    private $num_pedido;
    private $cedula_cliente;
    private $fecha_pedido;
    private $fecha_entrega;
    private $id_metodo;

    public function __construct(
        $num_pedido,
        $cedula_cliente,
        $fecha_pedido,
        $fecha_entrega,
        $id_metodo
    ) {
        $this->num_pedido = $num_pedido;
        $this->cedula_cliente = $cedula_cliente;
        $this->fecha_pedido = $fecha_pedido;
        $this->fecha_entrega = $fecha_entrega;
        $this->id_metodo = $id_metodo;
    }

    public function getNumPedido() {
        return $this->num_pedido;
    }

    public function getCedulaCliente() {
        return $this->cedula_cliente;
    }

    public function getFechaPedido() {
        return $this->fecha_pedido;
    }

    public function getFechaEntrega() {
        return $this->fecha_entrega;
    }

    public function getIdMetodo() {
        return $this->id_metodo;
    }
}
