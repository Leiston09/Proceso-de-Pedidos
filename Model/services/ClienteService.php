<?php

require_once __DIR__ . '/../database/conexion.php';

class ClienteService {

    private $db;

    public function __construct() {
        $this->db = Conexion::conectar();
    }

    //GUARDAR CLIENTE 'ALEX'


    public function guardarCliente(array $data): array {

        try {

            $sql = "INSERT INTO cliente
                (cedula, nombre, apellido, telefono, correo, direccion, fecha_nacimiento, tipo_cliente, estado_cliente, clave)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            $stmt = $this->db->prepare($sql);
            $stmt->execute([
                $data['cedula'],
                $data['nombre'],
                $data['apellido'],
                $data['telefono'] ?? '',
                $data['correo'],
                $data['direccion'] ?? '',
                $data['edad'] ?? null,
                'NORMAL',
                'ACTIVO',
                password_hash($data['clave'], PASSWORD_DEFAULT)
            ]);

            return ["ok" => true];

        } catch (PDOException $e) {

            if ($e->getCode() === '23000') {

                $mensaje = $e->getMessage();

                if (str_contains($mensaje, 'correo')) {
                    return [
                        "ok" => false,
                        "error" => "CORREO_DUPLICADO"
                    ];
                }

                if (str_contains($mensaje, 'cedula')) {
                    return [
                        "ok" => false,
                        "error" => "CEDULA_DUPLICADA"
                    ];
                }

                return [
                    "ok" => false,
                    "error" => "DUPLICADO"
                ];
            }

        }

    }



    //VALIDACION LOGIN 'ALEX'


    public function login(string $correo, string $clave): array {

        $sql = "SELECT cedula , nombre, apellido, correo, clave FROM cliente WHERE correo = ? AND estado_cliente = 'ACTIVO'";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$correo]);
        $cliente = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$cliente) {
            return [
                "ok" => false,
                "mensaje" => "Usuario no existe"
            ];
        }

        if (!password_verify($clave, $cliente['clave'])) {
            return [
                "ok" => false,
                "mensaje" => "Contraseña incorrecta"
            ];
        }

        return [
            "ok" => true,
            "cedula" => $cliente['cedula'],
            "nombre" => $cliente['nombre'],
            "apellido" => $cliente['apellido'],
            "correo" => $cliente['correo']
        ];
    }








}
