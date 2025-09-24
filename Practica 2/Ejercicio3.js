const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];
const personaLuis = personas.find(m => m.nombre === "Luis");
personas.forEach(m => {
  console.log(m.nombre + " tiene " + m.edad + " años.");
});

const suma = personas.reduce((total, m) => total + m.edad, 0);
console.log("La suma de todas las edades es: " + suma);