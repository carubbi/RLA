// Declarar as variáveis
let entA: string;
let entB: string;
let entC: string;
let A: number;
let B: number;
let C: number;
let maiorAB: number;
let maior: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;
entC = prompt('Digite C: ')!;

// Processamento dos dados
A = parseInt(entA);
B = parseInt(entB);
C = parseInt(entC);

maiorAB = (A + B + Math.abs(A - B)) / 2;
maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

// Saída de dados
console.log(`${maior} eh o maior`);
