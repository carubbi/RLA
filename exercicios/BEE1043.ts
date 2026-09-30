// Declarar as variáveis
let entA: string;
let entB: string;
let entC: string;
let a: number;
let b: number;
let c: number;
let resultado: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;
entC = prompt('Digite C: ')!;

// Processamento dos dados
a = parseFloat(entA);
b = parseFloat(entB);
c = parseFloat(entC);

if (a < b + c && b < a + c && c < a + b) {
    resultado = a + b + c;

    // Saída de dados
    console.log(`Perimetro = ${resultado.toFixed(1)}`);
} else {
    resultado = (a + b) * c / 2;
    console.log(`Area = ${resultado.toFixed(1)}`);
}
