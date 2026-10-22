// Declarar as variáveis
let entA: string;
let entB: string;
let A: number;
let B: number;
let MEDIA: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;

// Processamento dos dados
A = parseFloat(entA);
B = parseFloat(entB);
MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

// Saída de dados
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
