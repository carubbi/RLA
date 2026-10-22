// Declarar as variáveis
let entA: string;
let entB: string;
let entC: string;
let A: number;
let B: number;
let C: number;
let MEDIA: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;
entC = prompt('Digite C: ')!;

// Processamento dos dados
A = parseFloat(entA);
B = parseFloat(entB);
C = parseFloat(entC);
MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

// Saída de dados
console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
