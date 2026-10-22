// Declarar as variáveis
let entA: string;
let entB: string;
let entC: string;
let a: number;
let b: number;
let c: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;
entC = prompt('Digite C: ')!;

// Processamento dos dados
a = parseInt(entA);
b = parseInt(entB);
c = parseInt(entC);

// Saída de dados
if (a === b || a === c || b === c || a + b === c || a + c === b || b + c === a) {
    console.log('S');
} else {
    console.log('N');
}
