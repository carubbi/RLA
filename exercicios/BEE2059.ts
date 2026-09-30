// Declarar as variáveis
let entP: string | null;
let entJ1: string | null;
let entJ2: string | null;
let entR: string | null;
let entA: string | null;
let p: number;
let j1: number;
let j2: number;
let r: number;
let a: number;
let soma: number;

// Entrada de dados
entP = prompt('Digite par ou impar: ');
entJ1 = prompt('Digite o valor do jogador 1: ');
entJ2 = prompt('Digite o valor do jogador 2: ');
entR = prompt('Digite se jogador 1 roubou: ');
entA = prompt('Digite se jogador 2 acusou: ');

// Processamento dos dados
if (
    entP !== null &&
    entJ1 !== null &&
    entJ2 !== null &&
    entR !== null &&
    entA !== null
) {
    p = parseInt(entP);
    j1 = parseInt(entJ1);
    j2 = parseInt(entJ2);
    r = parseInt(entR);
    a = parseInt(entA);
    soma = j1 + j2;

    if (r === 1 && a === 1) {
        // Saída de dados
        console.log('Jogador 2 ganha!');
    } else if (r === 1 && a === 0) {
        console.log('Jogador 1 ganha!');
    } else if (r === 0 && a === 1) {
        console.log('Jogador 1 ganha!');
    } else if ((soma % 2 === 0 && p === 1) || (soma % 2 !== 0 && p === 0)) {
        console.log('Jogador 1 ganha!');
    } else {
        console.log('Jogador 2 ganha!');
    }
}
