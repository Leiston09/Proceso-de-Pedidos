<?php
require_once __DIR__ . '/../database/conexion.php';

class StockService {

    private $db;

    public function __construct() {
        $this->db = Conexion::conectar();
    }

    public function restarStock($idProducto, $cantidad) {

        $sql = "SELECT stock_actual 
                FROM producto 
                WHERE id_producto = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$idProducto]);
        $producto = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$producto) {
            throw new Exception("Producto no encontrado");
        }

        $nuevoStock = $producto['stock_actual'] - $cantidad;

        if ($nuevoStock < 0) {
            throw new Exception("Stock insuficiente");
        }

        if ($nuevoStock == 0) {
            $sql = "UPDATE producto 
                    SET stock_actual = 0, estado = 'agotado'
                    WHERE id_producto = ?";
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$idProducto]);
        } else {
            $sql = "UPDATE producto 
                    SET stock_actual = ?
                    WHERE id_producto = ?";
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$nuevoStock, $idProducto]);
        }
    }
}
