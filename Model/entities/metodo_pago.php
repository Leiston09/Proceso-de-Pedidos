<?php

class MetodoPago {
    private $id;
    private $tipo;
    private $estado;

    public function __construct(
        $id,
        $nombre,
        $tipo,
        $estado
    ) {
        $this->id = $id;
        $this->tipo = $tipo;
        $this->estado = $estado;
    }

    public function getId() {
        return $this->id;
    }

    public function getDescripcion() {
        return $this->tipo;
    }

    public function getEstado() {
        return $this->estado;
    }
}
