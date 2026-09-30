// Declarar as variáveis
let entA: string;
let entB: string;
let A: number;
let B: number;
let mensagem: string;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;

// Processamento dos dados
A = parseInt(entA);
B = parseInt(entB);

// Saída de dados
if ((A % B == 0) || (B % A == 0)) {
    mensagem = 'Sao';
} else {
    mensagem = 'Nao sao';
}

console.log(`${mensagem} Multiplos`);