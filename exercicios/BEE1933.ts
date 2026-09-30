// Declarar as variáveis
let entA: string;
let entB: string;
let a: number;
let b: number;

// Entrada de dados
entA = prompt('Digite a primeira carta: ')!;
entB = prompt('Digite a segunda carta: ')!;

// Processamento dos dados
a = parseInt(entA);
b = parseInt(entB);

if (a >= b) {
    // Saída de dados
    console.log(a);
} else {
    console.log(b);
}
