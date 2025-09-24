const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 550 },
  { nombre: "Monitor", precio: 3500 }
];
const filtro = productos.filter(producto => producto.precio > 1000);
const nombres = filtro.map(producto => producto.nombre);
console.log(nombres);