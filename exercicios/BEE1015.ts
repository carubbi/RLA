// Declarar as variáveis
let entX1: string;
let entY1: string;
let entX2: string;
let entY2: string;
let x1: number;
let y1: number;
let x2: number;
let y2: number;
let distancia: number;

// Entrada de dados
entX1 = prompt('Digite X1: ')!;
entY1 = prompt('Digite Y1: ')!;
entX2 = prompt('Digite X2: ')!;
entY2 = prompt('Digite Y2: ')!;

// Processamento dos dados
x1 = parseFloat(entX1);
y1 = parseFloat(entY1);
x2 = parseFloat(entX2);
y2 = parseFloat(entY2);
distancia = ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) ** 0.5;

// Saída de dados
console.log(distancia.toFixed(4));
