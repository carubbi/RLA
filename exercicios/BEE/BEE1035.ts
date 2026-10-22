// Declarar as variáveis
let entA: string;
let entB: string;
let entC: string;
let entD: string;
let a: number;
let b: number;
let c: number;
let d: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;
entC = prompt('Digite C: ')!;
entD = prompt('Digite D: ')!;

// Processamento dos dados
a = parseInt(entA);
b = parseInt(entB);
c = parseInt(entC);
d = parseInt(entD);

// Saída de dados
if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}
