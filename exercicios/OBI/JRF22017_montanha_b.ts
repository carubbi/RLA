// Soluções abaixo admitem apenas números inteiros válidos, sem tratamento de erros
// Versão do código com função auxiliar para leitura e conversão de números
function lerNum(m: string): number {
    let e: string | null; // Entrada do usuário

    while (true) {
        e = prompt(m);

        if (e !== null) {
            return parseInt(e);
        }
    }
}

/*
// Função de leitura e conversão sem o loop de repetição
function lerNum(mensagem: string): number {
    let entrada: string | null;

    entrada = prompt(mensagem);
    if (entrada !== null) return parseInt(entrada);
    return 0;
}
*/

// Declarar as variáveis
let N: number; // Quantidade de alturas
let A: number; // Altura à esquerda
let B: number; // Altura do meio
let C: number; // Altura à direita
let i: number; // Posição da altura à direita
let P: boolean; // Indica se foi encontrado um vale

// Entrada de dados
N = lerNum('Digite a quantidade de alturas:');
A = lerNum('Digite a primeira altura:');
B = lerNum('Digite a segunda altura:');

// Processamento dos dados
P = false;

for (i = 3; i <= N; i++) {
    C = lerNum('Digite a próxima altura:');

    if (A > B && B < C) {
        P = true;
    }

    A = B;
    B = C;
}

// Saída de dados
if (P) {
    console.log('S');
} else {
    console.log('N');
}
