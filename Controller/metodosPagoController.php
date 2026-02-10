<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../Model/Services/MetodoPagoService.php';

$service = new MetodoPagoService();
$accion = $_GET['accion'] ?? '';

switch ($accion) {

    case 'listar':
        $resultado = $service->listarMetodosPago();
        echo json_encode($resultado);
        break;

    default:
        echo json_encode([
            "ok" => false,
            "error" => "ACCION_NO_VALIDA"
        ]);
        break;
}