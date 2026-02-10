<?php

require_once __DIR__ . '/../database/conexion.php';

class MetodoPagoService {

    private $db;

    public function __construct() {
        $this->db = Conexion::conectar();
    }

    // Listar todos los métodos de pago
    public function listarMetodosPago(): array {
        try {
            $sql = "SELECT id_metodo, tipo, disponible FROM metodo_pago";
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            $metodos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $metodos;

        } catch (PDOException $e) {
            return [
                "ok" => false,
                "error" => "ERROR_CONSULTA_METODOS",
                "mensaje" => $e->getMessage()
            ];
        }
    }
}