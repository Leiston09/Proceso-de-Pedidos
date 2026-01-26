import { Producto } from "../modelo/producto.js";

export const productos = [
  // ================= CELULARES =================
  new Producto({
    id: "P001",
    nombre: "Audífonos Inalámbricos",
    descripcion: "Audífonos bluetooth con cancelación de ruido.",
    categoria: "celulares",
    precio: 49.99,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "celulares1.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "P002",
    nombre: "Cargador USB-C",
    descripcion: "Cargador rápido de 20W para celulares.",
    categoria: "celulares",
    precio: 18.50,
    stock: 5,
    impuesto: 12,
    descuento: 0,
    imagen: "celulares2.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "P003",
    nombre: "Cable Tipo C",
    descripcion: "Cable reforzado de carga y datos.",
    categoria: "celulares",
    precio: 5.99,
    stock: 9,
    impuesto: 12,
    descuento: 0,
    imagen: "celulares3.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "P004",
    nombre: "Soporte para celular",
    descripcion: "Soporte ajustable para escritorio.",
    categoria: "celulares",
    precio: 7.99,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "celulares4.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "P005",
    nombre: "Power Bank 10000mAh",
    descripcion: "Batería externa de alta capacidad.",
    categoria: "celulares",
    precio: 25.00,
    stock: 10,
    impuesto: 12,
    descuento: 5,
    imagen: "celulares5.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "P006",
    nombre: "Funda Protectora Gota",
    descripcion: "Protección extrema contra caídas.",
    categoria: "celulares",
    precio: 12.99,
    stock: 20,
    impuesto: 12,
    descuento: 0,
    imagen: "celulares6.jpg",
    estado: "disponible"
  }),

  // ================= BEBIDAS =================
  new Producto({
    id: "B001",
    nombre: "Bebida Energética",
    descripcion: "Bebida energizante sabor original.",
    categoria: "bebidas",
    precio: 1.50,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "bebida1.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "B002",
    nombre: "Bebida Energética Alex",
    descripcion: "Bebida energética sabor frutas.",
    categoria: "bebidas",
    precio: 1.75,
    stock: 5,
    impuesto: 12,
    descuento: 0,
    imagen: "bebida2.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "B003",
    nombre: "Bebida Natural",
    descripcion: "Bebida natural sin azúcar.",
    categoria: "bebidas",
    precio: 1.20,
    stock: 8,
    impuesto: 12,
    descuento: 0,
    imagen: "bebida3.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "B004",
    nombre: "Bebida Refrescante",
    descripcion: "Bebida fría sabor limón.",
    categoria: "bebidas",
    precio: 1.30,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "bebida4.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "B005",
    nombre: "Agua Mineral 500ml",
    descripcion: "Agua purificada de manantial.",
    categoria: "bebidas",
    precio: 0.60,
    stock: 50,
    impuesto: 12,
    descuento: 0,
    imagen: "bebida5.jpg",
    estado: "disponible"
  }),

  // ================= SNACKS =================
  new Producto({
    id: "S001",
    nombre: "Papas Fritas",
    descripcion: "Papas crujientes sabor clásico.",
    categoria: "snacks",
    precio: 0.99,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "snack1.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "S002",
    nombre: "Galletas",
    descripcion: "Galletas dulces rellenas.",
    categoria: "snacks",
    precio: 1.10,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "snack2.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "S003",
    nombre: "Chocolates",
    descripcion: "Chocolate con leche.",
    categoria: "snacks",
    precio: 1.25,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "snack3.jpg",
    estado: "disponible"
  }),


  // ================= LIMPIEZA =================
  new Producto({
    id: "L001",
    nombre: "Detergente",
    descripcion: "Detergente multiuso para ropa.",
    categoria: "limpieza",
    precio: 3.50,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "limpieza1.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "L002",
    nombre: "Cloro",
    descripcion: "Cloro para desinfección.",
    categoria: "limpieza",
    precio: 2.10,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "limpieza2.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "L003",
    nombre: "Desinfectante",
    descripcion: "Desinfectante aroma floral.",
    categoria: "limpieza",
    precio: 2.99,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "limpieza3.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "L004",
    nombre: "Limpia Vidrios",
    descripcion: "Limpiador para ventanas.",
    categoria: "limpieza",
    precio: 2.50,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "limpieza4.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "L005",
    nombre: "Jabón de Platos",
    descripcion: "Arranca grasa con aroma a limón.",
    categoria: "limpieza",
    precio: 1.90,
    stock: 25,
    impuesto: 12,
    descuento: 0,
    imagen: "limpieza5.jpg",
    estado: "disponible"
  }),

  // ================= HOGAR =================
  new Producto({
    id: "H001",
    nombre: "Esponjas",
    descripcion: "Pack de esponjas multiuso.",
    categoria: "hogar",
    precio: 1.20,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "hogar1.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "H002",
    nombre: "Trapos de limpieza",
    descripcion: "Trapos absorbentes para cocina.",
    categoria: "hogar",
    precio: 1.80,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "hogar2.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "H003",
    nombre: "Recipientes plásticos",
    descripcion: "Recipientes herméticos para alimentos.",
    categoria: "hogar",
    precio: 4.99,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "hogar3.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "H004",
    nombre: "Producto Nato Hogar",
    descripcion: "Producto exclusivo para el hogar.",
    categoria: "hogar",
    precio: 6.50,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "hogar4.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "H005",
    nombre: "Set de Perchas",
    descripcion: "Set de 6 perchas de madera.",
    categoria: "hogar",
    precio: 5.25,
    stock: 12,
    impuesto: 12,
    descuento: 0,
    imagen: "hogar5.jpg",
    estado: "disponible"
  }),

  // ================= Casas =================
  new Producto({
    id: "N001",
    nombre: "Casa Especial",
    descripcion: "Producto especial edición Casa.",
    categoria: "Casas",
    precio: 9.99,
    stock: 15,
    impuesto: 12,
    descuento: 0,
    imagen: "Casas.jpg",
    estado: "disponible"
  }),
  new Producto({
    id: "N002",
    nombre: "Casa Premium",
    descripcion: "Calidad superior línea Casa.",
    categoria: "Casas",
    precio: 15.50,
    stock: 5,
    impuesto: 12,
    descuento: 10,
    imagen: "Casas.jpg",
    estado: "disponible"
  }),
];