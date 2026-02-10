<?php

require_once __DIR__ . '/../database/conexion.php';
require_once __DIR__ . '/StockService.php';

class PedidoService {

    private $db;
    private $stockService; //-->

    public function __construct() {
        $this->db = Conexion::conectar();
        $this->stockService = new StockService();//-->

    }

    // GUARDAR PEDIDO + DETALLE_PEDIDO
    public function crearPedido(array $data): array {

        try {
            // 🔒 1. Transacción SOLO para pedido y detalle
            $this->db->beginTransaction();

            // Pedido
            $sqlPedido = "INSERT INTO pedido
                (cedula_cliente, fecha_pedido, fecha_entrega, id_metodo)
                VALUES (?, ?, ?, ?)";

            $stmtPedido = $this->db->prepare($sqlPedido);
            $stmtPedido->execute([
                $data['cliente'],
                $data['fechaActual'],
                $data['fechaEntrega'],
                $data['metodoPago']
            ]);

            $numPedido = $this->db->lastInsertId();

            // Detalle
            $sqlDetalle = "INSERT INTO detalle_pedido
                (num_pedido, id_producto, cantidad, precio_unitario, subtotal)
                VALUES (?, ?, ?, ?, ?)";

            $stmtDetalle = $this->db->prepare($sqlDetalle);

            foreach ($data['pedidos'] as $producto) {

                $cantidad = $producto['cantidad'];
                $precio   = $producto['precio_unitario'];

                $stmtDetalle->execute([
                    $numPedido,
                    $producto['id_producto'],
                    $cantidad,
                    $precio,
                    $cantidad * $precio
                ]);
            }

            // ✅ Cerrar transacción
            $this->db->commit();

            // 🔴 2. Restar stock FUERA de la transacción
            foreach ($data['pedidos'] as $producto) {
                $this->stockService->restarStock(
                    $producto['id_producto'],
                    $producto['cantidad']
                );
            }

            return [
                "ok" => true,
                "num_pedido" => $numPedido
            ];

        } catch (Exception $e) {

            if ($this->db->inTransaction()) {
                $this->db->rollBack();
            }

            return [
                "ok" => false,
                "error" => $e->getMessage()
            ];
        }
    }


}
