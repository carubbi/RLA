// Declarar as variáveis
let entA: string;
let entB: string;
let A: number;
let B: number;
let X: number;

// Entrada de dados
entA = prompt('Digite o valor de A:')!;
entB = prompt('Digite o valor de B:')!;

// Processamento dos dados
// Converter as entradas (string) para numérico
A = parseInt(entA, 10);
B = parseInt(entB, 10);

// Calcular a soma
X = A + B;

// Saída de dados
console.log(`X = ${X}`);
