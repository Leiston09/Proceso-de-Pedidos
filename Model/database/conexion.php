<?php

class Conexion {

    private static $host = "localhost";
    private static $db   = "pedidos"; 
    private static $user = "root";
    private static $pass = "";
    private static $charset = "utf8mb4";

    public static function conectar() {
        try {
            $dsn = "mysql:host=" . self::$host . ";dbname=" . self::$db . ";charset=" . self::$charset;
            $opciones = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            return new PDO($dsn, self::$user, self::$pass, $opciones);

        } catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }
}
