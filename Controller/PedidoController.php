<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../Model/Services/PedidoService.php';

$service = new PedidoService();
$accion = $_GET['accion'] ?? '';

switch ($accion) {

    case 'crear':
        $data = json_decode(file_get_contents("php://input"), true);

        // Validación básica del JSON
        if (
            !$data ||
            empty($data['cliente']) ||
            empty($data['pedidos']) ||
            empty($data['fechaActual']) ||
            empty($data['fechaEntrega']) ||
            empty($data['metodoPago'])
        ) {
            echo json_encode([
                "ok" => false,
                "mensaje" => "Datos incompletos para registrar el pedido"
            ]);
            exit;
        }

        // Llamada al service (pedido + detalle)
        $resultado = $service->crearPedido($data);

        echo json_encode($resultado);
        break;

    default:
        echo json_encode([
            "ok" => false,
            "error" => "ACCION_NO_VALIDA"
        ]);
        break;
}
