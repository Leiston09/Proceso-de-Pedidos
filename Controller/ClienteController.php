<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../Model/Services/ClienteService.php';

$service = new ClienteService();
$accion = $_GET['accion'] ?? '';

switch ($accion) {



    case 'login':
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data || empty($data['correo']) || empty($data['clave'])) {
            echo json_encode([
                "ok" => false,
                "mensaje" => "Datos incompletos"
            ]);
            exit;
        }

        $resultado = $service->login($data['correo'], $data['clave']);
        echo json_encode($resultado);
        break;




    case 'guardarCliente':
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            echo json_encode([
                "ok" => false,
                "error" => "DATOS_INVALIDOS"
            ]);
            exit;
        }
        $resultado = $service->guardarCliente($data);
        echo json_encode($resultado);
        break;






    default:
        echo json_encode([
            "ok" => false,
            "error" => "ACCION_NO_VALIDA"
        ]);
        break;
}
