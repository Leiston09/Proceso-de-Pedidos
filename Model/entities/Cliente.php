<?php

class Cliente {

    private $cedula;
    private $nombre;
    private $apellido;
    private $correo;
    private $telefono;
    private $direccion;
    private $fecha_nacimiento;
    private $tipo_cliente;
    private $estado;
    private $clave;

    public function __construct(
        $cedula,
        $nombre,
        $apellido,
        $correo,
        $telefono,
        $direccion,
        $fecha_nacimiento,
        $tipo_cliente,
        $estado,
        $clave,
    ) {
        $this->cedula = $cedula;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->correo = $correo;
        $this->telefono = $telefono;
        $this->direccion = $direccion;
        $this->fecha_nacimiento = $fecha_nacimiento;
        $this->tipo_cliente = $tipo_cliente;

        $this->estado = $estado;
        $this->clave = $clave;

    }

    public function getCedula() {
        return $this->cedula;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getApellido() {
        return $this->apellido;
    }

    public function getCorreo() {
        return $this->correo;
    }

    public function getTelefono() {
        return $this->telefono;
    }

    public function getDireccion() {
        return $this->direccion;
    }

    public function getFecha_nacimiento() {
        return $this->fecha_nacimiento;
    }

    public function getEstado() {
        return $this->estado;
    }
    
    public function getTipoCliente() {
    return $this->tipo_cliente;
    }
    
    public function getClave() {
        return $this->clave;
    }

}
