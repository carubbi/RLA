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
let N: number; // Quantidade de números
let V: number; // Número atual
let A: number; // Número anterior
let i: number; // Posição atual
let Q: number; // Quantidade máxima de números marcados

// Entrada de dados
N = lerNum('Digite a quantidade de números:');
V = lerNum('Digite o número da sequência (1 ou 2):');

// Processamento dos dados
A = V;
Q = 1;

for (i = 2; i <= N; i++) {
    V = lerNum('Digite o número da sequência (1 ou 2):');

    if (V !== A) {
        Q++;
    }

    A = V;
}

// Saída de dados
console.log(Q);
