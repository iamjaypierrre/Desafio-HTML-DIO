
const precoCombustivel = 5.79;
const kmPorLitros = 1;
const distanciaEmKm= 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);

