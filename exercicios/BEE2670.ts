// Declarar as variáveis
let entA1: string;
let entA2: string;
let entA3: string;
let a1: number;
let a2: number;
let a3: number;
let tempo1: number;
let tempo2: number;
let tempo3: number;
let menorTempo: number;

// Entrada de dados
entA1 = prompt('Funcionários no primeiro andar: ')!;
entA2 = prompt('Funcionários no segundo andar: ')!;
entA3 = prompt('Funcionários no terceiro andar: ')!;

// Processamento dos dados
a1 = parseInt(entA1);
a2 = parseInt(entA2);
a3 = parseInt(entA3);
tempo1 = 2 * a2 + 4 * a3;
tempo2 = 2 * a1 + 2 * a3;
tempo3 = 4 * a1 + 2 * a2;
menorTempo = tempo1;

if (tempo2 < menorTempo) {
    menorTempo = tempo2;
}

if (tempo3 < menorTempo) {
    menorTempo = tempo3;
}

// Saída de dados
console.log(menorTempo);
