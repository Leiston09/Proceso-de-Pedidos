<?php

class Producto {

    private $id_producto;
    private $id_categoria;
    private $codigo_barra;
    private $sku_interno;
    private $nombre;
    private $descripcion;
    private $unidad;
    private $stock_actual;
    private $stock_minimo;
    private $stock_maximo;
    private $ubicacion_fisica;
    private $costo_promedio;
    private $ultimo_costo;
    private $punto_reorden;
    private $estado;

    public function __construct(
        $id_producto,
        $id_categoria,
        $codigo_barra,
        $sku_interno,
        $nombre,
        $descripcion,
        $unidad,
        $stock_actual,
        $stock_minimo,
        $stock_maximo,
        $ubicacion_fisica,
        $costo_promedio,
        $ultimo_costo,
        $punto_reorden,
        $estado
    ) {
        $this->id_producto = $id_producto;
        $this->id_categoria = $id_categoria;
        $this->codigo_barra = $codigo_barra;
        $this->sku_interno = $sku_interno;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->unidad = $unidad;
        $this->stock_actual = $stock_actual;
        $this->stock_minimo = $stock_minimo;
        $this->stock_maximo = $stock_maximo;
        $this->ubicacion_fisica = $ubicacion_fisica;
        $this->costo_promedio = $costo_promedio;
        $this->ultimo_costo = $ultimo_costo;
        $this->punto_reorden = $punto_reorden;
        $this->estado = $estado;
    }

    public function getIdProducto() {
        return $this->id_producto;
    }

    public function getIdCategoria() {
        return $this->id_categoria;
    }

    public function getCodigoBarra() {
        return $this->codigo_barra;
    }

    public function getSkuInterno() {
        return $this->sku_interno;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function getUnidad() {
        return $this->unidad;
    }

    public function getStockActual() {
        return $this->stock_actual;
    }

    public function getStockMinimo() {
        return $this->stock_minimo;
    }

    public function getStockMaximo() {
        return $this->stock_maximo;
    }

    public function getUbicacionFisica() {
        return $this->ubicacion_fisica;
    }

    public function getCostoPromedio() {
        return $this->costo_promedio;
    }

    public function getUltimoCosto() {
        return $this->ultimo_costo;
    }

    public function getPuntoReorden() {
        return $this->punto_reorden;
    }

    public function getEstado() {
        return $this->estado;
    }
}
