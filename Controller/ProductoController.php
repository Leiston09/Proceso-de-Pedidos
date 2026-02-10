<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../Model/Services/ProductoService.php';

$service = new ProductoService();
$accion = $_GET['accion'] ?? '';

switch ($accion) {

    case 'obtenerProductos':
        echo json_encode($service->obtenerProductos());
        break;

    default:
        echo json_encode([
            "ok" => false,
            "error" => "ACCION_NO_VALIDA"
        ]);
}
