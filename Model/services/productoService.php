<?php
require_once __DIR__ . '/../database/conexion.php';

class ProductoService {

    private $db;

    public function __construct() {
        $this->db = Conexion::conectar();
    }

    public function obtenerProductos() {
        $sql = "SELECT * FROM producto WHERE estado = 'disponible'";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}
