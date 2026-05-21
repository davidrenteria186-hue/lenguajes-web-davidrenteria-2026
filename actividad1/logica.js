const libros = [
  {
    titulo: "El Aleph",
    autor: "Borges",
    ventas: 1200,
    disponible: true,
  },
  {
    titulo: "Rayuela",
    autor: "Cortázar",
    ventas: 950,
    disponible: false,
  },
  {
    titulo: "Ficciones",
    autor: "Borges",
    ventas: 2000,
    disponible: true,
  },
  {
    titulo: "100 años de soledad",
    autor: "García Márquez",
    ventas: 3000,
    disponible: true,
  },
];

const librosPopulares = libros.filter(
  (libro) => libro.ventas > 1000
);

console.log("Libros populares:");
console.log(librosPopulares);

const ventasBorges = libros
  .filter((libro) => libro.autor === "Borges")
  .reduce((total, libro) => total + libro.ventas, 0);

console.log("Ventas de Borges:");
console.log(ventasBorges);

const inventario = libros
  .map((libro) => ({
    titulo: libro.titulo,
    estado: libro.disponible ? "Disponible" : "Agotado",
    ventas: libro.ventas,
  }))
  .sort((a, b) => b.ventas - a.ventas);

console.log("Inventario ordenado:");
console.log(inventario);